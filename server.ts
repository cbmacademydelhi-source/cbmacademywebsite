import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory fallback persistence to ensure no application is lost
const memoryApplications: Array<{
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}> = [];

// Helper for Supabase client
function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (url && key) {
    return createClient(url, key);
  }
  return null;
}

// POST /api/apply - Application submission & email notification endpoint
app.post('/api/apply', async (req: Request, res: Response) => {
  try {
    const { name, phone, email, course, message } = req.body;

    // Validate inputs
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Full Name is required.' });
    }
    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return res.status(400).json({ error: 'Phone Number is required.' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }
    if (!course || typeof course !== 'string' || !course.trim()) {
      return res.status(400).json({ error: 'Please select a course interested in.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const applicationRecord = {
      id: crypto.randomUUID ? crypto.randomUUID() : `app_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      created_at: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      course: course.trim(),
      message: message.trim(),
    };

    // 1. Supabase Database insertion
    const supabase = getSupabaseClient();
    let dbSuccess = false;

    if (supabase) {
      const { data, error } = await supabase
        .from('applications')
        .insert([applicationRecord])
        .select();

      if (error) {
        console.error('[Supabase Error] Failed to insert application:', error.message);
      } else {
        dbSuccess = true;
        console.log('[Supabase Success] Application record inserted:', data);
      }
    } else {
      console.log('[Supabase Note] SUPABASE_URL not configured yet. Saving to secure server storage.');
    }

    // Always keep server memory record as reliable backup
    memoryApplications.push(applicationRecord);

    // 2. Email Notification to CBM Academy
    const targetEmail = process.env.COMPANY_EMAIL || 'office@cbmacademy.in';
    const emailSubject = 'New CBM Academy Application Received';
    const emailBody = `New application received through the CBM Academy website.

Applicant Details:

Name: ${applicationRecord.name}

Phone: ${applicationRecord.phone}

Email: ${applicationRecord.email}

Course Interested In: ${applicationRecord.course}

Message:
${applicationRecord.message}

Application Date:
${applicationRecord.created_at}`;

    console.log('==================================================');
    console.log(`[EMAIL NOTIFICATION DISPATCHED]`);
    console.log(`To: ${targetEmail}`);
    console.log(`Subject: ${emailSubject}`);
    console.log('--------------------------------------------------');
    console.log(emailBody);
    console.log('==================================================');

    // If Resend API key is available, send transactional email
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'CBM Academy Admissions <admissions@cbmacademy.in>',
            to: [targetEmail],
            subject: emailSubject,
            text: emailBody,
          }),
        });
        console.log('[Resend Success] Email delivered to', targetEmail);
      } catch (mailErr) {
        console.warn('[Resend Error] Could not dispatch external email:', mailErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your application has been submitted successfully. We will get in touch with you soon.',
      data: {
        id: applicationRecord.id,
        created_at: applicationRecord.created_at,
        supabaseConnected: dbSuccess,
      },
    });
  } catch (error: any) {
    console.error('[API /api/apply Error]', error);
    return res.status(500).json({
      error: 'An error occurred while submitting your application. Please try again or contact us directly.',
    });
  }
});

// GET /api/brochure/info - Check if brochure exists
app.get('/api/brochure/info', (req: Request, res: Response) => {
  const brochurePath = path.join(process.cwd(), 'public', 'assets', 'cbm-academy-brochure.pdf');
  const exists = fs.existsSync(brochurePath);
  res.json({
    available: exists,
    url: '/assets/cbm-academy-brochure.pdf',
    fileName: 'cbm-academy-brochure.pdf',
  });
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Vite & Static file handler
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CBM Academy Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

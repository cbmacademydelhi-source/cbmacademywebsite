export interface ApplicationFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  duration: string;
  mode: string;
  level: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  description: string;
  modules: string[];
  tools: string[];
  careerRoles: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
}

export interface VerifiedCertificate {
  id: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  grade: string;
  status: 'Verified' | 'Revoked';
  verificationHash: string;
}

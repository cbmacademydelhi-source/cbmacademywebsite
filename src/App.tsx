import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-900 selection:bg-orange-500 selection:text-white">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

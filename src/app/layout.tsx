import { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://codingskills.co.in'),
  title: {
    default: 'CodingSkills Academy | Learn Coding & The Best Academy for Coding',
    template: '%s | CodingSkills Academy'
  },
  description: "Join the world's premier coding academy. Learn Python, JavaScript, Full Stack Web Development, and AI from industry experts with hands-on projects.",
  keywords: ["learn coding", "best academy for coding", "learn to code", "online coding classes", "python course", "full stack web development", "AI for kids"],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'CodingSkills Academy | The Premier Coding Academy',
    description: 'Master coding with job-ready curriculum and live mentorship.',
    url: 'https://codingskills.co.in',
    siteName: 'CodingSkills Academy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodingSkills Academy | The Premier Coding Academy',
    description: 'Master coding with job-ready curriculum and live mentorship.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-base text-dark font-poppins antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

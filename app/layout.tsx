import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'CodeTykoons — Digital Solutions & AI Automation',
  description:
    'CodeTykoons is a full-service digital agency offering Digital Marketing, Website Development, Software Apps, and AI Automation to help businesses grow.',
  keywords: ['CodeTykoons', 'digital marketing', 'website development', 'software app', 'AI automation', 'tech agency India'],
  authors: [{ name: 'CodeTykoons' }],
  openGraph: {
    title: 'CodeTykoons — Digital Solutions & AI Automation',
    description: 'Transforming visions into powerful digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} flex flex-col min-h-screen font-sans`}>
        <Navbar />
        <div className="flex-grow pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

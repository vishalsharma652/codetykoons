import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Speaknashen - A Foundation for Forever | French & German Language Academy',
  description: 'Transform your career with quality French and German language training. Online courses focused on TEF, TCF, DELF, DALF, Goethe, TELC certifications. Global access available.',
  keywords: 'French language, German language, TEF, TCF, DELF, DALF, Goethe, TELC, online language learning, language certification',
  authors: [{ name: 'Speaknashen' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className={`${inter.className} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
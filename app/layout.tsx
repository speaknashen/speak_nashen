import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Speaknashen - A Foundation for Forever | French & German Language Academy',
  description:
    'Transform your career with quality French and German language training. Online courses focused on TEF, TCF, DELF, DALF, Goethe, TELC certifications. Global access available.',
  keywords:
    'French language, German language, TEF, TCF, DELF, DALF, Goethe, TELC, online language learning, language certification',
  authors: [{ name: 'Speaknashen' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Speaknashen - A Foundation for Forever',
    description:
      'Learn French and German online with expert training for TEF, TCF, DELF, DALF, Goethe, TELC exams.',
    url: 'https://speaknashen.com', 
    siteName: 'Speaknashen',
    images: [
      {
        url: 'https://speaknashen.com/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Speaknashen Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaknashen - Learn French & German Online',
    description:
      'Transform your career with quality French and German training. Global access available.',
    images: ['https://speaknashen.com/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
      <meta name="google-site-verification" content="X6vIHU2cHcbIa4fb1t_-fiWSBMMEYoIcFzh7pAiQb9Q" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              url: 'https://speaknashen.com',
              logo: 'https://speaknashen.com/logo.png',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

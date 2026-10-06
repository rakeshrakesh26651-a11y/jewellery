import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Cinzel, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import SmoothScroll from '@/components/SmoothScroll';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SHRI VIHOT IMITATION',
  description:
    'SHRI VIHOT IMITATION — Timeless Elegance & Handcrafted Jewelry. Rajkot, Gujarat, India.',
  openGraph: {
    title: 'SHRI VIHOT IMITATION',
    description: 'SHRI VIHOT IMITATION — Timeless Elegance & Handcrafted Jewelry. Rajkot, Gujarat, India.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#1C1C1C] selection:bg-[#1C1C1C] selection:text-white">
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ytc8we6drx");
            `,
          }}
        />
        <StoreProvider>
          <SmoothScroll>
            <Header />
            <main className="flex-1 w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
            <CartDrawer />
            <SearchModal />
          </SmoothScroll>
        </StoreProvider>
      </body>
    </html>
  );
}

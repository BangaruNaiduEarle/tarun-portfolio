import './globals.css';
import type { Metadata } from 'next';
import Script from "next/script";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tarun-salesforce.vercel.app/"),
  title: "Tarun Kumar Earle | Salesforce Developer Hyderabad",
  description:
    "Explore Tarun Kumar Earle's Salesforce portfolio showcasing 3.6 years of CRM expertise, certifications, and projects in Hyderabad, India.",
  keywords:
    "Tarun Kumar Earle, Salesforce Developer Hyderabad, Salesforce portfolios, Salesforce Developer India, Tarun Earle Salesforce, Agentblazer Champion",
  authors: [{ name: "Tarun Kumar Earle" }],
  robots: "index, follow",
  openGraph: {
    title: "Tarun Kumar Earle | Salesforce Developer",
    description: "Salesforce portfolio of Tarun Kumar Earle, Hyderabad.",
    url: "https://tarun-salesforce.vercel.app/",
    type: "website",
    images: [
      {
        url: "/images/og-image.png", // Add an OG image in /public
        width: 1200,
        height: 630,
        alt: "Tarun Kumar Earle Salesforce Portfolio",
      },
    ],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9N99R5Q29E
"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9N99R5Q29E');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
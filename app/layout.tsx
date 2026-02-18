import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { ThemeToggle } from "@/app/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI IELTS Speaking Practice App | Score Band 7+ with Spoken Drills",
  description:
    "Master IELTS & TOEFL speaking with AI-powered spoken definition drills. Get instant feedback on fluency, vocabulary & coherence. Practice anytime no tutor needed. Join the waitlist today.",
  keywords:
    "IELTS speaking practice, IELTS speaking band 7, IELTS speaking app, TOEFL speaking practice, speaking vocabulary practice, AI speaking coach, spoken definition trainer",
  robots: "index,follow,max-image-preview:large",
  alternates: { canonical: "https://VoiceVocab.com/" },
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/assets/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "VoiceVocab - AI Speaking Coach",
    title: "AI IELTS Speaking Practice App | Score Band 7+ with Spoken Drills",
    description:
      "Master IELTS & TOEFL speaking with AI-powered spoken definition drills. Get instant feedback on fluency, vocabulary & coherence. Join the waitlist today.",
    url: "https://VoiceVocab.com/",
    images: [
      {
        url: "https://VoiceVocab.com/assets/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "VoiceVocab - AI IELTS Speaking Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI IELTS Speaking Practice App | Score Band 7+",
    description:
      "Master IELTS & TOEFL speaking with AI-powered spoken definition drills. Get instant feedback on fluency, vocabulary & coherence.",
    images: {
      url: "https://VoiceVocab.com/assets/android-chrome-512x512.png",
      alt: "VoiceVocab - AI IELTS Speaking Practice",
    },
  },
  other: {
    "theme-color": "#0f172a",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-0K7WY27149"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0K7WY27149');
            gtag('config', 'AW-347456314');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} w-full min-h-screen bg-white dark:bg-slate-950 transition-all duration-300 relative overflow-x-hidden`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}

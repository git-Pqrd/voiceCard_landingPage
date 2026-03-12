import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { ThemeToggle } from "@/app/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "VoiceVocab — Learn by Explaining | Active Learning & Spaced Repetition",
  description:
    "Stop memorizing definitions. Explain concepts aloud, get AI follow-up questions that probe real understanding, and lock it in with spaced repetition. Works for any domain — language exams, technical concepts, medicine, interview prep.",
  keywords:
    "active learning, spaced repetition, AI tutor, voice learning, explain to learn, vocabulary learning, concept mastery, active recall, AI follow-up questions",
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
    siteName: "VoiceVocab",
    title:
      "VoiceVocab — Learn by Explaining | Active Learning & Spaced Repetition",
    description:
      "Explain concepts aloud. AI asks follow-up questions to probe your understanding. Spaced repetition locks it in. Works for any domain.",
    url: "https://VoiceVocab.com/",
    images: [
      {
        url: "https://VoiceVocab.com/assets/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "VoiceVocab — Active Learning & Spaced Repetition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceVocab — Learn by Explaining | Active Learning",
    description:
      "Explain concepts aloud. AI asks follow-up questions. Spaced repetition locks it in. Works for any domain.",
    images: {
      url: "https://VoiceVocab.com/assets/android-chrome-512x512.png",
      alt: "VoiceVocab — Active Learning & Spaced Repetition",
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

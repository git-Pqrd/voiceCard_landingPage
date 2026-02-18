import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - VoiceVocab",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Last updated: January 2025
        </p>
      </header>

      <main className="prose text-slate-700 dark:text-slate-300">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            1. Information We Collect
          </h2>
          <p>When you use VoiceVocab, we collect:</p>
          <ul>
            <li>Email address (when you join the waitlist)</li>
            <li>Audio recordings of your speaking practice sessions</li>
            <li>Usage data (practice sessions, scores, progress)</li>
            <li>Device information (browser type, operating system)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            2. How We Use Your Information
          </h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and improve our speaking practice service</li>
            <li>Generate AI-powered feedback on your speaking</li>
            <li>Send waitlist notifications and product updates</li>
            <li>Analyze usage patterns to improve the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            3. Data Storage and Security
          </h2>
          <p>
            Audio recordings are processed to generate feedback and may be
            stored temporarily. We implement security measures to protect your
            data, but no method of transmission over the internet is 100%
            secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            4. Third-Party Services
          </h2>
          <p>We use third-party services including:</p>
          <ul>
            <li>Web3Forms for waitlist email collection</li>
            <li>AI services for speech analysis and feedback</li>
            <li>Cloud hosting providers for data storage</li>
          </ul>
          <p>
            These services have their own privacy policies governing data
            handling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            5. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            6. Cookies and Tracking
          </h2>
          <p>
            We may use cookies to remember your preferences and analyze site
            usage. You can disable cookies in your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            7. Children&apos;s Privacy
          </h2>
          <p>
            VoiceVocab is not intended for users under 13 years of age. We do
            not knowingly collect personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            9. Contact Us
          </h2>
          <p>
            For questions about this privacy policy, contact us through the
            contact form on our website.
          </p>
        </section>
      </main>

      <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
        <p>
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Back to Home
          </Link>
          {" | "}
          <Link
            href="/terms"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Terms of Service
          </Link>
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} VoiceVocab. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - VoiceVocab",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Last updated: January 2025
        </p>
      </header>

      <main className="prose text-slate-700 dark:text-slate-300">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using VoiceVocab, you agree to be bound by these
            Terms of Service. If you do not agree, do not use the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            2. Description of Service
          </h2>
          <p>
            VoiceVocab is an AI-powered speaking practice tool designed to help
            users prepare for IELTS and TOEFL speaking exams. The service
            provides:
          </p>
          <ul>
            <li>Speaking practice drills with vocabulary terms</li>
            <li>AI-generated feedback on speaking performance</li>
            <li>Progress tracking and scoring</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            3. User Accounts
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information. You agree to notify us immediately of any
            unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            4. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any illegal purpose</li>
            <li>Attempt to reverse engineer or extract AI models</li>
            <li>
              Upload malicious content or attempt to disrupt the service
            </li>
            <li>Share your account with others</li>
            <li>Use automated systems to access the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            5. Intellectual Property
          </h2>
          <p>
            All content, features, and functionality of VoiceVocab are owned by
            us and protected by copyright, trademark, and other intellectual
            property laws. You may not copy, modify, or distribute any part of
            the service without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            6. Disclaimer of Warranties
          </h2>
          <p>
            VoiceVocab is provided &ldquo;as is&rdquo; without warranties of
            any kind. We do not guarantee:
          </p>
          <ul>
            <li>That the service will be uninterrupted or error-free</li>
            <li>
              That AI feedback will be accurate or improve exam scores
            </li>
            <li>That the service will meet your specific requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, VoiceVocab shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising from your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            8. Exam Score Disclaimer
          </h2>
          <p>
            VoiceVocab is not affiliated with IELTS, TOEFL, or their official
            testing organizations. Scores and feedback provided are
            approximations for practice purposes only and do not guarantee
            actual exam performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            9. Payment and Refunds
          </h2>
          <p>
            Pricing and payment terms will be specified at the time of launch.
            Refund policies will be communicated separately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            10. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to
            VoiceVocab at any time, with or without cause, with or without
            notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            11. Changes to Terms
          </h2>
          <p>
            We may modify these terms at any time. Continued use of the service
            after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            12. Governing Law
          </h2>
          <p>
            These terms shall be governed by applicable law. Any disputes will
            be resolved through appropriate legal channels.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            13. Contact
          </h2>
          <p>
            For questions about these terms, contact us through the contact form
            on our website.
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
            href="/privacy"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} VoiceVocab. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

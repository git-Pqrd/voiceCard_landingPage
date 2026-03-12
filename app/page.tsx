import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HERO SECTION */}
        <header className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: Content */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                <span className="gradient-text">Learn by Explaining</span>
                <br />
                <span className="text-slate-800 dark:text-white">
                  Not Memorizing
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 dark:text-slate-300">
                  Active Learning + Spaced Repetition
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 font-medium leading-relaxed">
                Explain concepts aloud. AI asks{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  follow-up questions
                </strong>{" "}
                to probe your understanding. Spaced repetition locks it in.
              </p>

              <div className="mb-6 sm:mb-8">
                <a
                  href="https://app.voicevocab.com"
                  className="cta-primary inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-white font-bold rounded-xl text-sm sm:text-base md:text-lg whitespace-nowrap relative z-10"
                >
                  Try the beta &rarr;
                </a>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 mt-3">
                  Free beta access + early-bird pricing
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">
                    10 min
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Daily Practice
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">
                    Any
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Domain
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    AI Tutor
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Visual Demo */}
            <div>
              <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 overflow-hidden border border-slate-200 dark:border-slate-700">
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      VV
                    </div>
                    <span className="font-semibold text-slate-800 dark:text-white text-xs sm:text-sm md:text-base">
                      VoiceVocab
                    </span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Concept Display */}
                <div className="mb-5 sm:mb-6">
                  <div className="inline-block px-2.5 sm:px-3 py-1 bg-sky-100 dark:bg-sky-900/30 rounded-full text-sky-700 dark:text-sky-300 text-xs font-semibold mb-2 sm:mb-3">
                    Machine Learning
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
                    L1 Regularization
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
                    Explain this concept in your own words.
                  </p>
                </div>

                {/* User Explanation */}
                <div className="mb-5 sm:mb-6 p-3 sm:p-4 md:p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Your explanation
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 italic">
                    &ldquo;L1 regularization adds a penalty to the loss
                    function based on the absolute value of the model
                    weights. This pushes some weights to exactly zero,
                    effectively selecting the most important features.&rdquo;
                  </p>
                </div>

                {/* AI Follow-up Questions */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 sm:p-4 md:p-5 border border-green-200 dark:border-green-800">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1.5 sm:mb-2">
                        AI Follow-up
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">
                        Good explanation! Now tell me &mdash; why does L1 push
                        weights to exactly zero, while L2 only shrinks them?
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs font-medium text-green-600 dark:text-green-400">
                          Understanding: 8/10
                        </span>
                        <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400">
                          Depth: Probing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 text-center mt-3 sm:mt-4">
                Explain the concept &rarr; AI probes your understanding &rarr;
                Spaced repetition reviews
              </p>
            </div>
          </div>
        </header>

        {/* PROBLEM SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 md:mb-10 text-center">
              Why Flashcards Don&apos;t Work
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <PainPoint
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                }
                title="Recognizing ≠ Understanding"
                desc="Seeing the right answer and being able to explain it are completely different skills."
              />
              <PainPoint
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                }
                title="No Feedback Loop"
                desc="Traditional tools can't tell if you actually understand or just memorized the words."
              />
              <PainPoint
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                }
                title="Passive Review = Shallow Retention"
                desc="Reading definitions doesn't build the neural pathways that active production does."
              />
              <PainPoint
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                }
                title="The Forgetting Curve Wins"
                desc="Without spaced repetition tied to real comprehension, you forget 80% within a week."
              />
            </div>
          </div>
        </section>

        {/* SAMPLE SESSIONS SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-2">
              Works Across Any Domain
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Same active learning method &mdash; whether you&apos;re preparing
              for an exam, mastering technical concepts, or building professional
              vocabulary.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 lg:hidden mt-2">
              Swipe to see more &rarr;
            </p>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-6">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {SESSION_EXAMPLES.map((s) => (
                <SessionCard key={s.domain} {...s} mobile />
              ))}
            </div>
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            {SESSION_EXAMPLES.map((s) => (
              <SessionCard key={s.domain} {...s} />
            ))}
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="mb-12 sm:mb-16 md:mb-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3">
              How It Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Step
              num={1}
              title="See a concept"
              desc="From your study deck or one of our curated topic packs."
            />
            <Step
              num={2}
              title="Explain it aloud"
              desc="Speak your understanding — no multiple choice, no shortcuts."
            />
            <Step
              num={3}
              title="AI asks follow-up questions"
              desc="Probes gaps in your reasoning to test real comprehension."
            />
            <Step
              num={4}
              title="Spaced repetition review"
              desc="Weak concepts come back more often. Strong ones fade out."
            />
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 md:mb-10 text-center">
              Why VoiceVocab Works
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Benefit
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                }
                title="AI Follow-up Questions"
                desc="The AI doesn't just check — it probes. Follow-ups reveal gaps you didn't know you had."
              />
              <Benefit
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                }
                title="Active Recall"
                desc="Explaining out loud builds stronger neural pathways than passive review ever could."
              />
              <Benefit
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                }
                title="Spaced Repetition"
                desc="Concepts you struggle with appear more often. Ones you master fade away."
              />
              <Benefit
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                }
                title="Any Domain"
                desc="Languages, exams, medicine, engineering, interview prep — one tool for everything."
              />
              <Benefit
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                }
                title="Practice Anytime"
                desc="10 minutes a day. No scheduling. No tutors. Just you and the AI."
              />
              <Benefit
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                }
                title="Track Understanding"
                desc="See comprehension deepen over time — not just cards flipped."
              />
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3">
              Built for Learners Everywhere
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              The core system is domain-agnostic. Target what matters to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <UseCase
              emoji="🗣"
              title="Language Exams"
              desc="IELTS, TOEFL, Cambridge — explain vocabulary like the exam demands."
              href="/ielts"
            />
            <UseCase
              emoji="🧠"
              title="Technical Concepts"
              desc="Machine learning, algorithms, systems design — prove you understand, not just recall."
            />
            <UseCase
              emoji="🏥"
              title="Medical Terminology"
              desc="Anatomy, pharmacology, diagnostics — explain mechanisms, not just labels."
            />
            <UseCase
              emoji="💼"
              title="Interview Prep"
              desc="Behavioral and technical — articulate your thinking clearly under pressure."
            />
            <UseCase
              emoji="📜"
              title="Professional Certification"
              desc="CFA, PMP, AWS — actively explain frameworks instead of drilling multiple choice."
            />
            <UseCase
              emoji="📚"
              title="Academic Study"
              desc="History, philosophy, science — build deep understanding for essays and exams."
            />
          </div>
        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 md:mb-10 text-center">
              What Learners Say
            </h2>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
                  10 min
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Daily practice
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
                  3x
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Better retention
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
                  24/7
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  AI tutor available
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 italic">
                  &ldquo;The follow-up questions are what make this different.
                  I thought I understood regularization until the AI asked me
                  to explain why L1 produces sparsity. Humbling and
                  effective.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500" />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-white">
                      Alex R.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      ML Engineer
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 italic">
                  &ldquo;I used flashcards for months preparing for IELTS.
                  This is the first tool that makes me actually speak and
                  think. My examiner said my coherence improved
                  dramatically.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600" />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-white">
                      Maria K.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      IELTS Candidate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EARLY ACCESS SECTION */}
        <section id="early-access" className="mb-12 sm:mb-16 md:mb-24">
          <div
            className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(59,130,246,0.08))",
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4">
              Get Early Access
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-6 sm:mb-8">
              Stop flipping cards. Start building real understanding &mdash; 10
              minutes a day.
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-md mx-auto mb-6 sm:mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
                Free Beta
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                + Early-bird pricing at launch
              </p>
            </div>

            <a
              href="https://app.voicevocab.com"
              className="cta-primary inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-white font-bold rounded-xl text-sm sm:text-base md:text-lg whitespace-nowrap relative z-10"
            >
              Try the beta &rarr;
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 mt-3 sm:mt-4">
              Instant access in the app.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 md:mb-10 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-0">
              <FaqItem
                q="How is this different from Anki or other flashcard apps?"
                a="Flashcards test recognition — you see a prompt and pick the answer. VoiceVocab tests production — you explain concepts aloud and the AI asks follow-up questions to verify real understanding."
              />
              <FaqItem
                q="What domains does it support?"
                a="Anything you want to learn. Language exams, technical concepts, medical terminology, interview prep, professional certifications. You can also create custom decks."
              />
              <FaqItem
                q="How does the AI evaluate my explanation?"
                a="The AI assesses comprehension depth, accuracy, and completeness. Then it asks targeted follow-up questions to probe areas where your understanding may be shallow."
              />
              <FaqItem
                q="Do I need to speak, or can I type?"
                a={
                  <>
                    Speaking is the default and recommended mode &mdash;
                    explaining aloud forces deeper processing. But{" "}
                    <strong>typing is also supported</strong> if you prefer.
                  </>
                }
              />
              <FaqItem
                q="What devices and browsers are supported?"
                a="Any modern browser (Chrome, Firefox, Safari, Edge) on desktop or mobile. Just need a microphone for voice mode."
              />
              <FaqItem
                q="How long should I practice each day?"
                a="10–15 minutes daily. Consistency beats marathon sessions. The spaced repetition algorithm handles the scheduling."
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="pb-12 sm:pb-16 md:pb-24 lg:pb-32">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight">
              Ready to Actually Understand?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              10 minutes a day. Explain concepts. Get follow-up questions. Build
              real knowledge.
            </p>

            <a
              href="https://app.voicevocab.com"
              className="cta-primary inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-white font-bold rounded-xl text-sm sm:text-base md:text-lg whitespace-nowrap relative z-10 mb-4 sm:mb-6"
            >
              Try the beta &rarr;
            </a>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500">
              Free during beta
            </p>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} VoiceVocab. Active learning
              &amp; spaced repetition, powered by AI.
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                href="/blog"
                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                Terms
              </Link>
              <a
                href="mailto:admin@VoiceVocab.com"
                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ── Data ─────────────────────────────────────────────────────────────── */

const SESSION_EXAMPLES = [
  {
    domain: "Language Exam",
    concept: "Social cohesion",
    explanation: `"Social cohesion refers to the bonds that hold a community together — shared values, trust, and a sense of belonging."`,
    followUp: `"Good. How does income inequality affect social cohesion?"`,
    score: "7/10",
  },
  {
    domain: "Machine Learning",
    concept: "Gradient descent",
    explanation: `"It's an optimization algorithm that iteratively adjusts parameters by moving in the direction of steepest loss decrease."`,
    followUp: `"Why might gradient descent get stuck in a local minimum?"`,
    score: "8/10",
  },
  {
    domain: "Medicine",
    concept: "Homeostasis",
    explanation: `"Homeostasis is the body's ability to maintain stable internal conditions like temperature and pH despite external changes."`,
    followUp: `"What role does negative feedback play in homeostasis?"`,
    score: "7/10",
  },
  {
    domain: "Interview Prep",
    concept: "STAR Method",
    explanation: `"STAR stands for Situation, Task, Action, Result — a framework for structuring behavioral interview answers."`,
    followUp: `"Walk me through a specific example using the STAR method."`,
    score: "6/10",
  },
] as const;

/* ── Helper components ────────────────────────────────────────────────── */

function PainPoint({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-red-600 dark:text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-sm sm:text-base text-slate-800 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          {desc}
        </p>
      </div>
    </div>
  );
}

function Step({
  num,
  title,
  desc,
}: {
  num: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 feature-card">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="step-number w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
          {num}
        </div>
        <div>
          <h3 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function Benefit({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center p-4 sm:p-6">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-sky-100 dark:bg-sky-900/30">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600 dark:text-sky-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <h3 className="font-semibold text-sm sm:text-base text-slate-800 dark:text-white mb-1 sm:mb-2">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
        {desc}
      </p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="py-4 sm:py-6 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
      <h3 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-2">
        {q}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
        {a}
      </p>
    </div>
  );
}

function UseCase({
  emoji,
  title,
  desc,
  href,
}: {
  emoji: string;
  title: string;
  desc: string;
  href?: string;
}) {
  const inner = (
    <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 feature-card h-full border border-slate-200 dark:border-slate-700">
      <div className="text-3xl sm:text-4xl mb-3">{emoji}</div>
      <h3 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-1 sm:mb-2">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
        {desc}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {inner}
      </Link>
    );
  }
  return inner;
}

function SessionCard({
  domain,
  concept,
  explanation,
  followUp,
  score,
  mobile,
}: {
  domain: string;
  concept: string;
  explanation: string;
  followUp: string;
  score: string;
  mobile?: boolean;
}) {
  const wrapper = mobile ? "w-72 flex-shrink-0 snap-start" : "";

  return (
    <div className={wrapper}>
      <div className="glass-card rounded-xl p-4 border border-slate-200 dark:border-slate-700 h-full shadow-none">
        <div className="inline-block px-2 py-1 bg-sky-100 dark:bg-sky-900/30 rounded-full text-sky-700 dark:text-sky-300 text-xs font-semibold mb-2">
          {domain}
        </div>
        <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-2">
          {concept}
        </h3>

        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-3 border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            You said:
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300 italic">
            {explanation}
          </p>
        </div>

        <div className="bg-sky-50 dark:bg-sky-900/20 rounded-lg p-3 border border-sky-200 dark:border-sky-800">
          <p className="text-xs font-semibold text-sky-700 dark:text-sky-300 mb-1">
            AI Follow-up:
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">
            {followUp}
          </p>
          <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400">
            Understanding: {score}
          </span>
        </div>
      </div>
    </div>
  );
}

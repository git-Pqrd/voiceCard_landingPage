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
                <span className="gradient-text">AI-Powered IELTS</span>
                <br />
                <span className="text-slate-800 dark:text-white">
                  Speaking Practice
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 dark:text-slate-300">
                  for Band 7+
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 font-medium leading-relaxed">
                Stop memorizing. Start{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  speaking
                </strong>
                . Get instant AI feedback on fluency, vocabulary, and coherence.
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
                    Band 7+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Target Score
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Available
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

                {/* Term Display */}
                <div className="mb-5 sm:mb-6">
                  <div className="inline-block px-2.5 sm:px-3 py-1 bg-sky-100 dark:bg-sky-900/30 rounded-full text-sky-700 dark:text-sky-300 text-xs font-semibold mb-2 sm:mb-3">
                    Environment
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
                    Environmental degradation
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
                    Explain this term in your own words with examples.
                  </p>
                </div>

                {/* Recording Interface */}
                <div className="mb-5 sm:mb-6 p-3 sm:p-4 md:p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                        <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">
                          Recording
                        </span>
                      </div>
                      <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                    Stop Recording
                  </button>
                </div>

                {/* AI Feedback Preview */}
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1.5 sm:mb-2">
                        AI Feedback
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">
                        &ldquo;Good use of cause-effect structure. Consider
                        adding specific examples (deforestation, pollution) to
                        boost lexical range. Fluency was strong with minimal
                        hesitation.&rdquo;
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400">
                          Lexical: 7/10
                        </span>
                        <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400">
                          Fluency: 8/10
                        </span>
                        <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400">
                          Coherence: 7.5/10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 text-center mt-3 sm:mt-4">
                See the term &rarr; Speak your explanation &rarr; Get instant AI
                feedback
              </p>
            </div>
          </div>
        </header>

        {/* PROBLEM SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 md:mb-10 text-center">
              Why Most Candidates Struggle
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
                title="Know Words, Can't Speak Them"
                desc="Recognizing vocabulary ≠ explaining it fluently under pressure."
              />
              <PainPoint
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                }
                title="Tutors Cost Too Much"
                desc="Quality speaking feedback requires expensive 1:1 sessions."
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
                title="Apps Don't Make You Speak"
                desc="Flashcards test recognition. IELTS tests 60-second spoken answers."
              />
              <PainPoint
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                }
                title="Panic Under Time Pressure"
                desc="Without timed practice, exam conditions feel overwhelming."
              />
            </div>
          </div>
        </section>

        {/* SAMPLE DRILLS SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-2">
              Sample Drills
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 lg:hidden">
              Swipe to see more &rarr;
            </p>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-6">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              <DrillCard
                category="Environment"
                term="Environmental degradation"
                response={`"Environmental degradation is... um... it's bad for the environment. Like pollution and stuff."`}
                feedback={`"Too vague. Avoid fillers ('um', 'stuff'). Lacks academic vocabulary."`}
                scores={["4/10", "4/10", "5/10"]}
                level="poor"
                mobile
              />
              <DrillCard
                category="Society"
                term="Social cohesion"
                response={`"Social cohesion is when people... um... get along together. It makes society work better."`}
                feedback={`"Basic definition, lacks depth. Try 'unity,' 'solidarity,' or 'integration.'"`}
                scores={["5/10", "5/10", "6/10"]}
                level="average"
                mobile
              />
              <DrillCard
                category="Technology"
                term="Digital literacy"
                response={`"Digital literacy means the ability to use technology properly, like finding reliable information online."`}
                feedback={`"Good structure. Replace 'things like' with 'such as' for Band 8."`}
                scores={["6/10", "7/10", "7/10"]}
                level="good"
                mobile
              />
              <DrillCard
                category="Education"
                term="Critical thinking"
                response={`"Critical thinking encompasses analyzing information objectively and forming reasoned judgments."`}
                feedback={`"Excellent! Strong vocabulary ('encompasses,' 'objectively'). Band 8+ quality."`}
                scores={["9/10", "8/10", "9/10"]}
                level="excellent"
                mobile
              />
            </div>
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            <DrillCard
              category="Environment"
              term="Environmental degradation"
              response={`"Environmental degradation is... um... it's bad for the environment. Like pollution and stuff."`}
              feedback={`"Too vague. Avoid fillers ('um', 'stuff'). Lacks academic vocabulary."`}
              scores={["4/10", "4/10", "5/10"]}
              level="poor"
            />
            <DrillCard
              category="Society"
              term="Social cohesion"
              response={`"Social cohesion is when people... um... get along together. It makes society work better."`}
              feedback={`"Basic definition, lacks depth. Try 'unity,' 'solidarity,' or 'integration.'"`}
              scores={["5/10", "5/10", "6/10"]}
              level="average"
            />
            <DrillCard
              category="Technology"
              term="Digital literacy"
              response={`"Digital literacy means the ability to use technology properly, like finding reliable information online."`}
              feedback={`"Good structure. Replace 'things like' with 'such as' for Band 8."`}
              scores={["6/10", "7/10", "7/10"]}
              level="good"
            />
            <DrillCard
              category="Education"
              term="Critical thinking"
              response={`"Critical thinking encompasses analyzing information objectively and forming reasoned judgments."`}
              feedback={`"Excellent! Strong vocabulary ('encompasses,' 'objectively'). Band 8+ quality."`}
              scores={["9/10", "8/10", "9/10"]}
              level="excellent"
            />
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
            <Step num={1} title="See an exam term" desc="High-value IELTS/TOEFL vocabulary." />
            <Step num={2} title="Speak out loud" desc="Explain it like you're answering an examiner." />
            <Step num={3} title="Get AI feedback" desc="Scored on fluency, vocabulary, coherence, pronunciation." />
            <Step num={4} title="Repeat weak terms" desc="Spaced repetition until you nail them." />
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
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                title="Exam-Aligned Feedback"
                desc="Scored on what IELTS examiners actually measure."
              />
              <Benefit
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                title="Active Production"
                desc="Move from recognition to fluent explanation."
              />
              <Benefit
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                title="Practice Anytime"
                desc="10 minutes. No scheduling. No tutors."
              />
              <Benefit
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                title="Build Confidence"
                desc="Timed practice removes exam-day anxiety."
              />
              <Benefit
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                title="All Key Topics"
                desc="Environment, society, education, technology, health."
              />
              <Benefit
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                title="Track Progress"
                desc="Watch your fluency improve over time.*"
              />
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mt-4 sm:mt-6 italic">
              *Scores are approximations for practice only.
            </p>
          </div>
        </section>

        {/* SOCIAL PROOF SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-24">
          <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 md:mb-10 text-center">
              Built for Serious Candidates
            </h2>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
                  60+
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Drills/week
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
                  15 min
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Daily practice
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-1 sm:mb-2">
                  4x
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  More speaking
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 italic">
                  &ldquo;Finally something that makes me actually speak. After 3
                  weeks, explaining concepts feels natural.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500" />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-white">
                      Maria K.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      IELTS Academic
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 italic">
                  &ldquo;The coherence feedback showed me why my answers felt
                  disorganized. Now I structure responses much better.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600" />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-white">
                      Chen W.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      TOEFL iBT
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
              IELTS costs $200&ndash;$300. Retaking costs more. Practice until
              you&apos;re ready to nail it first try.
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
                q="Is this an official IELTS or TOEFL product?"
                a="No. VoiceVocab is independent practice. Not affiliated with British Council, IDP, or ETS. Scores are approximations only."
              />
              <FaqItem
                q="Can this guarantee a higher band score?"
                a="No. But we significantly improve your speaking practice quality with active, feedback-driven repetitions."
              />
              <FaqItem
                q="How is this different from normal vocab apps or AI chat?"
                a={
                  <>
                    You <strong>speak out loud</strong> under timed conditions.
                    Feedback is aligned to IELTS/TOEFL rubrics, not generic AI
                    chat.
                  </>
                }
              />
              <FaqItem
                q="Do I still need a tutor?"
                a={
                  <>
                    VoiceVocab <strong>complements</strong> tutoring. Use it for
                    daily drills. Save tutor time for mock tests and strategy.
                  </>
                }
              />
              <FaqItem
                q="What devices and browsers are supported?"
                a="Any modern browser (Chrome, Firefox, Safari, Edge) on desktop or mobile. Just need a microphone."
              />
              <FaqItem
                q="How long should I practice each day?"
                a="10–15 minutes daily. Consistency beats marathon sessions."
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="pb-12 sm:pb-16 md:pb-24 lg:pb-32">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 leading-tight">
              Ready to Actually Speak?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              10 minutes a day. Real practice. Instant feedback.
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
              &copy; {new Date().getFullYear()} VoiceVocab. AI-powered IELTS
              &amp; TOEFL speaking practice.
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
          <p className="text-xs text-slate-400 dark:text-slate-600 text-center mt-4 sm:mt-6">
            IELTS is a registered trademark of University of Cambridge ESOL, the
            British Council, and IDP Education Australia. TOEFL is a registered
            trademark of Educational Testing Service (ETS). This product is not
            affiliated with or endorsed by these organizations.
          </p>
        </div>
      </footer>
    </>
  );
}

/* ── Helper components (co-located for simplicity) ────────────────────── */

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

function FaqItem({
  q,
  a,
}: {
  q: string;
  a: React.ReactNode;
}) {
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

const LEVEL_STYLES = {
  poor: {
    border: "border-red-500 dark:border-red-500",
    feedbackBg: "bg-red-50 dark:bg-red-900/20",
    feedbackBorder: "border-red-200 dark:border-red-800",
    feedbackTitle: "text-red-700 dark:text-red-300",
  },
  average: {
    border: "border-amber-500 dark:border-amber-500",
    feedbackBg: "bg-amber-50 dark:bg-amber-900/20",
    feedbackBorder: "border-amber-200 dark:border-amber-800",
    feedbackTitle: "text-amber-700 dark:text-amber-300",
  },
  good: {
    border: "border-green-500 dark:border-green-500",
    feedbackBg: "bg-green-50 dark:bg-green-900/20",
    feedbackBorder: "border-green-200 dark:border-green-800",
    feedbackTitle: "text-green-700 dark:text-green-300",
  },
  excellent: {
    border: "border-green-500 dark:border-green-500",
    feedbackBg: "bg-green-50 dark:bg-green-900/20",
    feedbackBorder: "border-green-200 dark:border-green-800",
    feedbackTitle: "text-green-700 dark:text-green-300",
  },
} as const;

function DrillCard({
  category,
  term,
  response,
  feedback,
  scores,
  level,
  mobile,
}: {
  category: string;
  term: string;
  response: string;
  feedback: string;
  scores: string[];
  level: keyof typeof LEVEL_STYLES;
  mobile?: boolean;
}) {
  const s = LEVEL_STYLES[level];
  const wrapper = mobile
    ? "w-72 flex-shrink-0 snap-start"
    : "";
  const cardBorder = mobile
    ? `border-2 ${s.border}`
    : "border border-slate-200 dark:border-slate-700";

  return (
    <div className={wrapper}>
      <div
        className={`glass-card rounded-xl p-4 ${cardBorder} h-full shadow-none`}
      >
        <div className="inline-block px-2 py-1 bg-sky-100 dark:bg-sky-900/30 rounded-full text-sky-700 dark:text-sky-300 text-xs font-semibold mb-2">
          {category}
        </div>
        <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-2">
          {term}
        </h3>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-3 border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Response:
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300 italic">
            {response}
          </p>
        </div>
        <div
          className={`${s.feedbackBg} rounded-lg p-3 border ${s.feedbackBorder}`}
        >
          <p className={`text-xs font-semibold ${s.feedbackTitle} mb-1`}>
            AI Feedback:
          </p>
          <p className="text-xs text-slate-700 dark:text-slate-300 mb-2">
            {feedback}
          </p>
          <div className="flex gap-1">
            {scores.map((score, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                {score}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

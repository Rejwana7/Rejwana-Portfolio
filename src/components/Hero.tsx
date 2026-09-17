"use client";

import { useState, useEffect } from "react";
import { Download, Mail, Sparkles, Code2, Play, CheckCircle2, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const roles = [
  "Software QA Engineer",
  "Full-Stack Developer",
  "Computer Science Graduate",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-subtle-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none animate-subtle-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Welcome to my portfolio</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m <br className="hidden sm:inline" />
                <span className="text-gradient-cyan">Rejwana Tabassum</span>
              </h1>
              
              {/* Animated Role Switching */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl font-semibold text-slate-300 font-mono">
                  <span>I am a </span>
                  <span className="text-cyan-400 font-bold border-b-2 border-cyan-400/50 pb-0.5">
                    {displayText}
                  </span>
                  <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-cursor-blink align-middle"></span>
                </p>
              </div>
            </div>

            {/* 1-2 Line About Intro */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science graduate specializing in full-cycle QA (Manual, Postman/Newman, Mocha/Chai API Automation) and modern Full-Stack development.
            </p>

            {/* CTA Buttons & Socials */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`${publicBasePath}/Rejwana_CV_SQA_Developer.pdf`}
                download="Rejwana_CV_SQA_Developer.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 shadow-md transition-all duration-300 hover:text-white"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                Contact Me
              </a>

              {/* GitHub & LinkedIn icons */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href="https://github.com/Rejwana7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-400/50 transition-all duration-200"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/rejwana-tabassum-22480a250"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-400/50 transition-all duration-200"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code Window Showcase */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-lg">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-35 animate-subtle-pulse"></div>

              {/* Terminal / Code Editor Mock */}
              <div className="relative rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                
                {/* Editor Tab Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080b13] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      developer_sqa.ts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] border border-emerald-500/20 flex items-center gap-1">
                      <Play className="w-3 h-3 fill-emerald-400" /> PASS
                    </span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                  <div className="text-slate-500 italic">{"// Software QA & Full-Stack Profile"}</div>
                  <p>
                    <span className="text-purple-400">const</span> <span className="text-sky-300">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-amber-300">&quot;Rejwana Tabassum&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">roles:</span> [<span className="text-emerald-300">&quot;SQA Engineer&quot;</span>, <span className="text-emerald-300">&quot;Full-Stack Dev&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">testing:</span> [<span className="text-amber-300">&quot;Postman&quot;</span>, <span className="text-amber-300">&quot;Newman CLI&quot;</span>, <span className="text-amber-300">&quot;Mocha&quot;</span>, <span className="text-amber-300">&quot;Chai&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">stack:</span> [<span className="text-amber-300">&quot;React&quot;</span>, <span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;Node.js&quot;</span>, <span className="text-amber-300">&quot;MySQL&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">cgpa:</span> <span className="text-cyan-400">3.78</span>,
                  </p>
                  <p>&#125;;</p>
                  
                  <div className="pt-2 border-t border-slate-800/80 text-slate-400">
                    <p className="text-cyan-400">
                      <span className="text-purple-400">async function</span> <span className="text-sky-300">executeTestRun</span>() &#123;
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-purple-400">const</span> suite = <span className="text-purple-400">await</span> newman.<span className="text-sky-300">run</span>(dMoneyCollection);
                    </p>
                    <p className="pl-4 text-emerald-400">
                      assert.equal(suite.failures.length, <span className="text-rose-400">0</span>);
                    </p>
                    <p className="pl-4 text-slate-400">
                      <span className="text-purple-400">return</span> <span className="text-amber-300">&quot;Ready for Production 🚀&quot;</span>;
                    </p>
                    <p className="text-cyan-400">&#125;</p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 bg-[#06080e] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Tests Passed
                  </span>
                  <span className="font-mono text-slate-500">TypeScript • UTF-8</span>
                </div>

              </div>

              {/* Floating Technology Badge */}
              <div className="absolute -left-5 -bottom-4 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 shadow-xl">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">API Test Automation</p>
                  <p className="text-[10px] text-emerald-400 font-mono">Newman & Mocha</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

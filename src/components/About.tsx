"use client";

import Image from "next/image";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who I Am
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
           Aspiring Quality Assurance & Software Engineering
          </p>
        </div>

        {/* Two-Column Layout: Picture on One Side, Pure Text on Other Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Picture Column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              {/* Circular glowing ambient halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 rounded-full blur-md opacity-40 animate-subtle-pulse"></div>
              
              {/* Circular border wrapper */}
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-cyan-500/50 via-indigo-500/30 to-purple-500/50 shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-800">
                  <Image
                    src={`${publicBasePath}/rejwana-photo.jpg`}
                    alt="Rejwana Tabassum"
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-cover object-top filter brightness-105 contrast-102 hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pure About Text Column */}
          <div className="lg:col-span-8 space-y-5 text-slate-200">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Passionate SQA Engineer & Full-Stack Developer
            </h3>
            
            <p className="leading-relaxed text-sm sm:text-sm text-slate-200">
              I am a Computer Science graduate from <span className="text-white ">Port City International University, Chattogram</span>. I have hands-on, project-based experience across the full quality assurance lifecycle: manual test design, API test automation (Postman/Newman, Mocha, Chai, Axios), and bug reporting with working knowledge of Jira for issue tracking.
            </p>

            <p className="leading-relaxed text-sm sm:text-sm text-slate-200">
              Combined with practical backend development experience building projects in Node.js, Express, MySQL, and Sequelize ORM, and frontend development with React, Next.js, and Tailwind CSS.
            </p>

            <p className="leading-relaxed text-sm sm:text-sm text-slate-200">
              Comfortable on both sides of the SDLC.Writing test cases and automated test suites as well as designing and building applications end to end. Quick to learn new tools and domains, detail-oriented, and dedicated to delivering robust software.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

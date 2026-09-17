"use client";

import { TestTube2, Wrench, Code2, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Testing Skills",
      icon: <TestTube2 className="w-5 h-5 text-cyan-400" />,
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
      skills: [
        "Manual Testing",
        "API Testing",
        "Functional Testing",
        "Regression Testing",
        "Test Case Design",
        "Bug Reporting",
        "Smoke Testing",
        "Sanity Testing",
        "Boundary Value Analysis",
        "RBAC Testing",
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      iconBg: "bg-purple-500/10 border-purple-500/20",
      skills: [
        "Postman",
        "Newman CLI",
        "Mocha",
        "Chai",
        "Axios",
        "Jira",
        "Git",
        "GitHub",
        "MySQL",
        "VS Code",
        "MS Excel",
      ],
    },
    {
      title: "Technical Knowledge",
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      iconBg: "bg-amber-500/10 border-amber-500/20",
      skills: [
        "SDLC",
        "STLC",
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "SQL",
        "React",
        "Next.js",
        "Node.js",
        "Sequelize ORM",
        "Django",
        "Tailwind CSS",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      skills: [
        "Attention to Detail",
        "Problem Solving",
        "Team Collaboration",
        "Effective Communication",
        "Adaptability",
        "Analytical Thinking",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Technologies, testing methodologies, and tools I work with
          </p>
        </div>

        {/* 4 Clean Pill-Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#0b1120] border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300 glass-panel-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className={`p-2.5 rounded-2xl border ${cat.iconBg} flex items-center justify-center`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Pill Tags (clean like the reference image) */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/70 hover:border-cyan-500/40 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

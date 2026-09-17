"use client";

import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react";

export default function EducationCertificates() {
  const education = [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Port City International University, Chattogram",
      year: "2025",
      result: "CGPA: 3.78",
      highlights: [
        "Major in Computer Science and Engineering with an emphasis on Software Testing, Algorithms, and Database Systems.",
        "Graduated with distinction (CGPA 3.78 out of 4.00).",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Enayet Bazar Mohila College",
      year: "2020",
      result: "GPA: 4.75",
    
    },
    {
      degree: "Secondary School Certificate (SSC) - Science",
      institution: "City Govt Girls' High School",
      year: "2017",
      result: "GPA: 4.91",
     
    },
  ];

  const certifications = [
    {
      title: "Full Stack SQA and Software Test Automation",
      issuer: "Road to SDET Online Academy",
      year: "2026",
      category: "Specialized QA Certification",
      description: "Comprehensive hands-on training in manual test design, API automation (Postman/Newman, Mocha/Chai), bug tracking with Jira, and test strategy creation.",
    },
    {
      title: "2023 ICPC Asia Dhaka Regional Site Contest",
      issuer: "ICPC (International Collegiate Programming Contest)",
      year: "2023",
      category: "Competitive Programming",
      description: "Participated in the ICPC Asia Dhaka Regional Site Online Preliminary Contest, demonstrating data structures and problem-solving skills under timed conditions.",
    },
    {
      title: "CSE Fundamentals with Phitron",
      issuer: "Phitron",
      year: "2024",
      category: "Computer Science Core",
      description: "Rigorous track covering Data Structures, Algorithms, C++, OOP principles, and foundational computer systems.",
    },
    {
      title: "Project-Based Excel",
      issuer: "Grameenphone Academy",
      year: "2026",
      category: "Data Analysis & Documentation",
      description: "Awarded Certificate of Excellence for practical data analysis, advanced functions, reporting, and structured documentation.",
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Background & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My academic qualifications, professional software testing certifications, and competitive programming achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education History</h3>
                <p className="text-xs text-slate-400">Formal university and collegiate education</p>
              </div>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-slate-800">
              {education.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 ring-4 ring-[#090d16] group-hover:scale-125 transition-transform" />

                  <div className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/30 transition-all glass-panel-hover">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.degree}
                      </h4>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-slate-300 mb-2">{item.institution}</p>

                    <div className="inline-block mb-3 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold font-mono border border-emerald-500/20">
                      {item.result}
                    </div>

                  
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
                <p className="text-xs text-slate-400">Accreditations and competitive contests</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-indigo-500/40 transition-all glass-panel-hover"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        {cert.category}
                      </span>
                      <h4 className="text-base font-bold text-white mt-1.5">{cert.title}</h4>
                      <p className="text-xs text-slate-300 font-medium">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800 shrink-0">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

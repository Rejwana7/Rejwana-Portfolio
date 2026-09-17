"use client";

import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const projects = [
    {
      title: "dMoney API Testing - Postman & Newman",
      category: "API Automation & QA",
      tagColor: "cyan",
      badge: "Featured QA Project",
      description:
        "Comprehensive API test suite for an entire mobile financial services (MFS) platform covering Admin, System, Agent, Customer, and Merchant workflows.",
      highlights: [
        "Built a dynamic Postman collection with token chaining and automated continuous execution through Newman CLI.",
        "Diagnosed and resolved edge-case test failures including token expiration, stale variables, and duplicate-transaction HTTP 208.",
        "Published comprehensive Postman API documentation and full Excel test-case coverage sheet.",
      ],
      tags: ["Postman", "Newman CLI", "JavaScript", "API Testing", "Token Chaining", "Excel"],
      github: "https://github.com/Rejwana7/Dmoney-Api-testing-use-Postman",
    },
    {
      title: "dMoney API Testing - Mocha, Chai & Axios",
      category: "Code-Based Integration Testing",
      tagColor: "indigo",
      badge: "JavaScript Automation",
      description:
        "Custom JavaScript automated integration test framework covering all dMoney MFS financial API modules with programmatic assertion suites.",
      highlights: [
        "Engineered reusable helper functions: scenario(), describeOtpLogin(), describeCreateAndActivate().",
        "Streamlined test suite organization, assertion reporting, and asynchronous API calls.",
        "Integrated Chai expect assertions to validate payload schemas and status codes.",
      ],
      tags: ["Mocha", "Chai", "Axios", "JavaScript", "Automation Framework", "REST APIs"],
      github: "https://github.com/Rejwana7/Demony-Api-testing-using-mocha-chai",
    },
    {
      title: "dMoney Manual Testing & QA Documentation",
      category: "Manual Quality Assurance",
      tagColor: "amber",
      badge: "QA Documentation",
      description:
        "Full-scope manual QA evaluation across dMoney and EasyPay modules following strict industry testing protocols.",
      highlights: [
        "Authored structured test case spreadsheets and acceptance criteria based on functional requirements.",
        "Executed Smoke, Sanity, Boundary Value Analysis, and Regression cycles.",
        "Formulated standard bug reporting guides with steps-to-reproduce, severity, and evidence logs.",
      ],
      tags: ["Manual Testing", "Test Case Design", "Bug Reporting", "Acceptance Criteria", "QA Lifecycle"],
      github: "https://github.com/Rejwana7/Dmoney-Manual-Testing",
    },
    {
      title: "Blog Management REST API",
      category: "Backend Development",
      tagColor: "emerald",
      badge: "Full Backend System",
      description:
        "Robust RESTful backend service featuring three-tier role-based access control (Admin, User, Guest), token authentication, and relational data management.",
      highlights: [
        "Architected with Node.js, Express, MySQL, and Sequelize ORM.",
        "Implemented JWT authentication and RBAC authorization with strict resource ownership validation.",
        "Engineered blog CRUD, category filtering, search endpoints, and built full Postman documentation.",
      ],
      tags: ["Node.js", "Express", "MySQL", "Sequelize ORM", "JWT", "RBAC", "Postman"],
      github: "https://github.com/Rejwana7/Blog-Management-API-Create",
    },
    {
      title: "Blog Management Website",
      category: "Full-Stack Frontend Integration",
      tagColor: "violet",
      badge: "Next.js Application",
      description:
        "A responsive Next.js blog platform integrated with a REST API, supporting complete Guest, User, and Admin workflows without mock or hardcoded data.",
      highlights: [
        "Implemented blog browsing, combined search and category filtering, blog details, and authenticated create, update, and delete workflows.",
        "Built persistent JWT authentication with registration, login, protected routes, profile management, image upload, and password recovery.",
        "Added role-based dashboards where admins can manage users, activate or deactivate accounts, and edit or delete any blog.",
      ],
      tags: ["Next.js", "JavaScript", "Tailwind CSS", "REST API", "JWT", "RBAC", "Responsive UI"],
      github: "https://github.com/Rejwana7/blog-management-website",
    },
    {
      title: "Blood Donation Web Platform",
      category: "Web Application",
      tagColor: "rose",
      badge: "Full-Stack Project",
      description:
        "A full-stack web application designed to bridge the critical gap between voluntary blood donors and recipients in emergency medical situations.",
      highlights: [
        "Developed utilizing Django web framework with responsive UI views.",
        "User registration, donor availability statuses, geographic filtering, and request matching.",
        "Secure database operations and clean MVC architectural structure.",
      ],
      tags: ["Python", "Django", "HTML/CSS", "Bootstrap", "Relational Database"],
      github: "https://github.com/Rejwana7/Blood_donation",
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-slate-950/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Test Suites
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A selection of automated testing frameworks, manual QA documentation, and full-stack software applications built with clean code and verification standards.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-cyan-500/40 p-5 sm:p-6 transition-all duration-300 glass-panel-hover group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-6 mb-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {project.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tags & GitHub Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/60 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

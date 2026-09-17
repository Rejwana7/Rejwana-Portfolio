# Rejwana.T — Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-SQA%20%26%20Full--Stack-0891b2)](#)
[![Status](https://img.shields.io/badge/Status-Active-22c55e)](#)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)

Personal portfolio of **Rejwana Tabassum**, a Computer Science and Engineering
graduate focused on Software Quality Assurance, API test automation, and
full-stack web development.

## Live Portfolio

**Live Website:** [https://rejwana-portfolio.vercel.app/](https://rejwana-portfolio.vercel.app/)



## About Me

I enjoy testing APIs, designing test cases, finding and documenting defects,
and building responsive web applications. My project experience covers the
software lifecycle from development and database integration to manual and
automated quality assurance.

## Portfolio Features

- Responsive single-page portfolio
- Project, skills, education, and certification sections
- Downloadable résumé
- Direct contact form powered by Nodemailer
- Accessible social and contact links

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Email:** Nodemailer with server-side SMTP
- **UI:** Lucide React and Canvas Confetti
- **Tooling:** ESLint, Git, GitHub, VS Code

## Skills

### Software Testing and QA

- Manual, functional, regression, smoke, and sanity testing
- Test-case design, boundary-value analysis, and bug reporting
- API testing and automation with Postman, Newman, Mocha, Chai, and Axios
- Jira, RBAC testing, SDLC, and STLC

### Development

- JavaScript, TypeScript, Python, C++, and SQL
- React, Next.js, Node.js, Django, and Tailwind CSS
- MySQL, Sequelize ORM, REST APIs, and JWT authentication

## Featured Projects

### Blog Management Website

A responsive Next.js application integrated with a REST API. It supports
Guest, User, and Admin workflows; JWT authentication; protected routes; blog
search and filtering; blog CRUD; profile-image upload; password recovery; and
admin user management.

**Technologies:** Next.js, JavaScript, Tailwind CSS, REST API, JWT, RBAC  
**Repository:** [Blog Management Website](https://github.com/Rejwana7/blog-management-website)

### Blog Management REST API

A Node.js and Express backend with JWT authentication, role-based access
control, blog CRUD, category filtering, search, and relational data management.

**Technologies:** Node.js, Express, MySQL, Sequelize ORM, JWT, Postman  
**Repository:** [Blog Management REST API](https://github.com/Rejwana7/Blog-Management-API-Create)

### dMoney API Testing — Postman and Newman

An automated API test suite covering Admin, System, Agent, Customer, and
Merchant workflows with token chaining, dynamic environment variables, Newman
execution, and documented test coverage.

**Tools:** Postman, Newman, JavaScript, Excel  
**Repository:** [dMoney Postman Testing](https://github.com/Rejwana7/Dmoney-Api-testing-use-Postman)

### dMoney API Testing — Mocha, Chai, and Axios

A code-based integration-testing framework with reusable test helpers,
asynchronous API calls, and assertions for response status and payload data.

**Tools:** Mocha, Chai, Axios, JavaScript  
**Repository:** [dMoney Mocha Testing](https://github.com/Rejwana7/Demony-Api-testing-using-mocha-chai)

### dMoney Manual Testing

Manual QA documentation covering functional requirements, smoke, sanity,
boundary-value and regression testing, structured test cases, and bug reports.

**Repository:** [dMoney Manual Testing](https://github.com/Rejwana7/Dmoney-Manual-Testing)

### Blood Donation Web Platform

A Django web application that connects blood donors with recipients through
registration, availability status, geographic filtering, and request matching.

**Technologies:** Python, Django, HTML, CSS, Bootstrap  
**Repository:** [Blood Donation Platform](https://github.com/Rejwana7/Blood_donation)

## Education and Certifications

- **BSc in Computer Science and Engineering** — Port City International
  University, Chattogram; CGPA: 3.78/4.00
- **Full Stack SQA and Software Test Automation** — Road to SDET Online Academy
- **2023 ICPC Asia Dhaka Regional Site Contest** — Online Preliminary Contest
- **CSE Fundamentals with Phitron** — Phitron
- **Project-Based Excel** — Grameenphone Academy

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Contact Form Configuration

Copy `.env.example` to `.env.local` and configure the SMTP values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-google-app-password
CONTACT_TO_EMAIL=your-receiving-address@gmail.com
```

For Gmail, enable 2-Step Verification and create a Google App Password. Never
commit `.env.local`, an App Password, or any other secret to the repository.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Contact

- **GitHub:** [Rejwana7](https://github.com/Rejwana7)
- **LinkedIn:** [Rejwana Tabassum](https://linkedin.com/in/rejwana-tabassum-22480a250)
- **Email:** [rejwanatabassum87871@gmail.com](mailto:rejwanatabassum87871@gmail.com)
- **Résumé:** Available from the **Download CV** button on the portfolio

---

If you find this portfolio useful, feel free to explore the projects and
repositories.

This is Rejwana Tabassum's portfolio, built with Next.js.

## Contact form setup

The contact form sends email from the server with Nodemailer. Copy `.env.example` to
`.env.local`, then set the SMTP values. For Gmail, enable 2-Step Verification and
create a Google App Password for `SMTP_PASS`; do not use your regular Gmail password.

Add the same variables to the hosting provider (for example, Vercel) and redeploy.
`SMTP_USER` is the authenticated sender and `CONTACT_TO_EMAIL` is the inbox that
receives portfolio messages.

Existing deployments that use `gmail` and `gmail_app_password` continue to work,
but the `SMTP_*` names above are recommended.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

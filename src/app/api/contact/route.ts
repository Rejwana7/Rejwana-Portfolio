import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanHeader(value: unknown, maxLength: number) {
  return cleanText(value, maxLength).replace(/[\r\n]+/g, " ");
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = cleanHeader(payload.name, 100);
  const email = cleanText(payload.email, 254);
  const subject = cleanHeader(payload.subject, 150);
  const message = cleanText(payload.message, 5000);
  const website = cleanText(payload.website, 200);

  // Bots commonly fill hidden fields. Return success without sending anything.
  if (website) {
    return Response.json({ success: true });
  }

  if (!name || !subject || !message || !EMAIL_PATTERN.test(email)) {
    return Response.json(
      { error: "Please complete every field with a valid email address." },
      { status: 400 },
    );
  }

  // Keep the existing portfolio variable names working while supporting
  // conventional SMTP names for new deployments.
  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpUser = process.env.SMTP_USER ?? process.env.gmail;
  const smtpPass = process.env.SMTP_PASS ?? process.env.gmail_app_password;
  const recipient = process.env.CONTACT_TO_EMAIL ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !recipient || !Number.isInteger(smtpPort)) {
    console.error("Contact form SMTP environment variables are not configured.");
    return Response.json(
      { error: "Email service is not configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `Rejwana Portfolio <${smtpUser}>`,
      to: recipient,
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { error: "The message could not be sent. Please email me directly." },
      { status: 500 },
    );
  }
}

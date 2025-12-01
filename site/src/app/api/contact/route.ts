import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, website, teamSize, message, freeSession } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Missing Resend API key." }, { status: 500 });
  }

  const to = process.env.RESEND_TO_EMAIL ?? "pbrown@vital-enterprises.com";
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const subject = `New AI Support PDX inquiry${freeSession ? " (free session)" : ""}`;
  const text = `
New inbound request from the website:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Website: ${website || "Not provided"}
Team size: ${teamSize || "Not provided"}
Interested in free session: ${freeSession ? "Yes" : "No"}

Message:
${message}
`;

  try {
    await resend.emails.send({
      from: `AI Support PDX <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: "Unable to send message right now. Please try again." }, { status: 500 });
  }
}

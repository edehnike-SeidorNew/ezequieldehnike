import { NextResponse } from "next/server";

import { contactEmail } from "@/resources/contact";

// Sends the contact form as an email through the Resend API.
// Environment variables (set them in Netlify > Site configuration > Environment variables):
//   RESEND_API_KEY  (required)
//   CONTACT_TO      (optional, defaults to the email in resources/contact.ts)
//   CONTACT_FROM    (optional, defaults to Resend's onboarding sender)

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#1c2135">
      <h2 style="margin:0 0 16px">Nuevo mensaje desde el portfolio</h2>
      <p style="margin:0 0 4px;color:#5b6172;font-size:12px;text-transform:uppercase">Nombre</p>
      <p style="margin:0 0 16px;font-weight:600">${escapeHtml(name)}</p>
      <p style="margin:0 0 4px;color:#5b6172;font-size:12px;text-transform:uppercase">Email</p>
      <p style="margin:0 0 16px;font-weight:600">${escapeHtml(email)}</p>
      <p style="margin:0 0 4px;color:#5b6172;font-size:12px;text-transform:uppercase">Mensaje</p>
      <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
    </div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || contactEmail],
      reply_to: email,
      subject: `Nuevo mensaje de ${name}`,
      html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

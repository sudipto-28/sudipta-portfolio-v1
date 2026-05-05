import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  recaptchaToken?: string;
  honeypot?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyRecaptcha(token: string, remoteIp?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false, reason: "RECAPTCHA_SECRET_KEY is not configured" };
  }

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.append("remoteip", remoteIp);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    return { ok: false, reason: `reCAPTCHA verify HTTP ${res.status}` };
  }

  const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
  if (!data.success) {
    return {
      ok: false,
      reason: `reCAPTCHA rejected: ${(data["error-codes"] ?? []).join(", ") || "unknown"}`,
    };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently accept to not tip off bots
  if (payload.honeypot) {
    return Response.json({ ok: true });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();
  const service = payload.service?.trim();

  if (!name || !email || !message || !service) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!payload.recaptchaToken) {
    return Response.json({ error: "Captcha required" }, { status: 400 });
  }

  const remoteIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined;

  const captcha = await verifyRecaptcha(payload.recaptchaToken, remoteIp);
  if (!captcha.ok) {
    return Response.json({ error: "Captcha failed", detail: captcha.reason }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "contact@devsudipto.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json({ error: "Email not configured" }, { status: 500 });
  }

  const company = payload.company?.trim() || "—";
  const budget = payload.budget?.trim() || "—";

  const subject = `New inquiry · ${service} · ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1C1814;line-height:1.6;max-width:560px;">
      <h2 style="margin:0 0 16px;font-size:18px;">New portfolio inquiry</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tr><td style="padding:6px 12px 6px 0;color:#6B625A;width:120px;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6B625A;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6B625A;">Company</td><td>${escapeHtml(company)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6B625A;">Service</td><td>${escapeHtml(service)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#6B625A;">Budget</td><td>${escapeHtml(budget)}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px;font-size:14px;color:#6B625A;text-transform:uppercase;letter-spacing:0.1em;">Message</h3>
      <div style="white-space:pre-wrap;padding:16px;background:#F6F2EC;border:1px solid rgba(28,24,20,0.1);">${escapeHtml(message)}</div>
    </div>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    return Response.json({ error: "Send failed", detail: error.message }, { status: 502 });
  }

  return Response.json({ ok: true });
}

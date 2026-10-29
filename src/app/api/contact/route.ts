import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Honeypot check: If the hidden 'website_confirm_field' is filled, silently drop spam
    if (data.website_confirm_field) {
      console.warn("Spam bot detected via honeypot field. Dropping request silently.");
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    const { name, email, projectType, budget, message } = data;

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief message describing your project (min 10 characters)." },
        { status: 400 }
      );
    }

    // 3. Resend email delivery
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "asib@example.com";

    if (resendApiKey && resendApiKey !== "re_your_api_key_here") {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: `New Client Inquiry from ${name} [${projectType || "General"}]`,
        text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType || "Not specified"}
Budget Range: ${budget || "Not specified"}

Message:
${message}
        `,
      });
      console.log(`Email dispatched via Resend to ${recipientEmail}`);
    } else {
      console.log("RESEND_API_KEY not configured or in dev mode. Form submission logged successfully:", {
        name,
        email,
        projectType,
        budget,
        message,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! I typically reply within 24 hours.",
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Unable to send message right now. Please email me directly." },
      { status: 500 }
    );
  }
}


type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

const json = (statusCode: number, body: Record<string, string>) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character]!,
  );

export const handler = async (event: { httpMethod?: string; body?: string | null }) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return json(500, { error: "Email service is not configured" });
  }

  let payload: Partial<InquiryPayload>;
  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return json(400, { error: "Invalid request" });
  }

  const fields = {
    name: payload.name?.trim(),
    email: payload.email?.trim(),
    phone: payload.phone?.trim(),
    type: payload.type?.trim(),
    message: payload.message?.trim(),
  };

  if (!fields.name || !fields.email || !fields.phone || !fields.type || !fields.message) {
    return json(400, { error: "Please complete all required fields" });
  }

  if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
    return json(400, { error: "Please enter a valid email address" });
  }

  const safe = {
    name: escapeHtml(fields.name),
    email: escapeHtml(fields.email),
    phone: escapeHtml(fields.phone),
    type: escapeHtml(fields.type),
    message: escapeHtml(fields.message).replace(/\r?\n/g, "<br />"),
  };

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: ["advanterraconstruction@gmail.com"],
      reply_to: fields.email,
      subject: `New project inquiry from ${fields.name}`,
      text: [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        `Project type: ${fields.type}`,
        "",
        fields.message,
      ].join("\n"),
      html: `
        <h2>New project inquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Project type:</strong> ${safe.type}</p>
        <p><strong>Message:</strong><br />${safe.message}</p>
      `,
    }),
  });

  if (!resendResponse.ok) {
    const errorDetails = await resendResponse.text();
    console.error("Resend request failed", resendResponse.status, errorDetails);
    return json(502, { error: "Unable to send your inquiry right now" });
  }

  return json(200, { message: "Inquiry sent" });
};

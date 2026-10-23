"use client";

import { FormEvent, useState } from "react";

import { Button, Column, Feedback, Input, Text, Textarea } from "@once-ui-system/core";

import type { ContactData } from "@/resources/contact";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

type ContactFormProps = {
  form: ContactData["form"];
  email: string;
};

export const ContactForm = ({ form, email }: ContactFormProps) => {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""),
    };

    if (!payload.name || !payload.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate style={{ width: "100%" }}>
      <Column gap="16" fillWidth>
        <Input id="contact-name" name="name" label={form.name} required />
        <Input id="contact-email" name="email" type="email" label={form.email} required />
        <Textarea
          id="contact-message"
          name="message"
          label={form.message}
          placeholder={form.messagePlaceholder}
          lines={5}
          required
        />
        {/* Honeypot field, hidden from people */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        />
        <Button type="submit" variant="primary" className="cta-yellow" size="l" disabled={status === "sending"} fillWidth>
          {status === "sending" ? form.sending : form.send}
        </Button>
        {status === "success" && <Feedback variant="success" description={form.success} />}
        {status === "invalid" && <Feedback variant="warning" description={form.invalid} />}
        {status === "error" && (
          <Feedback variant="danger" description={form.error}>
            <Text variant="body-default-s">
              {form.errorFallback}{" "}
              <a href={`mailto:${email}`} style={{ textDecoration: "underline" }}>
                {email}
              </a>
            </Text>
          </Feedback>
        )}
      </Column>
    </form>
  );
};

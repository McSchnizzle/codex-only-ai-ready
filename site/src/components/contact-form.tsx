'use client';

import { FormEvent, useMemo, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    teamSize: "",
    message: "",
    freeSession: true,
  });

  const isSubmitting = status === "submitting";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, value, type } = target;
    const isChecked = "checked" in target ? (target as HTMLInputElement).checked : false;
    setFields((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? isChecked : value,
    }));
  };

  const reset = () => {
    setFields({
      name: "",
      email: "",
      company: "",
      website: "",
      teamSize: "",
      message: "",
      freeSession: false,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const statusMessage = useMemo(() => {
    if (status === "success") return "Thanks! We received your message and will reply within two business days.";
    if (status === "error") return error || "Something went wrong. Please try again.";
    return null;
  }, [status, error]);

  return (
    <form className="form panel" onSubmit={onSubmit}>
      <h3 style={{ margin: 0 }}>Tell us about your organization</h3>
      <div className="form-row inline">
        <label>
          Name
          <input
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange}
            required
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <div className="form-row inline">
        <label>
          Company / organization
          <input
            name="company"
            value={fields.company}
            onChange={handleChange}
            placeholder="Company"
            autoComplete="organization"
          />
        </label>
        <label>
          Website (optional)
          <input
            name="website"
            value={fields.website}
            onChange={handleChange}
            placeholder="https://"
            autoComplete="url"
          />
        </label>
      </div>

      <div className="form-row inline">
        <label>
          Approximate team size (optional)
          <input
            name="teamSize"
            value={fields.teamSize}
            onChange={handleChange}
            placeholder="e.g., 25"
            inputMode="numeric"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          What would you like AI to help with?
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            placeholder="Tell us about your workflows, goals, or pain points."
            required
          />
        </label>
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          name="freeSession"
          checked={fields.freeSession}
          onChange={handleChange}
        />
        I’m interested in a free December 2025 AI Readiness Session
      </label>

      <div className="cta-row">
        <button className="btn primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </div>
      {statusMessage && (
        <div className={`status ${status === "success" ? "success" : status === "error" ? "error" : ""}`} role="status">
          {statusMessage}
        </div>
      )}
    </form>
  );
}

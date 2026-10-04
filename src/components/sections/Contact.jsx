import { useState } from "react";
import { useForm } from "react-hook-form";
import Section from "../ui/Section";
import Button from "../ui/Button";
import ExternalLink from "../ui/ExternalLink";
import Reveal from "../shared/Reveal";
import { siteConfig } from "../../config/site.config";
import { socialLinks } from "../../data/socialLinks";

function buildGmailComposeUrl({ name, email, subject, message }) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: siteConfig.email,
    su: subject,
    body: `${message}\n\n${name} (${email})`,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

const hostAndPath = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="error" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.open(buildGmailComposeUrl(data), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const details = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "Location", value: siteConfig.location },
    ...socialLinks.map((l) => ({ label: l.label, value: hostAndPath(l.url), href: l.url })),
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to full stack roles and interesting projects. The quickest way to reach me is by email."
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <dl className="border-t border-line">
            {details.map((d) => (
              <div key={d.label} className="py-4 border-b border-line">
                <dt className="eyebrow mb-1">{d.label}</dt>
                <dd className="text-ink">
                  {d.href?.startsWith("mailto:") && (
                    <a href={d.href} className="link break-all">
                      {d.value}
                    </a>
                  )}
                  {d.href && !d.href.startsWith("mailto:") && (
                    <ExternalLink href={d.href} className="link break-all">
                      {d.value}
                    </ExternalLink>
                  )}
                  {!d.href && d.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  autoComplete="name"
                  placeholder="Your name"
                  {...register("name", { required: "Please enter your name." })}
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                />
              </Field>
            </div>

            <Field id="subject" label="Subject" error={errors.subject}>
              <input
                id="subject"
                placeholder="What is this about?"
                {...register("subject", { required: "Please add a subject." })}
              />
            </Field>

            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                rows={6}
                placeholder="A few lines about the role or project."
                {...register("message", {
                  required: "Please write a message.",
                  minLength: { value: 20, message: "Please write at least 20 characters." },
                })}
              />
            </Field>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={submitted}>
                {submitted ? "Opened in Gmail" : "Compose in Gmail"}
              </Button>
              <p className="text-sm text-ink-3" role="status">
                {submitted
                  ? "Your draft is open in a new tab. Press send there."
                  : "Opens a pre-filled draft in Gmail."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

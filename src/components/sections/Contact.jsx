import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { siteConfig } from "../../config/site.config";
import {
  fadeInLeft,
  fadeInRight,
  viewportOptions,
} from "../../animations/variants";

function buildGmailComposeUrl({ name, email, subject, message }) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: siteConfig.email,
    su: subject,
    body: `${message}\n\n— ${name} (${email})`,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
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
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    background: "var(--bg-dark-card)",
    color: "var(--text-primary)",
  };

  const inputClass =
    "form-input w-full px-4 py-3 rounded-xl border text-sm outline-none placeholder:text-slate-600";

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-dark-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'd love to hear from you"
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Left info panel */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-2 space-y-6"
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Whether you have a job opportunity, a project idea, or just want
              to connect — I'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  Icon: FaEnvelope,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  Icon: FaMapMarkerAlt,
                  label: "Location",
                  value: siteConfig.location,
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                  >
                    <item.Icon
                      size={16}
                      style={{ color: "var(--primary-light)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs mb-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="link-hover-accent text-sm font-medium"
                        style={{ "--link-base": "var(--text-primary)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  Icon: FaGithub,
                  href: siteConfig.social.github,
                  label: "GitHub",
                },
                {
                  Icon: FaLinkedin,
                  href: siteConfig.social.linkedin,
                  label: "LinkedIn",
                },
                {
                  Icon: FaEnvelope,
                  href: `mailto:${siteConfig.email}`,
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-200"
                  style={{
                    background: "var(--bg-dark-card)",
                    borderColor: "var(--border-dark)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 glass-card p-8 space-y-5"
          >
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Meghana Pokuru"
                  className={inputClass}
                  style={inputStyle}
                />
                {errors.name && (
                  <p className="text-xs mt-1 text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="meghana.pokuru@email.com"
                  type="email"
                  className={inputClass}
                  style={inputStyle}
                />
                {errors.email && (
                  <p className="text-xs mt-1 text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject"
                className={inputClass}
                style={inputStyle}
              />
              {errors.subject && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Please write at least 20 characters.",
                  },
                })}
                placeholder="Share your thoughts..."
                rows={5}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
              {errors.message && (
                <p className="text-xs mt-1 text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={submitted}
              whileHover={{ scale: submitted ? 1 : 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300"
              style={{
                background: submitted
                  ? "linear-gradient(135deg,#22c55e,#16a34a)"
                  : "var(--gradient-primary)",
                boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 30%, transparent)",
              }}
            >
              {submitted ? (
                <>
                  <FaCheck size={14} /> Opened in Gmail — hit send there!
                </>
              ) : (
                <>
                  <FaPaperPlane size={14} /> Send via Gmail
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

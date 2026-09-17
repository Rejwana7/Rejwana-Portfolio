"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, AlertCircle, LoaderCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "rejwanatabassum87871@gmail.com";
  const phoneNumber = "01877186487";
  const locationText = "Chattogram, Bangladesh";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#38bdf8", "#818cf8", "#34d399"],
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "The message could not be sent.");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/70 border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have an open Software QA or Full-Stack engineering opportunity, or want to discuss a project? Feel free to reach out directly to my email!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d1424] border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Information</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am actively seeking QA / Software Testing & Development opportunities. I respond promptly to inquiries.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block truncate"
                    >
                      {emailAddress}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-sm font-semibold text-white">{locationText}</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Online Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Rejwana7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/rejwana-tabassum-22480a250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d1424] border border-slate-800 shadow-xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Send Direct Message</h3>
                 
                </div>
                
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>Thank you! Your message was sent successfully.</span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-sm flex items-start gap-3" role="alert">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <span>
                    {errorMessage}{" "}
                    <a href={`mailto:${emailAddress}`} className="font-semibold underline hover:text-white">
                      Email me directly instead.
                    </a>
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sender Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>

                  {/* Sender Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={254}
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={150}
                    placeholder="e.g. SQA Engineer Role / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    maxLength={5000}
                    placeholder="Hello Rejwana, I would like to talk regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <LoaderCircle className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

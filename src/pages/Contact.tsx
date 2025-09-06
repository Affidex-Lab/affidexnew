import { useState } from "react";
import { ArrowRight, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": form.getAttribute("name") || "contact", ...(Object.fromEntries(formData) as Record<string, string>) }),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="border-t bg-white py-20">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Get in touch</h1>
          <p className="mt-4 text-muted-foreground">Tell us about your project or research. We’ll follow up to schedule a short conversation.</p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <input id="name" name="name" required className="h-11 rounded-lg border px-3 outline-none ring-0 transition focus:border-[#0A2540]" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required className="h-11 rounded-lg border px-3 outline-none transition focus:border-[#0A2540]" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required className="resize-none rounded-lg border px-3 py-2 outline-none transition focus:border-[#0A2540]" placeholder="What are you building?" />
              </div>
              <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:opacity-95 disabled:opacity-60">
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
              {status === "success" && (<p className="text-sm text-emerald-600">Thanks! Your message was sent.</p>)}
              {status === "error" && (<p className="text-sm text-red-600">Something went wrong. Please try again.</p>)}
            </div>
          </form>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-slate-500" size={18} />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a href="mailto:contact@affidexlab.com" className="text-sm text-slate-600 hover:underline">contact@affidexlab.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-slate-500" size={18} />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm text-slate-600">Remote</div>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://linkedin.com/company/affidexlab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50"><Linkedin size={16}/>LinkedIn</a>
                <a href="https://x.com/affidexlab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50"><Twitter size={16}/>X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

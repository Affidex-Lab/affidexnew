import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({ name: "", email: "", message: "" });

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";;

  // Initialize EmailJS
  emailjs.init(PUBLIC_KEY);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const rawFormData = new FormData(form);
    
    // Explicitly construct the data object with the expected shape
    const data: { name: string; email: string; message: string; reply_to: string; to_email: string } = {
      name: rawFormData.get("name")?.toString() || "",
      email: rawFormData.get("email")?.toString() || "",
      message: rawFormData.get("message")?.toString() || "",
      reply_to: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL || "",
      to_email: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL || ""
    };

    setFormData(data); // Store form data for fallback

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      // Fallback to default email client
      const subject = encodeURIComponent("Affidex Lab contact message from {{name}}".replace("{{name}}", data.name));
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
      );
      window.location.href = `mailto:${data.to_email}?subject=${subject}&body=${body}`;
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
            onSubmit={handleSubmit}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
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
              <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center rounded-lg bg-[#0A2540] px-5 py-3 font-semibold text-white transition hover:opacity-95 disabled:opacity-60">
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
              {status === "success" && (<p className="text-sm text-emerald-600">Thanks! Your message was sent.</p>)}
              {status === "error" && (<p className="text-sm text-red-600">Failed to send via EmailJS. Opening your email client...</p>)}
            </div>
          </form>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-slate-500" size={18} />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a href={`mailto:${import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL}`} className="text-sm text-slate-600 hover:underline">{import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL}</a>
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
                <a href="https://linkedin.com/company/affidexlab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50"><FaLinkedin size={16}/>LinkedIn</a>
                <a href="https://x.com/affidexlab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50"><FaXTwitter size={16}/>X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
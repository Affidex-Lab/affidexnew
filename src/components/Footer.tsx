import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms-and-conditions", label: "Terms & Conditions" },
  ];
  return (
    <footer className="mt-auto border-t bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-center md:flex-row md:text-left">
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} AFFIDEX LAB</div>
        <div className="flex items-center gap-6 text-sm">
          {footerLinks.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <a href="https://linkedin.com/company/affidexlab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><FaLinkedin size={18} /></a>
          <a href="https://x.com/affidexlab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><FaXTwitter size={18}/></a>
        </div>
      </div>
    </footer>
  );
}
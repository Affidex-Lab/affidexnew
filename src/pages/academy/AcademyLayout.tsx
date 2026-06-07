import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { ArrowRight, Menu, X, ExternalLink, MapPin, Mail, Globe, Phone } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

function AcademyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const nav = [
    { to: "/academy", label: "Home" },
    { to: "/academy/programmes", label: "Programmes" },
    { to: "/academy/about", label: "About Us" },
  ];
  const isActive = (to: string) => to === "/academy" ? pathname === "/academy" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-[68px] items-center justify-between">
        {/* Logo */}
        <Link to="/academy" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden" style={{background:'linear-gradient(135deg,#0D1F35 60%,#1E4976)'}}>
            <span className="text-[11px] font-black text-white tracking-tight leading-none">AA</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background:'linear-gradient(135deg,#C9973A,#E8B95A)'}}/>
            <span className="absolute text-[11px] font-black text-white tracking-tight leading-none opacity-0 group-hover:opacity-100 transition-opacity">AA</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-black tracking-[0.1em] uppercase" style={{color:'#0D1F35'}}>Affidex Academy</span>
            <span className="text-[9px] font-semibold tracking-[0.12em] uppercase" style={{color:'#C9973A'}}>Vocational Education & Training</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map(n => (
            <Link key={n.to} to={n.to}
              className={`font-medium transition-colors relative pb-0.5 ${isActive(n.to) ? 'text-[#0D1F35]' : 'text-slate-500 hover:text-[#0D1F35]'}`}>
              {n.label}
              {isActive(n.to) && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full" style={{background:'#C9973A'}}/>}
            </Link>
          ))}
          <a href="https://affidexlab.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium">
            <ExternalLink size={11}/> Affidex Lab
          </a>
          <Link to="/academy/apply"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md">
            Apply Now <ArrowRight size={14}/>
          </Link>
        </nav>

        <button className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close" : "Open menu"}>
          {isOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="container flex flex-col gap-1 py-4">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${isActive(n.to) ? 'bg-slate-50 text-[#0D1F35]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#0D1F35]'}`}>
                {n.label}
              </Link>
            ))}
            <Link to="/academy/apply" onClick={() => setIsOpen(false)}
              className="btn-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white">
              Apply Now — It's Free <ArrowRight size={14}/>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function AcademyFooter() {
  return (
    <footer style={{background:'#0D1F35'}} className="text-white">
      {/* Top gold bar */}
      <div className="h-1" style={{background:'linear-gradient(90deg,#C9973A,#E8B95A,#C9973A)'}}/>

      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{background:'rgba(201,151,58,0.15)',border:'1px solid rgba(201,151,58,0.3)'}}>
                <span className="text-xs font-black text-white tracking-tight">AA</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black tracking-[0.1em] uppercase text-white">Affidex Academy Ltd</span>
                <span className="text-[9px] font-semibold tracking-[0.12em] uppercase" style={{color:'#C9973A'}}>Vocational Education & Training</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-2" style={{color:'#94A3B8'}}>
              Building employability, enterprise, and income pathways for underserved youth, women, and communities across Southern Nigeria through practical, industry-aligned ICT and technology training.
            </p>
            <p className="text-xs mb-5" style={{color:'#64748B'}}>RC: 9316934 · SMEDAN: SUID-5998-5813-3500-9105</p>
            <div className="flex items-center gap-3">
              {[
                {href:'https://linkedin.com/company/affidexlab', icon:<FaLinkedin size={16}/>},
                {href:'https://x.com/affidexlab', icon:<FaXTwitter size={16}/>},
                {href:'#', icon:<FaInstagram size={16}/>},
                {href:'https://wa.me/2348133985352', icon:<FaWhatsapp size={16}/>},
              ].map((s,i)=>(
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:scale-110"
                  style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)'}}>
                  <span style={{color:'#94A3B8'}}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{color:'#C9973A'}}>Quick Links</h4>
            <ul className="space-y-2.5 text-sm" style={{color:'#94A3B8'}}>
              {[
                {to:'/academy', label:'Home'},
                {to:'/academy/programmes', label:'Our Programmes'},
                {to:'/academy/about', label:'About Us'},
                {to:'/academy/apply', label:'Apply Now'},
              ].map((l,i)=>(
                <li key={i}><Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
              <li><a href="https://affidexlab.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Affidex Lab <ExternalLink size={11}/></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{color:'#C9973A'}}>Contact Us</h4>
            <ul className="space-y-4 text-sm" style={{color:'#94A3B8'}}>
              <li className="flex items-start gap-2.5">
                <Mail size={13} className="mt-0.5 shrink-0" style={{color:'#C9973A'}}/>
                <div className="space-y-0.5">
                  <a href="mailto:academy@affidexlab.com" className="hover:text-white transition-colors block">academy@affidexlab.com</a>
                  <a href="mailto:affidexacademy@gmail.com" className="hover:text-white transition-colors block">affidexacademy@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={13} className="mt-0.5 shrink-0" style={{color:'#C9973A'}}/>
                <a href="tel:+2348133985352" className="hover:text-white transition-colors">+234 813 398 5352</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 shrink-0" style={{color:'#C9973A'}}/>
                <span>ChainSpace Hub, Uyo · Udo Udoma Ave, Uyo<br/>Akwa Ibom · Cross River · Abia · Lagos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe size={13} className="mt-0.5 shrink-0" style={{color:'#C9973A'}}/>
                <a href="https://www.affidexlab.com/academy" className="hover:text-white transition-colors">www.affidexlab.com/academy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliations strip */}
        <div className="mt-12 pt-8 border-t" style={{borderColor:'rgba(255,255,255,0.07)'}}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4 text-center" style={{color:'#C9973A'}}>Confirmed Affiliations & Registrations</p>
          <div className="flex flex-wrap justify-center gap-3 text-xs" style={{color:'#64748B'}}>
            {['CAC RC-9316934','SMEDAN Certified','Microsoft AI Cloud Partner','UNESCO-UNEVOC','NYSC SAED Partner','FME TVET Approved','IPPNL Partner','3MTT Applicant'].map((a,i)=>(
              <span key={i} className="px-3 py-1.5 rounded-full" style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}>
                ✓ {a}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-6 border-t" style={{borderColor:'rgba(255,255,255,0.07)'}}>
          <p className="text-xs" style={{color:'#475569'}}>© {new Date().getFullYear()} Affidex Academy Ltd. A division of Affidex Lab. All rights reserved.</p>
          <div className="flex gap-4 text-xs" style={{color:'#475569'}}>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AcademyLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <AcademyNavbar/>
      <main className="flex-1"><Outlet/></main>
      <AcademyFooter/>
    </div>
  );
}

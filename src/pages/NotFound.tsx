import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — AFFIDEX LAB";
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");
    return () => {
      // Restore indexability when navigating away
      robots?.setAttribute("content", "index, follow");
    };
  }, []);

  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Error 404</p>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        <Home size={16} />
        Back to homepage
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}

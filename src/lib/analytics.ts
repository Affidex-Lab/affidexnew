/**
 * Minimal GA4 wrapper.
 *
 * Set VITE_GA_MEASUREMENT_ID in your environment (e.g. .env, or your host's
 * env var settings) to your GA4 Measurement ID — looks like "G-XXXXXXXXXX".
 * You get this from Google Analytics: Admin → Data Streams → your web stream.
 *
 * If the env var isn't set, analytics silently no-ops — safe to ship without
 * it configured yet.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";

let initialized = false;

function loadGtagScript() {
  if (initialized || !MEASUREMENT_ID) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Disable GA's own automatic page_view — we send it manually per route
  // change in App.tsx, since SPA navigation doesn't trigger a fresh page load.
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path: string) {
  if (!MEASUREMENT_ID) return; // analytics not configured — no-op
  if (!initialized) loadGtagScript();
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** For tracking custom events, e.g. trackEvent("apply_submitted", { programme: "Fullstack" }) */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!MEASUREMENT_ID) return;
  window.gtag?.("event", name, params);
}

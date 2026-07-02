import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { trackPageView } from "./lib/analytics";

// Lazy-loaded routes — each is now its own chunk, so visitors only
// download the JS for the page they actually land on.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AcademyLayout = lazy(() => import("./pages/academy/AcademyLayout"));
const AcademyHome = lazy(() => import("./pages/academy/AcademyHome"));
const AcademyProgrammes = lazy(() => import("./pages/academy/AcademyProgrammes"));
const AcademyAbout = lazy(() => import("./pages/academy/AcademyAbout"));
const AcademyApply = lazy(() => import("./pages/academy/AcademyApply"));
const AcademyNotFound = lazy(() => import("./pages/academy/AcademyNotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-current border-t-transparent opacity-40"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

/** Fires a GA4 page_view on every route change (SPA navigation doesn't trigger this automatically). */
function AnalyticsListener() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

export default function App() {
  return (
    <>
      <AnalyticsListener />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Academy sub-site — has its own layout (navbar + footer) */}
          <Route path="/academy" element={<AcademyLayout />}>
            <Route index element={<AcademyHome />} />
            <Route path="programmes" element={<AcademyProgrammes />} />
            <Route path="about" element={<AcademyAbout />} />
            <Route path="apply" element={<AcademyApply />} />
            <Route path="*" element={<AcademyNotFound />} />
          </Route>

          {/* Main Affidex Lab site */}
          <Route
            path="*"
            element={
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/roadmap" element={<Roadmap />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-and-conditions" element={<Terms />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

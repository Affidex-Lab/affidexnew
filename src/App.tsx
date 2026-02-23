import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Roadmap from "./pages/Roadmap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AcademyLayout from "./pages/academy/AcademyLayout";
import AcademyHome from "./pages/academy/AcademyHome";
import AcademyProgrammes from "./pages/academy/AcademyProgrammes";
import AcademyAbout from "./pages/academy/AcademyAbout";
import AcademyApply from "./pages/academy/AcademyApply";

export default function App() {
  return (
    <Routes>
      {/* Academy sub-site — has its own layout (navbar + footer) */}
      <Route path="/academy" element={<AcademyLayout />}>
        <Route index element={<AcademyHome />} />
        <Route path="programmes" element={<AcademyProgrammes />} />
        <Route path="about" element={<AcademyAbout />} />
        <Route path="apply" element={<AcademyApply />} />
      </Route>

      {/* Main Affidex Lab site */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}
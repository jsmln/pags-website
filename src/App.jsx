import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import NotFound from "./pages/NotFound.jsx";

// Per-route footer copy, matching the page-specific footer taglines from the Figma design.
const FOOTER_NOTES = {
  "/": "Dark steel reliability. Corporate-green clarity.",
  "/about": "Built on legacy values since 1996.",
  "/services":
    "Need coordinated delivery? We align chilled water, fire suppression, and plumbing scopes so your schedule stays predictable.",
  "/portfolio": "Safety-first installation • Quality documentation • On-time delivery",
};

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-white text-[#14241C] font-sans flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
          <Route path="/terms" element={<LegalPage title="Terms of Service" />} />
          <Route path="/accessibility" element={<LegalPage title="Accessibility" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer note={FOOTER_NOTES[pathname]} />
    </div>
  );
}

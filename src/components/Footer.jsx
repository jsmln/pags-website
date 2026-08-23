import React from "react";
import { Link } from "react-router-dom";

/**
 * Shared site footer. Pass `note` to override the default tagline
 * for pages that want page-specific footer copy (matches Figma).
 */
export default function Footer({ note }) {
  return (
    <footer className="border-t border-[#E5E9E6] py-10">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-sm text-[#4B564F]">
          {note || "Dark steel reliability. Corporate-green clarity."}
        </p>
        <p className="text-xs text-[#8A938D] mt-3">
          Commercial HVAC • Fire Protection • Plumbing • Mechanical Engineering
        </p>
        <p className="text-xs text-[#8A938D] mt-4">
          © {new Date().getFullYear()} Pacific Airconditioning and General Services, Inc. All
          rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2 text-xs text-[#8A938D]">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/accessibility">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}

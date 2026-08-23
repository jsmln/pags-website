import React from "react";
import { GREEN } from "../lib/theme.js";

/**
 * Generic placeholder for legal pages (Privacy, Terms, Accessibility).
 * Replace body copy with actual reviewed legal text before launch.
 */
export default function LegalPage({ title, children }) {
  return (
    <section className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold" style={{ color: GREEN }}>{title}</h1>
      <div className="mt-6 text-sm text-[#4B564F] leading-relaxed space-y-4">
        {children || (
          <p>
            This page is a placeholder. Replace this content with your reviewed {title.toLowerCase()}{" "}
            copy before the site goes live.
          </p>
        )}
      </div>
    </section>
  );
}

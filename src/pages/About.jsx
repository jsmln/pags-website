import React from "react";
import { useSearchParams } from "react-router-dom";
import { HardHat, Compass, TrendingUp, Handshake, Leaf } from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT } from "../lib/theme.js";
import { COMPANY, LEADERSHIP, CORE_VALUES, VISION, MISSION } from "../lib/companyData.js";

const VALUE_ICONS = [Compass, TrendingUp, Handshake, Leaf];

const philosophy = [
  "Treat all individuals with dignity and respect",
  "Act faithfully towards company goals and objectives",
  "Display professional excellence at all times",
  "Work cooperatively and practice open communication",
  "Provide utmost quality service to internal and external clients",
  "Respond to challenges in a sound and timely manner",
];

export default function About() {
  const [searchParams] = useSearchParams();
  const isHighlighted = Boolean(searchParams.get("highlight"));

  return (
    <>
      {/* Hero */}
      <section className="hero-section max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className={`text-4xl md:text-5xl font-extrabold leading-tight ${isHighlighted ? "rounded-md px-2 -mx-2 shadow-[0_0_0_3px_#E7F1EA]" : ""}`} style={{ color: GREEN }}>
            Who We Are
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            A trusted name in airconditioning, ventilation, and fire protection since{" "}
            {COMPANY.foundedYear}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>
              Meet the Team
            </button>
            <button className="px-5 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>
              Our Services
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-white aspect-[4/3] flex items-center justify-center">
          <HardHat className="w-12 h-12 text-[#B7C0BA]" />
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Our Story</h2>
          <div className="mt-8 bg-white border border-[#E5E9E6] rounded-xl p-8 text-sm text-[#4B564F] leading-relaxed space-y-4">
            <p>
              {COMPANY.legalName} was founded in {COMPANY.foundedYear}, as the Philippine economy
              was recovering from a financial crisis. Its founder, {COMPANY.founder}, returned
              home after years working as a technician supervisor for Carrier International in
              Guam and Saipan — building on skills he'd already developed locally in ductworks
              before going overseas.
            </p>
            <p>
              Since then, the company has grown from a HVAC technical and mechanical operation
              into one that also runs its own complete steel fabrication shop for ducting works —
              handling contracting and subcontracting work across clients ranging from
              residential to industrial sectors.
            </p>
            <p>
              Today the company is led by {COMPANY.founder} as {COMPANY.founderTitle}, supported
              by a board of directors and department heads across commercial, sales, operations,
              and finance.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Founder</h2>
            <p className="text-[#5B6660] mt-3">
              The values that shaped the company's approach, from the person who started it.
            </p>
          </div>
          <div className="bg-white border border-[#E5E9E6] rounded-xl p-5 flex gap-4">
            <div className="w-16 h-16 rounded-lg bg-white border border-[#E5E9E6] flex-shrink-0" />
            <div>
              <p className="font-bold">{COMPANY.founder}</p>
              <p className="text-xs text-[#8A938D]">{COMPANY.founderTitle}</p>
              <p className="text-sm text-[#5B6660] mt-2">
                Prior to founding the company, he worked with several well-known local firms in
                ductworks before spending years overseas as a technician supervisor for Carrier
                International in Guam and Saipan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Our Team</h2>
          <p className="text-center text-[#5B6660] mt-2 max-w-xl mx-auto">
            The President and Board of Directors, together with department heads across
            business development, procurement, project management, and administration.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {LEADERSHIP.map((p) => (
              <div key={p.name} className="bg-white border border-[#E5E9E6] rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E5E9E6] mb-3" />
                <p className="font-bold text-sm">{p.name}</p>
                <p className="text-xs text-[#8A938D] mt-0.5">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: GREEN }}>Vision &amp; Mission</p>
          <p className="mt-4 text-sm text-[#4B564F]">
            <span className="font-bold" style={{ color: GREEN_DARK }}>Vision: </span>
            {VISION}
          </p>
          <p className="mt-4 text-sm text-[#4B564F]">
            <span className="font-bold" style={{ color: GREEN_DARK }}>Mission: </span>
            {MISSION}
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Our Core Values</h2>
          <p className="text-center text-[#5B6660] mt-2">
            What directs the company so every stakeholder benefits long-term.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {CORE_VALUES.map(({ title, desc }, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: GREEN_LIGHT }}>
                    <Icon className="w-7 h-7" style={{ color: GREEN }} />
                  </div>
                  <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                  <p className="text-sm text-[#5B6660] mt-1">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Our Philosophy</h2>
          <p className="text-center text-[#5B6660] mt-2">What employees are expected to uphold.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {philosophy.map((p) => (
              <div key={p} className="flex items-start gap-3 border border-[#E5E9E6] rounded-lg p-4">
                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: GREEN }} />
                <p className="text-sm text-[#4B564F]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

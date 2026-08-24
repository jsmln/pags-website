import React, { useState } from "react";
import {
  Snowflake,
  Flame,
  Droplet,
  Layers,
  Factory,
  Users,
  FileText,
  Hotel,
  Building2,
  Home as HomeIcon,
  Building,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT } from "../lib/theme.js";
import { COMPANY, SERVICE_GROUPS, PROJECT_SECTORS } from "../lib/companyData.js";

const GROUP_ICONS = [Snowflake, Flame, Droplet, Layers];
const SECTOR_ICONS = [Hotel, Factory, Building2, HomeIcon, Building, Globe2];

const differentiators = [
  {
    icon: Factory,
    title: "In-House Fabrication",
    desc: "A complete steel fabrication shop for ducting works, kept in-house for quality and schedule control.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "A highly experienced, competent team of Project Managers, Supervisors, and Installers on every job.",
  },
  {
    icon: FileText,
    title: "Clear Quotations",
    desc: "Clear, detailed quotations built around each client's actual project requirements.",
  },
];

function BuildingGraphic() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full h-auto"
      role="img"
      aria-label="Industrial facility illustration"
    >
      <rect x="150" y="230" width="270" height="14" fill="#C9CDCB" />
      <rect x="40" y="120" width="150" height="124" fill="#3C4448" />
      <rect x="40" y="120" width="150" height="10" fill="#2A3134" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`w-${row}-${col}`}
            x={60 + col * 40}
            y={140 + row * 22}
            width="20"
            height="14"
            fill={row === 1 && col === 1 ? GREEN : "#5B6568"}
          />
        ))
      )}
      <rect x="190" y="60" width="200" height="184" fill="#4A5458" />
      <rect x="190" y="60" width="200" height="10" fill="#333B3E" />
      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`w2-${row}-${col}`}
            x={205 + col * 44}
            y={80 + row * 26}
            width="24"
            height="16"
            fill={(row + col) % 5 === 0 ? GREEN : "#6B7477"}
          />
        ))
      )}
      <rect x="220" y="230" width="40" height="14" fill="#2A3134" />
      <rect x="330" y="140" width="30" height="104" fill="#8A9296" />
      <rect x="336" y="150" width="18" height="18" fill="#2A3134" />
    </svg>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: GREEN }}>
            Mechanical, Electrical &amp; Ventilation Engineering
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            Design, fabrication, planning, and installation — serving clients since{" "}
            {COMPANY.foundedYear}.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/portfolio"
              className="px-5 py-2.5 rounded-md border font-semibold text-sm"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              View Projects
            </a>
            <a
              href="#quote"
              className="px-5 py-2.5 rounded-md font-semibold text-sm text-white"
              style={{ backgroundColor: GREEN }}
            >
              Request a Quote
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Design", "Fabrication", "Installation"].map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <BuildingGraphic />
        </div>
      </section>

      {/* Core Services — real 4-group breakdown from pagsinc.com/services */}
      <section id="services" className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>
            What We Offer
          </h2>
          <p className="text-center text-[#5B6660] mt-2 max-w-xl mx-auto">
            Airconditioning and ventilation, fire protection, plumbing &amp; sanitary, and more.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {SERVICE_GROUPS.map(({ title, items }, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              return (
                <div key={title} className="text-center">
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: GREEN_LIGHT }}
                  >
                    <Icon className="w-7 h-7" style={{ color: GREEN }} />
                  </div>
                  <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                  <p className="mt-3 text-sm text-[#2B342E]">{items.slice(0, 3).join(" • ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why work with us — real differentiators, not invented process steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Why Work With Us</h2>
          <p className="text-center text-[#5B6660] mt-2">What sets our project delivery apart.</p>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: GREEN_LIGHT }}>
                  <Icon className="w-7 h-7" style={{ color: GREEN }} />
                </div>
                <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                <p className="text-sm text-[#5B6660] mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors we serve — real, from pagsinc.com/projects */}
      <section id="portfolio" className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Sectors We Serve</h2>
          <p className="text-[#5B6660] mt-2 max-w-xl mx-auto">
            A wide range of professional services delivered across six industries.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/portfolio" className="px-5 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>
              See All Sectors
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {PROJECT_SECTORS.slice(0, 6).map(({ title, desc }, i) => {
              const Icon = SECTOR_ICONS[i % SECTOR_ICONS.length];
              return (
                <div key={title} className="bg-white border border-[#E5E9E6] rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: GREEN_LIGHT }}>
                    <Icon className="w-5 h-5" style={{ color: GREEN }} />
                  </div>
                  <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                  <p className="text-sm text-[#5B6660] mt-2">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Interested In Our Services?</h2>
          <p className="text-[#5B6660] mt-2">
            Let us know what you need and we'll do our best to help — we provide clear, detailed
            quotations built around your project.
          </p>

          {submitted ? (
            <div className="mt-10 border border-[#E5E9E6] rounded-xl p-8">
              <CheckCircle2 className="w-8 h-8 mx-auto" style={{ color: GREEN }} />
              <p className="font-bold mt-3">Request received</p>
              <p className="text-sm text-[#5B6660] mt-1">Our team will reach out shortly.</p>
            </div>
          ) : (
          <form
            className="mt-10 text-left grid sm:grid-cols-2 gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label className="text-xs font-semibold text-[#4B564F]">Company Name</label>
              <input
                required
                name="companyName"
                placeholder="e.g., Northbridge Facilities"
                className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#4B564F]">Work Email</label>
              <input
                required
                type="email"
                name="workEmail"
                placeholder="name@company.com"
                className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-[#4B564F]">Service Needed</label>
              <select className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F] bg-white">
                <option>Select your scope</option>
                {SERVICE_GROUPS.map((g) => (
                  <option key={g.title}>{g.title}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 flex justify-center gap-3 mt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-md font-semibold text-sm text-white flex items-center gap-2"
                style={{ backgroundColor: GREEN }}
              >
                Submit Request <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
          )}
        </div>
      </section>
    </>
  );
}

import React, { useState } from "react";
import {
  Search,
  Snowflake,
  Flame,
  Droplet,
  Layers,
  ClipboardCheck,
  ArrowRight,
  Factory,
  Users,
  FileText,
} from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT, GRAY } from "../lib/theme.js";
import { SERVICE_GROUPS } from "../lib/companyData.js";

const GROUP_ICONS = [Snowflake, Flame, Droplet, Layers];

const whyPoints = [
  {
    icon: Factory,
    title: "In-House Fabrication",
    desc: "A complete steel fabrication shop for ducting works — not outsourced, kept in-house for quality and schedule control.",
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

export default function Services() {
  const [filter, setFilter] = useState("All Services");

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: GREEN }}>
            What We Offer
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            Airconditioning and ventilation engineering, fire protection, and plumbing &amp;
            sanitary systems — design, planning, fabrication, and installation.
          </p>
          <div className="mt-6 flex items-center gap-2 border border-[#DDE3DF] rounded-full px-4 py-2.5 max-w-sm">
            <Search className="w-4 h-4 text-[#8A938D] flex-shrink-0" />
            <input placeholder="Search services" className="text-sm outline-none w-full placeholder:text-[#A3ABA5]" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>Schedule a Call</button>
            <button className="px-5 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>Request a Quote</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["All Services", "By Discipline"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="text-xs font-medium px-3 py-1.5 rounded-full border"
                style={filter === f ? { backgroundColor: GREEN, color: "white", borderColor: GREEN } : { borderColor: "#DDE3DF", color: "#4B564F" }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-[#ECEFED] aspect-[4/3] flex items-center justify-center">
          <Layers className="w-12 h-12" style={{ color: GRAY }} />
        </div>
      </section>

      {/* Service Categories (real, from pagsinc.com/services) */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Service Categories</h2>
            <p className="text-[#5B6660] mt-2 max-w-xl mx-auto">
              Four disciplines, each covering a set of specific works.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {SERVICE_GROUPS.map(({ numeral, title, items }, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              return (
                <div key={title} className="bg-white border border-[#E5E9E6] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN_LIGHT }}>
                      <Icon className="w-6 h-6" style={{ color: GREEN }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold" style={{ color: GREEN }}>{numeral}</p>
                      <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {items.map((it) => (
                      <li key={it} className="text-sm text-[#4B564F] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: GREEN }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us - real differentiators from pagsinc.com copy */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Why Work With Us</h2>
          <p className="text-center text-[#5B6660] mt-2">What sets our project delivery apart.</p>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {whyPoints.map(({ icon: Icon, title, desc }) => (
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

      {/* Request a Quote */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl bg-[#ECEFED] aspect-square flex items-center justify-center">
              <ClipboardCheck className="w-10 h-10" style={{ color: GRAY }} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Request a Quote</h2>
              <p className="text-[#5B6660] mt-2">Tell us your category and the basics — our team will confirm scope and next steps.</p>

              <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs font-semibold text-[#4B564F]">Category</label>
                  <select className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F] bg-white">
                    <option>Select one</option>
                    {SERVICE_GROUPS.map((g) => (
                      <option key={g.title}>{g.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#4B564F]">Project Type</label>
                  <input placeholder="e.g., Residential, Commercial" className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]" />
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button type="submit" className="px-4 py-2.5 rounded-md font-semibold text-sm text-white flex items-center gap-2" style={{ backgroundColor: GREEN }}>
                    Submit Request <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

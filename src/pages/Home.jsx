import React, { useState } from "react";
import {
  Snowflake,
  Flame,
  Droplet,
  Wrench,
  ClipboardList,
  HardHat,
  Gauge,
  CheckCircle2,
  Star,
  ArrowRight,
  Download,
  PhoneCall,
  ShieldCheck,
  ThermometerSun,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GREEN, GREEN_DARK, GREEN_LIGHT } from "../lib/theme.js";

const coreServices = [
  {
    icon: Snowflake,
    title: "Airconditioning",
    eyebrow: "HVAC Systems • Energy Optimization",
    desc: "Rooftop units, chillers, VRF, air handling, BAS integration",
  },
  {
    icon: Flame,
    title: "Fire Protection",
    eyebrow: "Suppression • Life Safety",
    desc: "Sprinkler systems, fire pumps, detection, coordination support",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    eyebrow: "Water Systems • Drainage",
    desc: "Domestic water, storm/waste systems, backflow compliance",
  },
  {
    icon: Wrench,
    title: "Others",
    eyebrow: "MEP & Specialties",
    desc: "Ventilation, ductwork, pumps, commissioning & retrofits",
  },
];

const deliverables = [
  {
    tag: "Detailed & Compliant",
    title: "MEP Engineering",
    desc: "Design calculations, drawings, and code-compliant documentation for permitting and bid packages.",
    icon: ClipboardList,
  },
  {
    tag: "On-Site Ready",
    title: "Installation & Retrofit",
    desc: "Field execution with QA/QC checkpoints, safety protocols, and progress tracking against schedule.",
    icon: HardHat,
  },
  {
    tag: "Efficient Operations",
    title: "Controls & BAS",
    desc: "Integration, trending, and operational tuning to keep systems running at design efficiency.",
    icon: Gauge,
  },
  {
    tag: "Performance Guaranteed",
    title: "Testing & Commissioning",
    desc: "Verification, balancing, and handover documentation tied to measurable performance targets.",
    icon: CheckCircle2,
  },
  {
    tag: "Lower Lifecycle Costs",
    title: "Preventive Maintenance",
    desc: "Planned service programs to reduce downtime and extend equipment life across your portfolio.",
    icon: ThermometerSun,
  },
  {
    tag: "Audit-Friendly",
    title: "Compliance Support",
    desc: "Coordination for inspections, safety accreditation renewals, and facility audit readiness.",
    icon: ShieldCheck,
  },
];

const stats = [
  { label: "Projects Delivered (Last 12 Months)", value: "48+", delta: "+12%" },
  { label: "Average Commissioning Turnaround", value: "3–5 wks", delta: "-18%" },
  { label: "Planned Maintenance SLA Coverage", value: "92%", delta: "+6%" },
  { label: "Energy Savings (Typical HVAC Upgrades)", value: "10–22%", delta: "+5%" },
  { label: "Rework Reduction (QA/QC)", value: "25%", delta: "-25%" },
  { label: "Safety Record (Incident Rate)", value: "Low", delta: "Stable" },
];

const chartData = [
  { q: "Q1", rate: 78 },
  { q: "Q2", rate: 85 },
  { q: "Q3", rate: 68 },
  { q: "Q4", rate: 74 },
  { q: "Q5", rate: 90 },
  { q: "Q6", rate: 82 },
  { q: "Q7", rate: 95 },
  { q: "Q8", rate: 91 },
];

const testimonials = [
  {
    name: "Facilities Director",
    org: "Logistics Hub",
    quote:
      "Clear documentation, tight site coordination, and dependable commissioning. The system runs exactly to spec.",
  },
  {
    name: "Project Manager",
    org: "Corporate Office Tower",
    quote:
      "Professional engineering support and responsive maintenance planning. Communication stayed consistent from kickoff to handover.",
  },
  {
    name: "Operations Lead",
    org: "Retail Chain",
    quote:
      "Fast retrofit scheduling and clean handover. The HVAC upgrade reduced complaints and improved comfort immediately.",
  },
];

const serviceTypes = ["Airconditioning", "Fire Protection", "Plumbing", "Others"];

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
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: GREEN }}>
            Industrial-grade Mechanical Contracting for B2B
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            Design • Install • Maintain — engineered for safety, efficiency, and compliance
            across commercial facilities.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/portfolio"
              className="px-5 py-2.5 rounded-md border font-semibold text-sm"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              View Portfolio
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
            {["Design-Build", "MEP Engineering", "Maintenance"].map((t) => (
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

      {/* Core Services */}
      <section id="services" className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>
            Core Services
          </h2>
          <p className="text-center text-[#5B6660] mt-2 max-w-xl mx-auto">
            Built to support complex sites with dependable field execution and clear engineering
            documentation.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {coreServices.map(({ icon: Icon, title, eyebrow, desc }) => (
              <div key={title} className="text-center">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: GREEN_LIGHT }}
                >
                  <Icon className="w-7 h-7" style={{ color: GREEN }} />
                </div>
                <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                <p className="text-xs text-[#7A847E] mt-1">{eyebrow}</p>
                <p className="mt-3 text-sm font-semibold text-[#2B342E]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>What We Deliver</h2>
              <p className="text-[#5B6660] mt-2 max-w-lg">
                A streamlined process from feasibility to commissioning — so your project stays on
                schedule.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2.5 rounded-md border font-semibold text-sm flex items-center gap-2" style={{ borderColor: GREEN, color: GREEN }}>
                <Download className="w-4 h-4" /> Download Company Profile
              </button>
              <button className="px-4 py-2.5 rounded-md font-semibold text-sm text-white flex items-center gap-2" style={{ backgroundColor: GREEN }}>
                <PhoneCall className="w-4 h-4" /> Talk to an Engineer
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {deliverables.map(({ tag, title, desc, icon: Icon }) => (
              <div key={title} className="border border-[#E5E9E6] rounded-xl overflow-hidden">
                <div className="relative h-32 flex items-center justify-center" style={{ backgroundColor: GREEN_DARK }}>
                  <span className="absolute top-2 left-2 text-[10px] font-bold text-white bg-white/15 px-2 py-1 rounded">
                    {tag}
                  </span>
                  <Icon className="w-10 h-10 text-white/90" />
                </div>
                <div className="p-4">
                  <p className="font-bold">{title}</p>
                  <p className="text-sm text-[#5B6660] mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section id="portfolio" className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Portfolio Highlights</h2>
          <p className="text-[#5B6660] mt-2 max-w-xl mx-auto">
            A rotating selection of recent commercial HVAC &amp; mechanical projects (design,
            installation, and commissioning).
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="/portfolio" className="px-5 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>
              Schedule Site Visit
            </a>
            <a href="/portfolio" className="px-5 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>
              Explore All Projects
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-[#E5E9E6] rounded-xl p-6">
              <p className="font-bold" style={{ color: GREEN_DARK }}>Dynamic Slider: Project Gallery</p>
              <p className="text-xs text-[#8A938D] mt-1">Featured work • Modern facilities • Industrial systems</p>
              <p className="text-sm text-[#5B6660] mt-3">
                Reserved for a rotating carousel: each slide shows a project image, scope summary,
                and outcome.
              </p>
            </div>
            <div className="bg-white border border-[#E5E9E6] rounded-xl p-6">
              <p className="font-bold" style={{ color: GREEN_DARK }}>Consistent Proof of Performance</p>
              <p className="text-xs text-[#8A938D] mt-1">Clear scope + measurable results</p>
              <p className="text-sm text-[#5B6660] mt-3">
                Every slide includes service type (HVAC / Fire / Plumbing / Other), site category,
                and delivered results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Confidence */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>
            Engineering Confidence, Measured
          </h2>
          <p className="text-center text-[#5B6660] mt-2">
            Trust is built through repeatable quality and documented outcomes.
          </p>

          <div className="mt-10 border border-[#E5E9E6] rounded-xl p-5">
            <p className="font-bold text-sm" style={{ color: GREEN_DARK }}>Commissioning Success Over Time</p>
            <p className="text-xs text-[#8A938D] mb-3">Success Rate (%)</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="successFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={GREEN} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={GREEN} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="q" tick={{ fontSize: 12, fill: "#8A938D" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: "#8A938D" }} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="rate" stroke={GREEN} strokeWidth={2} fill="url(#successFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="border border-[#E5E9E6] rounded-xl p-5">
                <p className="text-xs text-[#8A938D]">{s.label}</p>
                <p className="text-2xl font-extrabold mt-1" style={{ color: GREEN_DARK }}>{s.value}</p>
                <p className="text-xs text-[#8A938D] mt-1">{s.delta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Client Feedback</h2>
          <p className="text-[#5B6660] mt-2 max-w-xl mx-auto">
            From facility managers to project directors — what they say after handover.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-[#E5E9E6] rounded-xl p-5">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#DDE3DF]" />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-[#8A938D]">{t.org}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: GREEN }} />
                  ))}
                </div>
                <p className="text-sm text-[#4B564F] mt-3">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Get a Quote for Your Next Project</h2>
          <p className="text-[#5B6660] mt-2">
            Share your scope and timeline — our engineers will respond with next steps and a
            tailored plan.
          </p>

          {submitted ? (
            <div className="mt-10 border border-[#E5E9E6] rounded-xl p-8">
              <CheckCircle2 className="w-8 h-8 mx-auto" style={{ color: GREEN }} />
              <p className="font-bold mt-3">Request received</p>
              <p className="text-sm text-[#5B6660] mt-1">Our team will reach out within 1–2 business days.</p>
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
              <div>
                <label className="text-xs font-semibold text-[#4B564F]">Service Needed</label>
                <input
                  name="serviceNeeded"
                  placeholder="Select your scope"
                  className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#4B564F]">Service Type</label>
                <div className="mt-1 flex flex-wrap gap-2">
                  {serviceTypes.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border"
                      style={
                        selectedServices.includes(s)
                          ? { backgroundColor: GREEN, color: "white", borderColor: GREEN }
                          : { borderColor: "#DDE3DF", color: "#4B564F" }
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-[#8A938D] mt-1">Choose one or more that fit</p>
              </div>
              <div className="sm:col-span-2 flex justify-center gap-3 mt-2">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-md border font-semibold text-sm flex items-center gap-2"
                  style={{ borderColor: GREEN, color: GREEN }}
                >
                  Contact Sales
                </button>
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

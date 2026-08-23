import React, { useState } from "react";
import {
  Search,
  Snowflake,
  Flame,
  Droplet,
  Layers,
  Wrench,
  ClipboardCheck,
  Gauge,
  ArrowRight,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GREEN, GREEN_DARK, GREEN_LIGHT, GRAY } from "../lib/theme.js";

const categories = [
  {
    icon: Snowflake,
    title: "Chilled Water Works",
    eyebrow: "HVAC, Hydronic Systems",
    desc: "Design support, installation, testing, balancing, and commissioning of chilled water and piping related systems.",
    tags: ["Chilled Water", "Piping", "Testing & Balancing"],
    footer: "Engineering Services",
  },
  {
    icon: Flame,
    title: "Fire Suppression",
    eyebrow: "Fire Protection Systems",
    desc: "Sprinkler and fire suppression system works — layout support, installation, inspections, and coordination.",
    tags: ["Sprinklers", "Fire Pumps", "Compliance"],
    footer: "Fire Protection Team",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    eyebrow: "Water & Drainage",
    desc: "Cold/hot water, drainage, and sanitary works with clean routing, leak testing, and clear documentation.",
    tags: ["Domestic Water", "Drainage", "QA Handover"],
    footer: "Plumbing Works",
  },
  {
    icon: Layers,
    title: "Multi-Discipline Builds",
    eyebrow: "Coordinated Execution",
    desc: "Integrated planning for complex projects — clear scope boundaries and coordinated site sequencing.",
    tags: ["Coordination", "Site Planning", "Schedule Control"],
    footer: "Project Delivery",
  },
];

const quickCards = [
  { icon: Snowflake, title: "Chilled Water Works", sub: "Hydronic systems & distribution", line: "Install • Test • Balance" },
  { icon: Flame, title: "Fire Suppression", sub: "Sprinklers & fire protection", line: "Design assist • Install • Commission" },
  { icon: Droplet, title: "Plumbing", sub: "Water supply & drainage", line: "Rough-in • Pressure test • Handover" },
];

const featured = [
  { tag: "HVAC", title: "Chilled Water Piping & Valves", desc: "Routing • Supports • Insulation review", icon: Snowflake },
  { tag: "Fire", title: "Fire Suppression System Works", desc: "Sprinkler layout • Pipe installation", icon: Flame },
  { tag: "Plumbing", title: "Domestic Water & Drainage", desc: "Cold/hot supply • Drain lines • Testing", icon: Droplet },
  { tag: "HVAC", title: "Hydronic Testing & Balancing", desc: "Flow verification • Performance checks", icon: Gauge },
  { tag: "Fire/QA", title: "Commissioning & Compliance Documentation", desc: "Handover forms • As-built support", icon: ClipboardCheck },
  { tag: "Plumbing", title: "Pressure Testing & QA Handover", desc: "Leak tests • Defect closure • Close-out", icon: Wrench },
];

const pieData = [
  { name: "Chilled Water Works", value: 45 },
  { name: "Fire Suppression", value: 30 },
  { name: "Plumbing", value: 25 },
];
const PIE_COLORS = [GREEN, "#4E8F6C", "#A6C7B4"];

const leadTimeData = [
  { name: "Chilled Water", weeks: 6 },
  { name: "Fire Suppr.", weeks: 4 },
  { name: "Plumbing", weeks: 3 },
  { name: "Multi-Disc.", weeks: 8 },
  { name: "Retrofits", weeks: 5 },
];

export default function Services() {
  const [filter, setFilter] = useState("All Services");

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: GREEN }}>
            Find the right service — fast.
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            Browse categories, compare typical scope, and request a quote in minutes.
          </p>
          <div className="mt-6 flex items-center gap-2 border border-[#DDE3DF] rounded-full px-4 py-2.5 max-w-sm">
            <Search className="w-4 h-4 text-[#8A938D] flex-shrink-0" />
            <input placeholder="Search services, codes, or locations" className="text-sm outline-none w-full placeholder:text-[#A3ABA5]" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>Schedule a Call</button>
            <button className="px-5 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>Request a Quote</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["All Services", "By Discipline", "By Building Type"].map((f) => (
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

      {/* Service Categories */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Service Categories</h2>
            <p className="text-[#5B6660] mt-2 max-w-xl mx-auto">
              Choose a discipline to view offerings, typical deliverables, and next steps.
            </p>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <button className="px-4 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>See Coverage Area</button>
              <button className="px-4 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>Download Capability Deck</button>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {categories.map(({ icon: Icon, title, eyebrow, desc, tags, footer }) => (
              <div key={title} className="bg-white border border-[#E5E9E6] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN_LIGHT }}>
                    <Icon className="w-6 h-6" style={{ color: GREEN }} />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                    <p className="text-xs text-[#8A938D]">{eyebrow}</p>
                  </div>
                </div>
                <p className="text-sm text-[#4B564F] mt-4">{desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>{t}</span>
                  ))}
                </div>
                <p className="text-xs text-[#8A938D] mt-4">{footer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Category Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Quick Category Cards</h2>
          <p className="text-center text-[#5B6660] mt-2">A fast overview with consistent padding and icon hierarchy.</p>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {quickCards.map(({ icon: Icon, title, sub, line }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: GREEN_LIGHT }}>
                  <Icon className="w-7 h-7" style={{ color: GREEN }} />
                </div>
                <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                <p className="text-xs text-[#8A938D] mt-1">{sub}</p>
                <p className="mt-3 text-sm font-semibold text-[#2B342E]">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Featured Services (By Discipline)</h2>
              <p className="text-[#5B6660] mt-2">Top offerings to help you shortlist scope quickly.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>Talk to an Estimator</button>
              <button className="px-4 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>Compare Services</button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featured.map(({ tag, title, desc, icon: Icon }) => (
              <div key={title} className="bg-white border border-[#E5E9E6] rounded-xl overflow-hidden">
                <div className="relative h-28 flex items-center justify-center" style={{ backgroundColor: GREEN_DARK }}>
                  <span className="absolute top-2 left-2 text-[10px] font-bold text-white bg-white/15 px-2 py-1 rounded">{tag}</span>
                  <Icon className="w-9 h-9 text-white/90" />
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

      {/* Service Mix Snapshot */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Service Mix Snapshot</h2>
          <p className="text-center text-[#5B6660] mt-2">A quick view of typical demand distribution by discipline.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-[#E5E9E6] rounded-xl p-5">
              <p className="font-bold text-sm" style={{ color: GREEN_DARK }}>Quarterly Intake by Discipline</p>
              <p className="text-xs text-[#8A938D] mb-2">Share (%)</p>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                      {pieData.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                {pieData.map((d, i) => (
                  <span key={d.name} className="text-xs flex items-center gap-1.5 text-[#5B6660]">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: PIE_COLORS[i] }} />
                    {d.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-[#E5E9E6] rounded-xl p-5">
              <p className="font-bold text-sm" style={{ color: GREEN_DARK }}>Typical Lead Times (Weeks)</p>
              <p className="text-xs text-[#8A938D] mb-2">Weeks</p>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={leadTimeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#8A938D" }} axisLine={false} tickLine={false} interval={0} angle={-15} textAnchor="end" height={50} />
                    <YAxis tick={{ fontSize: 12, fill: "#8A938D" }} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="weeks" fill={GREEN} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
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
                    <option>Chilled Water Works</option>
                    <option>Fire Suppression</option>
                    <option>Plumbing</option>
                    <option>Multi-Discipline Builds</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#4B564F]">Project Type</label>
                  <input placeholder="e.g., Residential, Commercial" className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]" />
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button type="button" className="px-4 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>Get a Sample Scope Checklist</button>
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

import React from "react";
import {
  HardHat,
  Compass,
  Handshake,
  Hammer,
  TrendingUp,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT } from "../lib/theme.js";

const milestones = [
  {
    year: "1996",
    title: "The Beginning",
    tags: ["1996", "Founding"],
    category: "Company Founder",
    desc: "Founded with a mission to build trust. Our founder started with one guiding belief: long-term relationships are built through consistent, honest work.",
  },
  {
    year: "2001",
    title: "Growing Beyond Local",
    tags: ["2001", "Expansion"],
    category: "Company Timeline",
    desc: "As demand increased, we expanded our team, refined our processes, and invested in training to expand our project capacity.",
  },
  {
    year: "2008",
    title: "Innovation & Systems",
    tags: ["2008", "Process"],
    category: "Operations",
    desc: "We introduced documented workflows, quality checkpoints, and a customer feedback loop turning field lessons into standard practice.",
  },
  {
    year: "2015",
    title: "People-First Culture",
    tags: ["2015", "Culture"],
    category: "People & Talent",
    desc: "Training, mentorship, and shared ownership. Our culture evolved to emphasize mentorship and empowerment across every crew.",
  },
  {
    year: "2020",
    title: "Sustainable Practices",
    tags: ["2020", "Sustainability"],
    category: "Sustainability Team",
    desc: "Responsibility in every decision. We strengthened sustainability practices across sourcing and delivery, focused on reducing waste.",
  },
  {
    year: "2024–Today",
    title: "Future Ready",
    tags: ["2024", "Modernization"],
    category: "Leadership",
    desc: "Better technology, same principles. Today, we continue improving how we work, using modern tools while preserving our core values.",
  },
];

const values = [
  { icon: Compass, title: "Clarity", desc: "Straightforward plans and honest updates" },
  { icon: Handshake, title: "Trust", desc: "Consistency you can count on" },
  { icon: Hammer, title: "Craft", desc: "Quality built into every step" },
  { icon: TrendingUp, title: "Improvement", desc: "Learning loops that drive better results" },
  { icon: Leaf, title: "Responsibility", desc: "Sustainable choices, practical impact" },
  { icon: ShieldCheck, title: "Accountability", desc: "Ownership from idea to delivery" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: GREEN }}>
            About Our Company
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            A legacy of craft, community, and continuous improvement since 1996.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>
              Meet the Founder
            </button>
            <button className="px-5 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>
              Explore Our Story
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-[#ECEFED] aspect-[4/3] flex items-center justify-center">
          <HardHat className="w-12 h-12 text-[#B7C0BA]" />
        </div>
      </section>

      {/* History */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Our History (1996–Today)</h2>
          <p className="text-center text-[#5B6660] mt-2 max-w-xl mx-auto">
            Six decades of milestones, expansion, and a refined way of working.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {milestones.map((m) => (
              <div key={m.title} className="bg-white border border-[#E5E9E6] rounded-xl p-6">
                <p className="font-bold" style={{ color: GREEN_DARK }}>{m.year} — {m.title}</p>
                <p className="text-xs text-[#8A938D] mt-1">{m.desc.split(".")[0]}.</p>
                <p className="text-sm text-[#4B564F] mt-3">{m.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {m.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#8A938D] mt-3">{m.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder bio teaser */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#ECEFED] flex-shrink-0" />
            <div>
              <p className="font-bold" style={{ color: GREEN_DARK }}>Founder Biography</p>
              <div className="flex gap-2 mt-1">
                <span className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>Since 1996</span>
                <span className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>Vision Builder</span>
              </div>
              <p className="text-sm text-[#5B6660] mt-2 max-w-md">
                A structured look at the founder's biography and how it shaped the company's approach.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="px-4 py-2.5 rounded-md border font-semibold text-sm" style={{ borderColor: GREEN, color: GREEN }}>
              View Milestones
            </button>
            <button className="px-4 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>
              Read Bio
            </button>
          </div>
        </div>
      </section>

      {/* Founder detail */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Founder — Biography &amp; Approach</h2>
            <p className="text-[#5B6660] mt-3">
              From first job site to company-wide standard: how one set of values shaped the way
              every project gets delivered.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="bg-white border border-[#E5E9E6] rounded-xl p-5 flex gap-4">
              <div className="w-16 h-16 rounded-lg bg-[#ECEFED] flex-shrink-0" />
              <div>
                <p className="font-bold">Founder &amp; Lead Visionary</p>
                <p className="text-sm text-[#5B6660] mt-1">
                  Since establishing the company in 1996, the founder has championed a practical,
                  values-led approach to mechanical contracting.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Integrity", "Craft", "Consistency"].map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#E5E9E6] rounded-xl p-5 flex gap-4">
              <div className="w-16 h-16 rounded-lg bg-[#ECEFED] flex-shrink-0" />
              <div>
                <p className="font-bold">How We Work</p>
                <p className="text-sm text-[#5B6660] mt-1">
                  A repeatable method refined over decades: define goals clearly, prototype and
                  iterate, then deliver against measured outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Quality Care", "Customer Feedback", "Continuous Improvement"].map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ backgroundColor: GREEN_LIGHT, color: GREEN_DARK }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: GREEN }}>Mission &amp; Vision</p>
          <p className="mt-4 text-sm text-[#4B564F]">
            <span className="font-bold" style={{ color: GREEN_DARK }}>Mission: </span>
            To deliver dependable solutions through thoughtful craftsmanship, transparent
            communication, and continuous improvement — building long-term trust with every
            client.
          </p>
          <p className="mt-4 text-sm text-[#4B564F]">
            <span className="font-bold" style={{ color: GREEN_DARK }}>Vision: </span>
            To become the most respected partner in our industry by combining innovation with
            enduring values, creating positive impact for people, communities, and the future.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>Values That Guide Us</h2>
          <p className="text-center text-[#5B6660] mt-2">Clean, grid-aligned principles that scale with every project.</p>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
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
    </>
  );
}

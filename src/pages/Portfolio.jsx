import React, { useState } from "react";
import {
  Factory,
  Wrench,
  LayoutGrid,
  MapPin,
  BookOpen,
  Download,
  Filter,
  MousePointerClick,
} from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT, GRAY } from "../lib/theme.js";

const sidebarLinks = [
  { icon: Factory, label: "Industries" },
  { icon: Wrench, label: "Capabilities" },
  { icon: LayoutGrid, label: "Project Types" },
  { icon: MapPin, label: "Regions" },
  { icon: BookOpen, label: "Case Studies" },
];

const filters = ["All", "HVAC", "Electrical", "Sanitary"];

const projects = [
  { title: "North Plant HVAC Retrofit", location: "Muntinlupa, Laguna", category: "HVAC" },
  { title: "Warehouse Electrical Upgrade", location: "Cavite Economic Zone", category: "Electrical" },
  { title: "Industrial Sanitary Line Expansion", location: "Valenzuela City", category: "Sanitary" },
  { title: "Chilled Water System Rework", location: "Quezon City", category: "HVAC" },
  { title: "Control Power & Lighting Distribution", location: "Taguig, BGC", category: "Electrical" },
  { title: "Sanitary Sewer Tie-in (Phase 2)", location: "Biñan, Laguna", category: "Sanitary" },
  { title: "Air Handling Unit Modernization", location: "Cebu Business Park", category: "HVAC" },
  { title: "Grounding System Renewal", location: "Sta. Rosa, Laguna", category: "Electrical" },
  { title: "Backflow & Distribution Maintenance", location: "Pasig City", category: "Sanitary" },
];

const CAT_COLORS = {
  HVAC: GREEN,
  Electrical: "#8A6D1F",
  Sanitary: "#1F6E8A",
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const visible = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-5 pt-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar - desktop only */}
      <aside className="hidden md:block w-48 flex-shrink-0">
        <nav className="sticky top-20 flex flex-col gap-1">
          {sidebarLinks.map(({ icon: Icon, label }) => (
            <a key={label} href="#gallery" className="flex items-center gap-2 text-sm font-medium text-[#4B564F] hover:text-[#1B5E3F] px-3 py-2 rounded-md hover:bg-[#F7F9F7]">
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Mobile category row */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 -mx-1 px-1">
          {sidebarLinks.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-[#4B564F] border border-[#DDE3DF] rounded-full px-3 py-1.5 flex-shrink-0">
              <Icon className="w-3.5 h-3.5" />
              {label}
            </span>
          ))}
        </div>

        {/* Hero */}
        <section className="pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight" style={{ color: GREEN }}>
              Industrial Mechanical Projects
            </h1>
            <p className="mt-4 text-[#4B564F] text-base max-w-md">
              Explore HVAC, Electrical, and Sanitary work with a visual project gallery. Select a
              filter to view project title and location.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-md border font-semibold text-sm flex items-center gap-2" style={{ borderColor: GREEN, color: GREEN }}>
                <Download className="w-4 h-4" /> Download Portfolio
              </button>
              <a href="/#quote" className="px-5 py-2.5 rounded-md font-semibold text-sm text-white" style={{ backgroundColor: GREEN }}>
                Request a Quote
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={activeFilter === f ? { backgroundColor: GREEN, color: "white", borderColor: GREEN } : { borderColor: "#DDE3DF", color: "#4B564F" }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-[#ECEFED] aspect-[4/3] flex items-center justify-center">
            <Filter className="w-10 h-10" style={{ color: GRAY }} />
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="pb-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Project Gallery</h2>
            <p className="text-[#5B6660] mt-2 max-w-xl mx-auto">
              Filter by trade above. Tap or hover a tile to see project title and location.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <div
                key={p.title}
                onMouseEnter={() => setHovered(p.title)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-xl overflow-hidden border border-[#E5E9E6] aspect-[4/3] group cursor-pointer"
                style={{ backgroundColor: "#ECEFED" }}
              >
                <span
                  className="absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-1 rounded z-10"
                  style={{ backgroundColor: CAT_COLORS[p.category] }}
                >
                  {p.category}
                </span>
                <div className="w-full h-full flex items-center justify-center">
                  <LayoutGrid className="w-9 h-9" style={{ color: GRAY }} />
                </div>
                <div
                  className="hidden sm:flex absolute inset-0 flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity"
                  style={{ opacity: hovered === p.title ? 1 : 0 }}
                >
                  <p className="text-white font-bold text-sm">{p.title}</p>
                  <p className="text-white/80 text-xs">{p.location} • {p.category}</p>
                </div>
                {/* Always-visible caption for touch devices */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-3 sm:hidden">
                  <p className="font-bold text-xs">{p.title}</p>
                  <p className="text-[10px] text-[#8A938D]">{p.location} • {p.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="pb-16">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>How the Gallery Works</h2>
          <p className="text-center text-[#5B6660] mt-2 max-w-xl mx-auto">
            Fast scanning for industrial teams — filter by trade, then check each tile for project
            title and location.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="border border-[#E5E9E6] rounded-xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN_LIGHT }}>
                <Filter className="w-6 h-6" style={{ color: GREEN }} />
              </div>
              <div>
                <p className="font-bold" style={{ color: GREEN_DARK }}>1) Filter by Trade</p>
                <p className="text-sm text-[#5B6660] mt-1">Use HVAC, Electrical, and Sanitary tabs to instantly refine the project grid.</p>
              </div>
            </div>
            <div className="border border-[#E5E9E6] rounded-xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: GREEN_LIGHT }}>
                <MousePointerClick className="w-6 h-6" style={{ color: GREEN }} />
              </div>
              <div>
                <p className="font-bold" style={{ color: GREEN_DARK }}>2) Hover or Tap for Project Info</p>
                <p className="text-sm text-[#5B6660] mt-1">Reveals an overlay with project title, location, and scope highlights.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

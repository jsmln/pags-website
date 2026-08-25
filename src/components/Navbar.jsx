import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { GREEN, NAV_LINKS } from "../lib/theme.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `hover:text-[#1B5E3F] ${isActive ? "font-bold" : "font-medium"}`;

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-[#E5E9E6]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: GREEN }}
          >
            <img src="/PAGS.png" alt="PAGS" className="w-7 h-7 object-contain" />
          </div>
          <div className="leading-tight">
            <p className="text-[13px] font-extrabold tracking-tight" style={{ color: GREEN }}>
              PACIFIC AIRCONDITIONING
            </p>
            <p className="text-[11px] font-semibold text-[#4B564F] -mt-0.5">
              & GENERAL SERVICES, INC.
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#2B342E]">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              style={({ isActive }) => (isActive ? { color: GREEN } : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/#quote" className="hover:text-[#1B5E3F] font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2 border border-[#DDE3DF] rounded-full px-3 py-1.5">
          <Search className="w-4 h-4 text-[#8A938D]" />
          <input
            placeholder="Search in site"
            className="text-sm outline-none placeholder:text-[#A3ABA5] w-32"
          />
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-3 text-sm border-t border-[#E5E9E6]">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="pt-3 font-medium"
              style={({ isActive }) => (isActive ? { color: GREEN, fontWeight: 700 } : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/#quote" className="font-medium" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

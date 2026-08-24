import React from "react";
import { Hotel, Factory, Building2, Home as HomeIcon, Building, Globe2, PhoneCall } from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT, GRAY } from "../lib/theme.js";
import { PROJECT_SECTORS, CONTACT } from "../lib/companyData.js";

const SECTOR_ICONS = [Hotel, Factory, Building2, HomeIcon, Building, Globe2];

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-8">
      {/* Hero */}
      <section className="pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight" style={{ color: GREEN }}>
            Our Projects
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            A wide range of professional services delivered across six sectors — from
            hospitality to international infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${CONTACT.telephones[1].replace(/[^\d+]/g, "")}`}
              className="px-5 py-2.5 rounded-md font-semibold text-sm text-white flex items-center gap-2"
              style={{ backgroundColor: GREEN }}
            >
              <PhoneCall className="w-4 h-4" /> Call Us Now
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-[#ECEFED] aspect-[4/3] flex items-center justify-center">
          <Building2 className="w-10 h-10" style={{ color: GRAY }} />
        </div>
      </section>

      {/* Sectors (real, from pagsinc.com/projects) */}
      <section className="pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Sectors We Serve</h2>
          <p className="text-[#5B6660] mt-2 max-w-xl mx-auto">
            We provide a wide range of professional services across these industries.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_SECTORS.map(({ title, desc }, i) => {
            const Icon = SECTOR_ICONS[i % SECTOR_ICONS.length];
            return (
              <div key={title} className="border border-[#E5E9E6] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: GREEN_LIGHT }}>
                  <Icon className="w-6 h-6" style={{ color: GREEN }} />
                </div>
                <p className="font-bold" style={{ color: GREEN_DARK }}>{title}</p>
                <p className="text-sm text-[#5B6660] mt-2">{desc}</p>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-[#8A938D] text-center mt-8 max-w-lg mx-auto">
          Individual project case studies (client names, sites, and outcomes) aren't yet published
          — add real examples here as they're documented, ideally with photos and measurable
          results, since that's what procurement and facilities teams specifically look for.
        </p>
      </section>

      {/* CTA */}
      <section className="pb-16 text-center border-t border-[#E5E9E6] pt-16">
        <h2 className="text-2xl font-extrabold" style={{ color: GREEN }}>
          Interested in our services? We're here to help!
        </h2>
        <p className="text-[#5B6660] mt-2 max-w-lg mx-auto">
          Let us know what you need and we'll do our best to help.
        </p>
        <a
          href={`tel:${CONTACT.telephones[1].replace(/[^\d+]/g, "")}`}
          className="inline-block mt-5 px-5 py-2.5 rounded-md font-semibold text-sm text-white"
          style={{ backgroundColor: GREEN }}
        >
          Call Us Now
        </a>
      </section>
    </div>
  );
}

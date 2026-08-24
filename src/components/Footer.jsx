import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";
import { GREEN } from "../lib/theme.js";
import { COMPANY, CONTACT } from "../lib/companyData.js";

/**
 * Shared site footer. Pass `note` to override the default tagline
 * for pages that want page-specific footer copy.
 */
export default function Footer({ note }) {
  return (
    <footer className="border-t border-[#E5E9E6] py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-[#4B564F]">
          <div>
            <p className="font-bold" style={{ color: GREEN }}>{COMPANY.legalName}</p>
            <p className="mt-2 text-[#5B6660]">
              {note ||
                "Mechanical, electrical, and ventilation engineering services — design, fabrication, planning, and installation."}
            </p>
            <div className="flex gap-3 mt-4">
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-[#8A938D] hover:text-[#1B5E3F]" />
              </a>
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-[#8A938D] hover:text-[#1B5E3F]" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold" style={{ color: GREEN }}>Contact</p>
            <div className="mt-2 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#8A938D]" />
                {CONTACT.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#8A938D]" />
                {CONTACT.mobiles.join(" / ")}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#8A938D]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#1B5E3F]">{CONTACT.email}</a>
              </p>
            </div>
          </div>

          <div>
            <p className="font-bold" style={{ color: GREEN }}>Business Hours</p>
            <p className="mt-2 flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0 text-[#8A938D]" />
              {CONTACT.businessHours}
            </p>
            <p className="mt-3 text-xs text-[#8A938D]">
              Landline: {CONTACT.telephones.join(" / ")}
            </p>
          </div>
        </div>

        <div className="border-t border-[#E5E9E6] mt-8 pt-6 text-center">
          <p className="text-xs text-[#8A938D]">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2 text-xs text-[#8A938D]">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

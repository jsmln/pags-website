import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT } from "../lib/theme.js";
import { CONTACT, DEPARTMENT_CONTACTS, LOCATIONS } from "../lib/companyData.js";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [activeLocation, setActiveLocation] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const isHighlighted = Boolean(searchParams.get("highlight"));

  const loc = LOCATIONS[activeLocation];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`;
  const directionsHref = loc.lat
    ? `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`;

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-10 text-center">
        <h1 className={`text-4xl md:text-5xl font-extrabold leading-tight ${isHighlighted ? "rounded-md px-2 -mx-2 shadow-[0_0_0_3px_#E7F1EA]" : ""}`} style={{ color: GREEN }}>
          Get In Touch
        </h1>
        <p className="mt-4 text-[#4B564F] text-base max-w-xl mx-auto">
          Reach out about a project, a quote, or anything else — our team responds during
          business hours.
        </p>
      </section>

      {/* Quick contact cards */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="border border-[#E5E9E6] rounded-xl p-5">
            <Phone className="w-5 h-5" style={{ color: GREEN }} />
            <p className="font-bold text-sm mt-2">Call or Text</p>
            <p className="text-sm text-[#5B6660] mt-1">{CONTACT.mobiles.join(" / ")}</p>
            <p className="text-xs text-[#8A938D] mt-1">Landline: {CONTACT.telephones.join(" / ")}</p>
          </div>
          <div className="border border-[#E5E9E6] rounded-xl p-5">
            <Mail className="w-5 h-5" style={{ color: GREEN }} />
            <p className="font-bold text-sm mt-2">Email</p>
            <a href={`mailto:${CONTACT.email}`} className="text-sm hover:underline block mt-1" style={{ color: GREEN }}>
              {CONTACT.email}
            </a>
          </div>
          <div className="border border-[#E5E9E6] rounded-xl p-5">
            <Clock className="w-5 h-5" style={{ color: GREEN }} />
            <p className="font-bold text-sm mt-2">Business Hours</p>
            <p className="text-sm text-[#5B6660] mt-1">{CONTACT.businessHours}</p>
          </div>
        </div>
      </section>

      {/* Locations + Map */}
      <section className="bg-[#F7F9F7] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>
            Our Locations
          </h2>
          <p className="text-center text-[#5B6660] mt-2 max-w-xl mx-auto">
            Head office, fabrication shop, and warehouse — select one to view it on the map.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {LOCATIONS.map((l, i) => (
              <button
                key={l.label}
                onClick={() => setActiveLocation(i)}
                className="text-sm font-medium px-4 py-2 rounded-full border"
                style={
                  activeLocation === i
                    ? { backgroundColor: GREEN, color: "white", borderColor: GREEN }
                    : { borderColor: "#DDE3DF", color: "#4B564F" }
                }
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white border border-[#E5E9E6] rounded-xl p-6 h-fit">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: GREEN_LIGHT }}>
                <MapPin className="w-5 h-5" style={{ color: GREEN }} />
              </div>
              <p className="font-bold" style={{ color: GREEN_DARK }}>{loc.label}</p>
              <p className="text-sm text-[#5B6660] mt-2">{loc.address}</p>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: GREEN }}
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>

            <div className="md:col-span-2 rounded-xl overflow-hidden border border-[#E5E9E6] aspect-[4/3] md:aspect-auto md:h-[360px]">
              <iframe
                title={`Map showing ${loc.label}`}
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Department contacts */}
      <section className="max-w-6xl mx-auto px-5 py-12">
        <div className="border-t-4 pt-6" style={{ borderColor: GREEN }}>
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>
            Department Contacts
          </h2>
          <div className="mt-6 overflow-x-auto border border-[#DDE3DF] rounded-lg">
            <table className="w-full min-w-[680px] text-sm text-center">
              <thead className="text-white" style={{ backgroundColor: GREEN }}>
                <tr>
                  <th className="px-4 py-3 font-bold">Department</th>
                  <th className="px-4 py-3 font-bold">Email</th>
                  <th className="px-4 py-3 font-bold">Concern</th>
                </tr>
              </thead>
              <tbody>
                {DEPARTMENT_CONTACTS.map((contact, index) => (
                  <tr key={contact.department} className={index % 2 ? "bg-[#F7F9F7]" : "bg-white"}>
                    <td className="border-t border-[#DDE3DF] px-4 py-2.5 font-medium">{contact.department}</td>
                    <td className="border-t border-[#DDE3DF] px-4 py-2.5">
                      <a href={`mailto:${contact.email}`} className="hover:underline" style={{ color: GREEN }}>
                        {contact.email}
                      </a>
                    </td>
                    <td className="border-t border-[#DDE3DF] px-4 py-2.5">{contact.concern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>
            Send Us a Message
          </h2>
          <p className="text-center text-[#5B6660] mt-2">
            We'll get back to you as soon as possible.
          </p>

          {submitted ? (
            <div className="mt-8 border border-[#E5E9E6] rounded-xl p-8 text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto" style={{ color: GREEN }} />
              <p className="font-bold mt-3">Thank you for contacting us</p>
              <p className="text-sm text-[#5B6660] mt-1">We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form
              className="mt-8 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#4B564F]">Name</label>
                  <input required name="name" type="text" autoComplete="name" minLength={2} maxLength={80} pattern="[\p{L}][\p{L} .'-]{1,79}" placeholder="e.g., Maria Santos" title="Enter a name using letters, spaces, apostrophes, or hyphens." className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#4B564F]">Email</label>
                  <input required name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#4B564F]">Message</label>
                <textarea
                  required
                  name="message"
                  minLength={10}
                  maxLength={2000}
                  placeholder="Tell us how we can help, including your project details."
                  rows={5}
                  className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F] resize-none"
                />
              </div>
              <p className="text-xs text-[#8A938D]">
                By submitting, you agree to be contacted about your inquiry.
              </p>
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-md font-semibold text-sm text-white"
                  style={{ backgroundColor: GREEN }}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}

          <div className="flex justify-center gap-5 mt-10">
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#5B6660] hover:text-[#1B5E3F]">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href={CONTACT.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#5B6660] hover:text-[#1B5E3F]">
              <Youtube className="w-4 h-4" /> YouTube
            </a>
            <a href={CONTACT.waze} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#5B6660] hover:text-[#1B5E3F]">
              <Navigation className="w-4 h-4" /> Waze
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
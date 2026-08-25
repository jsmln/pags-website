import React, { useState } from "react";
import { Briefcase, Mail, MapPin, ChevronDown, CheckCircle2, Send } from "lucide-react";
import { GREEN, GREEN_DARK, GREEN_LIGHT, GRAY } from "../lib/theme.js";
import { JOB_OPENINGS, APPLICATION_INSTRUCTIONS, CONTACT } from "../lib/companyData.js";

export default function Careers() {
  const [openJob, setOpenJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="hero-section max-w-6xl mx-auto px-5 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: GREEN }}>
            Careers
          </h1>
          <p className="mt-4 text-[#4B564F] text-base max-w-md">
            Join a team of engineers, supervisors, and installers working on mechanical,
            electrical, and ventilation projects across the Philippines.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#openings"
              className="px-5 py-2.5 rounded-md font-semibold text-sm text-white"
              style={{ backgroundColor: GREEN }}
            >
              View Open Positions
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-white aspect-[4/3] flex items-center justify-center">
          <Briefcase className="w-12 h-12" style={{ color: GRAY }} />
        </div>
      </section>

      {/* Job listings */}
      <section id="openings" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-extrabold text-center" style={{ color: GREEN }}>
            Current Openings
          </h2>
          <p className="text-center text-[#5B6660] mt-2">
            Tap a role to see the qualifications we're looking for.
          </p>

          <div className="mt-10 space-y-4">
            {JOB_OPENINGS.map((job) => {
              const isOpen = openJob === job.title;
              return (
                <div key={job.title} className="bg-white border border-[#E5E9E6] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenJob(isOpen ? null : job.title)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="font-bold" style={{ color: GREEN_DARK }}>{job.title}</p>
                      {job.subtitle && <p className="text-xs text-[#8A938D] mt-0.5">{job.subtitle}</p>}
                    </div>
                    <ChevronDown
                      className="w-5 h-5 flex-shrink-0 text-[#8A938D] transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-xs font-semibold text-[#4B564F] mb-2">Qualifications</p>
                      <ul className="space-y-1.5">
                        {job.qualifications.map((q) => (
                          <li key={q} className="text-sm text-[#4B564F] flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: GREEN }} />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>How to Apply</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-left">
            <div className="border border-[#E5E9E6] rounded-xl p-5 flex gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" style={{ color: GREEN }} />
              <div>
                <p className="font-bold text-sm">Email your resume</p>
                <a href={`mailto:${APPLICATION_INSTRUCTIONS.email}`} className="text-sm text-[#5B6660] hover:text-[#1B5E3F]">
                  {APPLICATION_INSTRUCTIONS.email}
                </a>
              </div>
            </div>
            <div className="border border-[#E5E9E6] rounded-xl p-5 flex gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: GREEN }} />
              <div>
                <p className="font-bold text-sm">Apply in person</p>
                <p className="text-sm text-[#5B6660]">{CONTACT.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply now form */}
      <section id="apply" className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: GREEN }}>Apply Now</h2>
          <p className="text-[#5B6660] mt-2">Send us your details and we'll get back to you.</p>

          {submitted ? (
            <div className="mt-8 bg-white border border-[#E5E9E6] rounded-xl p-8">
              <CheckCircle2 className="w-8 h-8 mx-auto" style={{ color: GREEN }} />
              <p className="font-bold mt-3">Application received</p>
              <p className="text-sm text-[#5B6660] mt-1">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form
              className="mt-8 text-left grid sm:grid-cols-2 gap-5 bg-white border border-[#E5E9E6] rounded-xl p-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label className="text-xs font-semibold text-[#4B564F]">Name</label>
                <input required name="name" className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#4B564F]">Position</label>
                <select required name="position" defaultValue="" className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F] bg-white">
                  <option value="" disabled>Select a position</option>
                  {JOB_OPENINGS.map((j) => (
                    <option key={j.title}>{j.title}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-[#4B564F]">Email</label>
                <input required type="email" name="email" className="mt-1 w-full border border-[#DDE3DF] rounded-md px-3 py-2 text-sm outline-none focus:border-[#1B5E3F]" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-[#4B564F]">CV / Resume</label>
                <input required type="file" name="resume" accept=".pdf,.doc,.docx" className="mt-1 w-full text-sm text-[#4B564F] file:mr-3 file:px-3 file:py-1.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#E7F1EA]" style={{ color: GREEN_DARK }} />
                <p className="text-[10px] text-[#8A938D] mt-1">Upload your resume here</p>
              </div>
              <div className="sm:col-span-2 flex justify-center mt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-md font-semibold text-sm text-white flex items-center gap-2"
                  style={{ backgroundColor: GREEN }}
                >
                  Submit Application <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

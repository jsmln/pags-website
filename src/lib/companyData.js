// Verified facts sourced from https://www.pagsinc.com (fetched Aug 2026).
// Keep this file as the single source of truth for factual company content —
// update here if the live site changes, rather than editing individual pages.

export const COMPANY = {
  legalName: "Pacific Airconditioning and General Services, Inc.",
  shortName: "PAGSI",
  founder: "Roy S. Abrigo",
  founderTitle: "President / CEO",
  // The site's homepage states 1996 ("born at the height of the Philippine
  // recovery in 1996"); the About page states 1997 ("Established in 1997").
  // Confirm the correct year internally before publishing — using 1996 here
  // since it's the more frequently referenced figure.
  foundedYear: 1996,
};

export const CONTACT = {
  address: "PAGSINC Building, 20A Bulusan St, Brgy. Mauway, Mandaluyong City, 1550 Philippines",
  telephones: ["(02) 8 359-6829", "(02) 8 359-7226", "(02) 8 359-9426"],
  mobiles: ["+639 063 549 519", "+639 162 222 136"],
  email: "pagsinc_2013@pagsinc.com",
  hrEmail: "hr_unit@pagsinc.com",
  businessHours: "Monday – Saturday, 8:00 AM to 5:00 PM",
  facebook: "https://www.facebook.com/PAGS.Inc",
  youtube: "https://www.youtube.com/channel/UCDY3Mpk_UPsR2WMlLKpwhFw",
  waze: "https://www.waze.com/ul?ll=14.5778,121.04618",
};

export const LOCATIONS = [
  {
    label: "Head Office",
    address: CONTACT.address,
    lat: 14.5778,
    lng: 121.04618,
  },
];

// Real service breakdown from pagsinc.com/services
export const SERVICE_GROUPS = [
  {
    numeral: "01",
    title: "Airconditioning and Ventilation System",
    items: ["Chilled Water Works", "Condenser Water Works", "Refrigerant Piping Works", "Ducting Works", "Piping Works"],
  },
  {
    numeral: "02",
    title: "Fire Protection System",
    items: ["Fire Protection Works", "Fire Suppression FM-200"],
  },
  {
    numeral: "03",
    title: "Plumbing and Sanitary System",
    items: ["Plumbing Works", "Sanitary Works"],
  },
  {
    numeral: "04",
    title: "Others",
    items: ["Process Piping Works", "Oil and Gas Piping Works", "Electrical Works", "Refrigeration Works"],
  },
];

// Real project/industry categories from pagsinc.com/projects
// Note: the live site does not publish individual named project case studies
// (client, location, scope) — only these six sector categories. Do not invent
// specific project names or locations; use real ones once the company
// provides them.
export const PROJECT_SECTORS = [
  {
    title: "Hospitality Industry",
    desc: "Casino hotels and lodging establishments — mechanical, fire protection, and plumbing works for guest-facing facilities.",
  },
  {
    title: "Industrial",
    desc: "Manufacturing, production, assembly, and processing facilities working with raw and finished materials.",
  },
  {
    title: "Offices and BPO",
    desc: "Front-office and back-office business process outsourcing facilities.",
  },
  {
    title: "Residential",
    desc: "Living accommodations, from individual residences to multi-unit developments.",
  },
  {
    title: "Commercial",
    desc: "Buildings developed for commercial or public purposes.",
  },
  {
    title: "International and Infrastructure",
    desc: "Infrastructure and cross-border project support, including planning, coordination, and quality assurance.",
  },
];

// Real leadership team from pagsinc.com/about
export const LEADERSHIP = [
  { name: "Roy S. Abrigo", title: "President / CEO" },
  { name: "Maria Katrina T. Abrigo", title: "Director / Treasurer" },
  { name: "Atty. Maximillian P. King", title: "Corporate Secretary" },
  { name: "Madeline Monica T. Bustillo", title: "Director / VP – Finance & Admin" },
  { name: "Zosimo G. Castillo", title: "Director" },
  { name: "Engr. Leonard C. Tabien", title: "VP – Commercial" },
  { name: "Engr. Rogelio G. Liwanag", title: "VP – Sales & Operations" },
];

// Real core values from pagsinc.com/about (paraphrased, not quoted verbatim)
export const CORE_VALUES = [
  {
    title: "Pride",
    desc: "Employees carry the hardworking, patient reputation Filipino workers are known for worldwide.",
  },
  {
    title: "Advancement",
    desc: "Continuous skills-enhancement programs for employees, plus support for material and strategy innovation.",
  },
  {
    title: "Good Leadership",
    desc: "Leadership stays current on industry practices, guides the team fairly, and leads by example.",
  },
  {
    title: "Social Responsibility",
    desc: "Compliance with government regulations on human dignity and environmental protection, plus community giving.",
  },
];

// Real vision/mission (paraphrased, not quoted verbatim)
export const VISION =
  "To become one of the leading, most trusted air conditioning companies providing installation, maintenance, and repair services to clients locally and internationally.";
export const MISSION =
  "To deliver quality service cost-effectively, built on the company's greatest asset — its workforce.";

// Real job openings from pagsinc.com/careers (fetched Aug 2026).
// Qualifications are trimmed to the most relevant bullets — check the live
// site before publishing in case listings have changed or closed.
export const JOB_OPENINGS = [
  {
    title: "Accounting Staff",
    subtitle: "Female",
    qualifications: [
      "College degree, preferably BS Accountancy, Finance, or equivalent",
      "At least 2–3 years of experience",
      "Systematic approach to problem solving with good oral and written communication skills",
      "Computer literate",
    ],
  },
  {
    title: "Project In Charge",
    qualifications: [
      "Mechanical Engineering graduate or equivalent experience",
      "Minimum of 3 years experience in the industry",
      "Proficient project management skills",
      "Proficient in evaluating shop drawings and Safety Procedure knowledge",
      "Strong human relations and problem-solving skills",
    ],
  },
  {
    title: "TAB Engineer (Testing and Balancing)",
    qualifications: [
      "Licensed Mechanical Engineer",
      "Experience in Testing and Commissioning on Fans",
      "Experience with Blowers and Airflow Reading",
      "Experience in Chiller and Cooling Tower operation",
    ],
  },
  {
    title: "Project Engineer",
    qualifications: [
      "Mechanical Engineering graduate or equivalent experience",
      "Prepares material and fabrication requests, progress reports, and work schedules",
      "Supervises installation works and subcontractor performance",
      "Reports directly to the Project Manager or Project-in-Charge",
    ],
  },
  {
    title: "AutoCAD Operator",
    qualifications: [
      "Bachelor's/College Degree in Mechanical Engineering, Architecture, Computer Science/Drafting, or equivalent",
      "Proficient in AutoCAD/CAD software (2D, 3D)",
      "At least 1 year of related work experience",
      "Creates and maintains shop drawings and as-built plans",
    ],
  },
  {
    title: "Marketing Assistant",
    qualifications: [
      "Collaborates with Marketing Managers, internal teams, clients, and partners on strategy",
      "Creates marketing materials — white papers, case studies, presentations",
      "Organizes market research and maintains a marketing database",
      "Provides administrative support to the marketing and sales team",
    ],
  },
];

export const APPLICATION_INSTRUCTIONS = {
  email: "hr_unit@pagsinc.com",
  inPerson:
    "Applicants may also apply personally at 20A PAGS INC. Building Bulusan St. Brgy. Mauway, Mandaluyong City.",
};

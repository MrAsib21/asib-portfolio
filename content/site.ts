export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  location: string;
  timezone: string;
  utcOffset: number; // +6 for Bangladesh
  tagline: string;
  elevatorPitch: string;
  workStatus: string;
  email: string;
  bookingUrl: string;
  github: string;
  linkedin: string;
  twitter?: string;
  navItems: { label: string; href: string; deskObjectName: string }[];
  workingOverlap: {
    region: string;
    localWindow: string;
    overlapHours: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Asib Mahmud",
  title: "Asib Mahmud — Software Engineer & Web Developer",
  role: "Software Engineering Graduate & Independent Front-End/Web Engineer",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka",
  utcOffset: 6,
  tagline: "I build fast web systems, pragmatic WordPress builds, and computer vision models that actually ship.",
  elevatorPitch:
    "Software engineering graduate based in Bangladesh. I help international teams and growing businesses design, build, and debug web applications, clean WordPress architectures, and machine learning pipelines without unnecessary complexity.",
  workStatus: "Available for freelance projects and remote contract roles starting [Q4 2026 / NEXT MONTH]",
  email: "[your-email@domain.com]",
  bookingUrl: "[https://cal.com/your-username]",
  github: "[https://github.com/your-handle]",
  linkedin: "[https://linkedin.com/in/your-profile]",
  navItems: [
    { label: "Work", href: "/work", deskObjectName: "Laptop" },
    { label: "About", href: "/about", deskObjectName: "Notebook" },
    { label: "Skills", href: "/skills", deskObjectName: "Sticky Notes" },
    { label: "Activities", href: "/activities", deskObjectName: "Polaroids" },
    { label: "Services", href: "/services", deskObjectName: "Index Card" },
    { label: "Contact", href: "/contact", deskObjectName: "Business Card" },
  ],
  workingOverlap: [
    {
      region: "US East (EST/EDT)",
      localWindow: "08:00 AM – 12:00 PM EST",
      overlapHours: "4 hours daily overlap (evenings in Dhaka)",
    },
    {
      region: "US West (PST/PDT)",
      localWindow: "08:00 AM – 11:00 AM PST",
      overlapHours: "3 hours overlap (late evening in Dhaka)",
    },
    {
      region: "UK & Europe (GMT/CET)",
      localWindow: "09:00 AM – 03:00 PM CET",
      overlapHours: "5 to 6 hours direct daytime overlap",
    },
    {
      region: "Australia (AEST)",
      localWindow: "09:00 AM – 05:00 PM AEST",
      overlapHours: "Full working day overlap (morning in Dhaka)",
    },
  ],
};


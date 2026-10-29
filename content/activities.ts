export interface ActivityItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  category: "University Co-Curricular" | "Technical Community" | "Teamwork & Hackathons" | "Mentorship & Workshops";
  tagline: string;
  story: string;
  polaroidCaption: string;
  rotation: string;
  tapePosition: "top" | "top-left" | "top-right";
  imagePlaceholderAlt: string;
  highlights: string[];
}

export const activities: ActivityItem[] = [
  {
    id: "tech-club-leadership",
    title: "[ROLE / INITIATIVE: Technical Club Leadership & Workshop Convener]",
    organization: "[UNIVERSITY / COMMUNITY NAME: University Computer Society / Software Club]",
    role: "[e.g. Lead Technical Organizer / Vice President]",
    period: "2023 – 2025",
    category: "Technical Community",
    tagline: "Organizing hands-on coding labs, peer study circles, and bringing industry speakers to campus.",
    story:
      "Community isn't about lecturing from a stage; it's about making sure junior students don't get stuck on Git merge conflicts or environment setups alone at 2 AM. I organized recurring technical sessions covering web development fundamentals and machine learning basics, focusing on live coding rather than slides.",
    polaroidCaption: "Campus lab workshop — debugging OpenCV setup [2024]",
    rotation: "-rotate-2",
    tapePosition: "top",
    imagePlaceholderAlt: "Photo of university computer club workshop with students collaborating around screens",
    highlights: [
      "Conducted [NUMBER: 6+] technical workshops on modern web stacks and Python",
      "Mentored [NUMBER: 40+] junior engineering students through their first web projects",
      "Coordinated campus hackathon logistics for over [NUMBER: 150+] student participants",
    ],
  },
  {
    id: "hackathon-teamwork",
    title: "[HACKATHON / PROJECT SPRINT: 48-Hour Rapid Prototyping Challenge]",
    organization: "[EVENT: National / Regional Hackathon or Innovation Challenge]",
    role: "[e.g. Lead Frontend & System Integrator]",
    period: "2024",
    category: "Teamwork & Hackathons",
    tagline: "Shipping a working end-to-end prototype in two sleepless days with a multidisciplinary team.",
    story:
      "Hackathons are the ultimate test of engineering communication. When the clock is ticking down and caffeine is running low, you learn how to make rapid technical compromises, decouple client and server dependencies, and pitch a cohesive prototype to a non-technical panel.",
    polaroidCaption: "Final sprint pitch at 4 AM — team whiteboard architecture [2024]",
    rotation: "rotate-3",
    tapePosition: "top-right",
    imagePlaceholderAlt: "Team huddled around laptops and a whiteboard diagram during a hackathon sprint",
    highlights: [
      "Built and deployed the functional web interface within the 48-hour deadline",
      "Integrated live sensor inputs with an interactive real-time dashboard",
      "Collaborated across a 4-person team of designers, backend engineers, and domain researchers",
    ],
  },
  {
    id: "university-co-curricular",
    title: "[CO-CURRICULAR: Software Project Exhibition & Peer Review]",
    organization: "[DEPARTMENT: Department of Software Engineering / Faculty of IT]",
    role: "[e.g. Capstone Project Presenter & Peer Reviewer]",
    period: "2024 – 2025",
    category: "University Co-Curricular",
    tagline: "Rigorous academic project defenses, requirement engineering, and peer testing rounds.",
    story:
      "Software engineering coursework is at its best when tested against adversarial peer reviews. Participating in departmental exhibitions required explaining architectural tradeoffs to visiting software architects and defending database schema choices against harsh performance benchmarks.",
    polaroidCaption: "Senior capstone demonstration day — presenting edge vision rig [2025]",
    rotation: "-rotate-1",
    tapePosition: "top-left",
    imagePlaceholderAlt: "Project demonstration desk with testing hardware and presentation board",
    highlights: [
      "Presented software architecture and threat modeling to faculty review panels",
      "Collaborated in agile team sprints adhering to strict Git branching and pull request reviews",
      "Evaluated junior year team deliverables on code modularity and test coverage",
    ],
  },
  {
    id: "open-source-mentorship",
    title: "[MENTORSHIP: Git Fundamentals & Open-Source Onboarding]",
    organization: "[COMMUNITY: Local Developer Circle / Student Tech Community]",
    role: "[e.g. Open-Source Guide & Code Reviewer]",
    period: "2023 – Present",
    category: "Mentorship & Workshops",
    tagline: "Demystifying open source pull requests, licensing, and clean documentation for beginners.",
    story:
      "Many talented students hesitate to contribute to open source simply because making a public pull request feels intimidating. I created interactive walkthroughs breaking down issues, branch management, and writing respectful, constructive pull request descriptions.",
    polaroidCaption: "Open source Saturday meetup — writing our first pull requests",
    rotation: "rotate-2",
    tapePosition: "top",
    imagePlaceholderAlt: "Informal developer meetup around a shared table with coffee and laptops",
    highlights: [
      "Created beginner-friendly walkthroughs for GitHub workflows and markdown docs",
      "Reviewed dozens of initial pull requests with actionable, encouraging feedback",
      "Advocated for accessibility and semantic HTML in student-led repositories",
    ],
  },
];


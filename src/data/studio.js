// src/data/studio.js
import placeholder from "../assets/images/games/placeholder.webp";

export const studioSection = {
  id: "our-studio",
  eyebrow: "Inside The Studio",
  title: "Why we build the worlds we do.",
  subtitle: "A studio shaped around cinematic stories and player-first design.",
  description:
    "We’re a small team obsessed with feel. Every world starts as a question: what does this moment feel like in the hands of a player? From there we prototype fast, iterate in public, and polish until every frame, sound, and interaction feels intentional.",
};

export const studioPillars = [
  {
    id: "creativity",
    icon: placeholder,
    label: "Cinematic Creativity",
    description:
      "We treat every experience like a film sequence, designing shots, pacing, and reveals that players can control.",
  },
  {
    id: "innovation",
    icon: placeholder,
    label: "Engineered Innovation",
    description:
      "Custom systems for camera, input, and feedback let us push Roblox beyond its defaults without sacrificing stability.",
  },
  {
    id: "players",
    icon: placeholder,
    label: "Player-First Decisions",
    description:
      "We design with real players in the loop, shipping changes based on how communities actually play and behave.",
  },
  {
    id: "craft",
    icon: placeholder,
    label: "Relentless Craft",
    description:
      "From lobby lighting to micro-animations, we iterate until small details quietly make the whole experience feel premium.",
  },
];

// ABOUT PAGE DATA

export const aboutHeroContent = {
  title: "About Karpath Games Studio",
  subheading: "Building worlds where imagination and systems design collide.",
  intro:
    "We are a Roblox games studio focused on crafting replayable, social-first experiences. From tiny prototypes to live universes, our team lives in the space between code, art, and community.",
};

export const timelineMilestones = [
  {
    year: "2025",
    month: "December",
    title: "Studio founded",
    description:
      "Started as a small group of builders and scripters experimenting with new Roblox mechanics and game loops.",
  },
  {
    year: "2026",
    month: "February",
    title: "First Game Released",
    description:
      "Our first front-page title introduced our approach to systems-driven progression and collaborative gameplay.",
  },
  {
    year: "2026",
    month: "April",
    title: "First Breakout hit",
    description:
      "We released the title that solidified our team in the roblox scene",
  },
  {
    year: "2026",
    month: "Onward",
    title: "Refining our team",
    description:
      "We are now expanding across multiple regions, prioritising remote work",
  },
];

export const studioValues = [
  {
    id: "players-first",
    title: "Players First",
    description:
      "We treat our players like collaborators, listening closely and iterating fast on the experiences they love.",
    icon: "🎮",
  },
  {
    id: "craft",
    title: "Craft Over Chaos",
    description:
      "We value thoughtful systems, clean code, and polished moments over noisy, throwaway features.",
    icon: "✨",
  },
  {
    id: "experimentation",
    title: "Always Experimenting",
    description:
      "Prototyping and playtesting are built into our weekly rhythm so we never stop learning.",
    icon: "🧪",
  },
  {
    id: "respect",
    title: "Respectful Collaboration",
    description:
      "We keep communication clear, kind, and focused, so the best ideas can win no matter where they come from.",
    icon: "🤝",
  },
];

export const studioStats = [
  {
    id: "team-size",
    label: "Team members",
    value: 18,
    suffix: "+",
  },
  {
    id: "countries",
    label: "Countries",
    value: 7,
  },
  {
    id: "roles",
    label: "Core disciplines",
    value: 6,
  },
  {
    id: "players",
    label: "Total players reached",
    value: 50,
    suffix: "M+",
  },
];

export const studioTeam = [
  {
    id: "director",
    name: "Tiberiu Musat",
    role: "Studio Director",
    blurb: "Leads vision, manages partnerships all across the world.",
  },
  {
    id: "producer",
    name: "Andrei Racoviteanu",
    role: "Producer",
    blurb: "Handles resources, schedules, and cross-team workflows.",
  },
  {
    id: "engineering",
    name: "Luca Christian",
    role: "Lead Engineer",
    blurb: "Architect of core game tech, platform optimization, and tools.",
  },
  {
    id: "art",
    name: "Robert Troznay",
    role: "3D Modeler",
    blurb: "Directs prop and environment creation for fidelity.",
  },
];

export const processSteps = [
  {
    id: "discover",
    title: "Discover",
    description: "Identify player fantasies and core loops worth exploring.",
    icon: "🔎",
  },
  {
    id: "prototype",
    title: "Prototype",
    description: "Rapidly test mechanics, pacing, and controls with real players.",
    icon: "📦",
  },
  {
    id: "build",
    title: "Build",
    description: "Scale the experience with content, systems, and polish.",
    icon: "🛠️",
  },
  {
    id: "launch",
    title: "Launch",
    description: "Ship confidently with analytics, events, and live support.",
    icon: "🚀",
  },
  {
    id: "evolve",
    title: "Evolve",
    description: "Continuously update based on data and community feedback.",
    icon: "♻️",
  },
];

export const partners = [
  { id: "roblox", name: "Roblox", label: "Platform Partner" },
];

export const highlights = [
  {
    id: "front-page",
    title: "Front Page Features",
    ctaLabel: "Browse games",
    href: "/games",
    isExternal: false,
    description:
      "Multiple titles featured on Roblox’s front page and category carousels.",
  },
  {
    id: "events",
    title: "Seasonal Live Events",
    ctaLabel: "Watch event coverage",
    href: "https://www.youtube.com/results?search_query=Troll+World+Obby+update",
    isExternal: true,
    description:
      "Millions of players engaged through custom events and updates.",
  },
  {
    id: "press",
    title: "Community Spotlight",
    ctaLabel: "See fan shorts",
    href: "https://www.tiktok.com/search?q=Troll%20World%20Obby",
    isExternal: true,
    description:
      "Recognized in creator showcases for production quality and retention.",
  },
];

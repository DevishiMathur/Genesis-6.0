// ─── Team Data ────────────────────────────────────────────────────────────────
// Photos should be placed in /public/teams/<team-name>/<filename>.jpg
// Use null for photo to show placeholder initials

export type MemberType = "executive" | "core" | "faculty";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string | null; // path relative to /public e.g. "/teams/events/john.jpg"
  linkedin?: string;
  github?: string;
  type: MemberType;
}

export interface Team {
  id: string;
  label: string;
  members: TeamMember[];
}

// ─── Teams ────────────────────────────────────────────────────────────────────

export const teamsData: Team[] = [
  // ── Convenors & Directors (shown first on page open) ──────────────────────
  {
    id: "convenors",
    label: "Convenors & Directors",
    members: [
      {
        id: "c1",
        name: "Convenor Name",
        role: "Convenor",
        photo: null,
        linkedin: "",
        github: "",
        type: "executive",
      },
      {
        id: "c2",
        name: "Director Name",
        role: "Director",
        photo: null,
        linkedin: "",
        github: "",
        type: "executive",
      },
    ],
  },

  // ── Events ────────────────────────────────────────────────────────────────
  {
    id: "events",
    label: "Events",
    members: [
      {
        id: "ev1",
        name: "Member Name",
        role: "Events Lead",
        photo: null,
        linkedin: "",
        github: "",
        type: "executive",
      },
      {
        id: "ev2",
        name: "Member Name",
        role: "Events Core",
        photo: null,
        linkedin: "",
        type: "core",
      },
    ],
  },

  // ── Marketing ─────────────────────────────────────────────────────────────
  {
    id: "marketing",
    label: "Marketing",
    members: [
      {
        id: "mk1",
        name: "Member Name",
        role: "Marketing Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "mk2",
        name: "Member Name",
        role: "Marketing Core",
        photo: null,
        linkedin: "",
        type: "core",
      },
    ],
  },

  // ── Corporate ─────────────────────────────────────────────────────────────
  {
    id: "corporate",
    label: "Corporate",
    members: [
      {
        id: "cp1",
        name: "Member Name",
        role: "Corporate Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "cp2",
        name: "Member Name",
        role: "Corporate Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Graphic Design ────────────────────────────────────────────────────────
  {
    id: "graphic-design",
    label: "Graphic Design",
    members: [
      {
        id: "gd1",
        name: "Member Name",
        role: "Design Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "gd2",
        name: "Member Name",
        role: "Design Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Technical ─────────────────────────────────────────────────────────────
  {
    id: "technical",
    label: "Technical",
    members: [
      {
        id: "tc1",
        name: "Member Name",
        role: "Technical Lead",
        photo: null,
        linkedin: "",
        github: "",
        type: "executive",
      },
      {
        id: "tc2",
        name: "Member Name",
        role: "Technical Core",
        photo: null,
        github: "",
        type: "core",
      },
    ],
  },

  // ── Content ───────────────────────────────────────────────────────────────
  {
    id: "content",
    label: "Content",
    members: [
      {
        id: "co1",
        name: "Member Name",
        role: "Content Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "co2",
        name: "Member Name",
        role: "Content Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Media & Coverage ──────────────────────────────────────────────────────
  {
    id: "media",
    label: "Media & Coverage",
    members: [
      {
        id: "mc1",
        name: "Member Name",
        role: "Media Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "mc2",
        name: "Member Name",
        role: "Media Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Curations ─────────────────────────────────────────────────────────────
  {
    id: "curations",
    label: "Curations",
    members: [
      {
        id: "cu1",
        name: "Member Name",
        role: "Curations Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "cu2",
        name: "Member Name",
        role: "Curations Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Logistics ─────────────────────────────────────────────────────────────
  {
    id: "logistics",
    label: "Logistics",
    members: [
      {
        id: "lo1",
        name: "Member Name",
        role: "Logistics Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "lo2",
        name: "Member Name",
        role: "Logistics Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Hospitality ───────────────────────────────────────────────────────────
  {
    id: "hospitality",
    label: "Hospitality",
    members: [
      {
        id: "ho1",
        name: "Member Name",
        role: "Hospitality Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "ho2",
        name: "Member Name",
        role: "Hospitality Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Finance ───────────────────────────────────────────────────────────────
  {
    id: "finance",
    label: "Finance",
    members: [
      {
        id: "fi1",
        name: "Member Name",
        role: "Finance Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "fi2",
        name: "Member Name",
        role: "Finance Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Social Media ──────────────────────────────────────────────────────────
  {
    id: "social-media",
    label: "Social Media",
    members: [
      {
        id: "sm1",
        name: "Member Name",
        role: "Social Media Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "sm2",
        name: "Member Name",
        role: "Social Media Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Crafts ────────────────────────────────────────────────────────────────
  {
    id: "crafts",
    label: "Crafts",
    members: [
      {
        id: "cr1",
        name: "Member Name",
        role: "Crafts Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "cr2",
        name: "Member Name",
        role: "Crafts Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Flying Squad ──────────────────────────────────────────────────────────
  {
    id: "flying-squad",
    label: "Flying Squad",
    members: [
      {
        id: "fs1",
        name: "Member Name",
        role: "Flying Squad Lead",
        photo: null,
        linkedin: "",
        type: "executive",
      },
      {
        id: "fs2",
        name: "Member Name",
        role: "Flying Squad Core",
        photo: null,
        type: "core",
      },
    ],
  },

  // ── Faculty ───────────────────────────────────────────────────────────────
  {
    id: "faculty",
    label: "Faculty",
    members: [
      {
        id: "fa1",
        name: "Faculty Name",
        role: "Faculty Advisor",
        photo: null,
        linkedin: "",
        type: "faculty",
      },
    ],
  },
];

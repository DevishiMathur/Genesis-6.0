"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { teamsData, MemberType } from "./teamsData";
import { LinkedInIcon, GitHubIcon, ChevronIcon, FilterIcon } from "./TeamIcons";

// ─── Font helper ──────────────────────────────────────────────────────────────
const FONT: React.CSSProperties = {
  fontFamily: "var(--font-mirava-sans)",
};
// ─── Constants ───────────────────────────────────────────────────────────────

const TEAM_FILTERS = [
  { id: "all", label: "All Teams" },
  { id: "convenors", label: "Convenors & Directors" },
  { id: "events", label: "Events" },
  { id: "marketing", label: "Marketing" },
  { id: "corporate", label: "Corporate" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "technical", label: "Technical" },
  { id: "content", label: "Content" },
  { id: "media", label: "Media & Coverage" },
  { id: "curations", label: "Curations" },
  { id: "logistics", label: "Logistics" },
  { id: "hospitality", label: "Hospitality" },
  { id: "finance", label: "Finance" },
  { id: "social-media", label: "Social Media" },
  { id: "crafts", label: "Crafts" },
  { id: "flying-squad", label: "Flying Squad" },
];

const MEMBER_TYPES: { id: MemberType; label: string }[] = [
  { id: "executive", label: "Executives" },
  { id: "core", label: "Core" },
  { id: "faculty", label: "Faculty" },
];

// ─── Sliding Pill Toggle ─────────────────────────────────────────────────────
// Bar background: dark navy (#0d1b35) matching the reference image.
// Active pill: white, slides smoothly. Inactive text: muted blue-white.

function SlidingPillToggle({
  options,
  active,
  onChange,
}: {
  options: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = options.findIndex((o) => o.id === active);
    const btn = buttonRefs.current[activeIndex];
    const container = containerRef.current;
    if (btn && container) {
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    }
  }, [active, options]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center rounded-full p-1"
      /* Dark navy bar colour — matches reference screenshot */
      style={{ background: "#0d1b35", border: "1.5px solid rgba(26,115,232,0.25)" }}
    >
      {/* Sliding white pill */}
      <span
        className="absolute top-1 bottom-1 rounded-full pointer-events-none"
        style={{
          left: pillStyle.left,
          width: pillStyle.width,
          background: "#ffffff",
          boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
          transition: "left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      {options.map((option, i) => (
        <button
          key={option.id}
          ref={(el) => { buttonRefs.current[i] = el; }}
          onClick={() => onChange(option.id)}
          className="relative z-10 px-7 py-2.5 rounded-full text-[14px] font-bold select-none"
          style={{
            ...FONT ,
            color: active === option.id ? "#07162c" : "white",
            transition: "color 0.3s ease",
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

// ─── Member Card ─────────────────────────────────────────────────────────────
// Layout: large photo fills the top 3/4 of the card, name + role appear small
// below. LinkedIn / GitHub icon buttons always visible at the very bottom.

function MemberCard({ member }: { member: (typeof teamsData)[0]["members"][0] }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-[#0d1b35] border border-white/10 hover:border-[#1a73e8]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1a73e8]/15">

      {/* ── Photo area — takes most of the card ── */}
      <div className="relative w-full aspect-[3/4] flex-shrink-0 bg-gradient-to-br from-[#1a3a5c] to-[#071525]">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-4xl font-bold"
              style={{ ...FONT, color: "#1a73e8" }}
            >
              {initials}
            </span>
          </div>
        )}
        {/* Bottom gradient so text below reads cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d1b35] to-transparent" />
      </div>

      {/* ── Name + Role ── */}
      <div className="px-3 pt-3 pb-1 text-center">
        <h3
          className="text-white font-bold text-[16px] leading-snug truncate"
          style={FONT}
        >
          {member.name}
        </h3>
        <p
          className="text-[13px] font-semibold truncate mt-1"
          style={{ color: "#1a73e8" }}
        >
          {member.role}
        </p>
      </div>

      {/* ── Social buttons — ALWAYS visible at the bottom ── */}
      <div className="flex items-center justify-center gap-2 px-3 pt-2 pb-4 mt-auto">
        {/* LinkedIn — always rendered; only navigates when URL is set */}
        {member.linkedin !== undefined && (
          member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{ background: "#1a73e8", boxShadow: "0 2px 12px rgba(26,115,232,0.45)" }}
              aria-label={`${member.name} LinkedIn`}
            >
              <LinkedInIcon className="w-4 h-4 text-white" />
              <span className="text-[12px] font-bold text-white" style={FONT}>LinkedIn</span>
            </a>
          ) : (
            <span
              className="flex items-center gap-2 px-4 py-2 rounded-full opacity-50 cursor-default"
              style={{ background: "#1a73e8" }}
              aria-label="LinkedIn (not yet linked)"
            >
              <LinkedInIcon className="w-4 h-4 text-white" />
              <span className="text-[12px] font-bold text-white" style={FONT}>LinkedIn</span>
            </span>
          )
        )}
        {/* GitHub — always rendered when property exists */}
        {member.github !== undefined && (
          member.github ? (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 hover:bg-white/25 hover:border-white/50 transition-all duration-200 hover:scale-105"
              aria-label={`${member.name} GitHub`}
            >
              <GitHubIcon className="w-4 h-4 text-white" />
            </a>
          ) : (
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 opacity-50 cursor-default"
              aria-label="GitHub (not yet linked)"
            >
              <GitHubIcon className="w-4 h-4 text-white" />
            </span>
          )
        )}
      </div>

    </div>
  );
}

// ─── Teams Page ───────────────────────────────────────────────────────────────

export default function TeamsPage() {
  const [activeTeamFilter, setActiveTeamFilter] = useState<string>("all");
  const [activeMemberType, setActiveMemberType] = useState<MemberType>("executive");
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const filteredTeams = useMemo(() => {
    const teamFiltered =
      activeTeamFilter === "all"
        ? teamsData
        : teamsData.filter((t) => t.id === activeTeamFilter);

    return teamFiltered
      .map((team) => ({
        ...team,
        members: team.members.filter((m) => m.type === activeMemberType),
      }))
      .filter((team) => team.members.length > 0);
  }, [activeTeamFilter, activeMemberType]);

  return (
    <main className="relative min-h-screen overflow-hidden text-white pt-28 pb-24 px-4 md:px-8 lg:px-16">

    {/* Background */}
    <div
        className="fixed inset-0 -z-50"
        style={{
            background:
                "linear-gradient(135deg, rgb(7,22,44) 0%, rgb(14,41,84) 35%, rgb(31,81,148) 70%, rgb(96,165,250) 100%)",
        }}
    />

      {/* ── Hero Heading ─────────────────────────────────────────────────── */}
      <div className="text-center mb-14 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          style={FONT}
        >
          Unveiling the{" "}
          <span className="bg-gradient-to-r from-[#135DBE] via-[#2979ff] to-[#94BEF4] bg-clip-text text-transparent">
            Minds Behind
          </span>
          <br />
          Genesis 6.0
        </h1>
      </div>

      {/* ── Controls Row: toggle + Team filter button in one line ─────── */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-6xl mx-auto">

        {/* Executives / Core / Faculty sliding toggle */}
        <SlidingPillToggle
          options={MEMBER_TYPES}
          active={activeMemberType}
          onChange={(id) => setActiveMemberType(id as MemberType)}
        />

        {/* Team filter toggle button — same pill style */}
    {/* <button
          onClick={() => setFiltersOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300"
          style={{
            ...FONT,
            background: filtersOpen ? "#1a73e8" : "#ffffff",
            color: filtersOpen ? "#ffffff" : "#1a73e8",
            border: filtersOpen ? "1.5px solid #1a73e8"
            : "1.5px solid #ffffff",
            boxShadow: filtersOpen ? "0 2px 16px rgba(0,0,0,0.25)" : "none",
          }}
        >
          <FilterIcon className="w-3.5 h-3.5" />
          <span>Team</span>
          {activeTeamFilter !== "all" && (
        <span
          className="w-2 h-2 rounded-full"
          style={{
            background: filtersOpen ? "#ffffff" : "#1a73e8",
          }}
        />
      )}
          <ChevronIcon
            className={`w-4 h-4 transition-transform duration-300 ${filtersOpen ? "rotate-180" : ""}`}
          />
        </button> */}

      </div>

      {/* ── Filter Dropdown (animated) ─────────────────────────────────── */}
      <div
        className="max-w-6xl mx-auto overflow-hidden"
        style={{
          maxHeight: filtersOpen ? "24rem" : "0px",
          opacity: filtersOpen ? 1 : 0,
          marginBottom: filtersOpen ? "2.5rem" : "0",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, margin-bottom 0.3s ease",
        }}
      >
        <div className="rounded-2xl bg-[#0d1b35] border border-[#1a73e8]/20 px-6 py-5">
          <div className="flex flex-wrap gap-2">
            {TEAM_FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveTeamFilter(filter.id)}
                className="px-4 py-1.5 rounded-full text-[13px] font-medium border transition-all duration-200"
                style={{
                  ...FONT,
                  background:
                    activeTeamFilter === filter.id
                      ? "#1a73e8"
                      : "rgba(255,255,255,0.04)",
                  color:
                    activeTeamFilter === filter.id
                      ? "#ffffff"
                      : "rgba(255,255,255,0.65)",
                  borderColor:
                    activeTeamFilter === filter.id
                      ? "#1a73e8"
                      : "rgba(255,255,255,0.10)",
                  boxShadow: activeTeamFilter === filter.id ? "0 2px 12px white" : "none",
                  fontWeight: activeTeamFilter === filter.id ? 700 : 500,
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Teams Grid ───────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto space-y-16">
        {filteredTeams.length === 0 ? (
          <div className="text-center py-24 text-white/30 text-lg" style={FONT}>
            No members found for this combination.
          </div>
        ) : (
          filteredTeams.map((team) => (
            <section key={team.id} id={team.id}>
              {/* Team Heading — centred, flanked by gradient lines */}
              <div className="flex flex-col items-center mb-8">
  <h2
    className="text-2xl md:text-3xl font-bold text-white text-center"
    style={FONT}
  >
    {team.label}
  </h2>

  {/* Line below the heading */}
  <div className="mt-3 h-0.5 w-200 bg-gradient-to-r from-transparent via-[#1a73e8] to-transparent" />
</div>

              {/* Member Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {team.members.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}

import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react";

export default function Portfolio() {



  const links = {
    linkedin: "https://www.linkedin.com/in/athesh/",
    github: "https://github.com/AtheshG",
    email: "mailto:agnanaka@uwaterloo.ca",
    otaRepo: "https://github.com/ushan-fernando/SSCS-Chipathon-2025-Team-FPTA/blob/main/docs/proposal/proposal.md",
    resume: "#" // TODO: drop a public PDF link here (e.g., GitHub Pages, Google Drive)
  };

  const skillGroups = [
    {
      title: "IC Design",
      items: ["gm/ID sizing", "folded-cascode OTA", "stability/PM/GBW", "PSRR/noise", "current mirrors", "cascoding"]
    },
    {
      title: "EDA / Tools",
      items: ["GF180", "Xschem", "Ngspice", "LTspice", "Altium"]
    },
    {
      title: "Programming",
      items: ["C/C++", "Python", "MATLAB", "VHDL"]
    }
  ];



  const projects = [
    {
      title: "MPPT Solar Buck Converter (Orbital)",
      period: "Mar–Apr 2025",
      summary:
        "Assisted design and owned Altium layout of a small MPPT breakout board (solar input → buck converter → load) with current‑sense and I²C control; focused on EMI‑aware placement/routing and testability.",
      bullets: [
        "Minimized switching‑loop area; placed input/output caps and bootstrap per datasheet guidance",
        "Kelvin‑routed shunt to INA230 current‑sense; added test points, I²C pull‑ups, DNP options",
        "Reviewed FB/comp network and set MPPT potentiometer range for expected panel voltages"
      ],
      links: [
        // TODO: host images (schematic/3D render) and drop URLs below
        // { label: "Schematic", href: "https://.../mppt-schematic.png", icon: <ExternalLink className=\"h-4 w-4\" aria-hidden /> },
        // { label: "3D", href: "https://.../mppt-3d.png", icon: <ExternalLink className=\"h-4 w-4\" aria-hidden /> },
      ],
      tags: ["Altium", "MPPT", "Buck", "INA230"],
      image: "/boards/mppt-breakout.png.png",
      imageAlt: "MPPT breakout board render"
    },

    {
      title: "On‑Board Computer (OBC) – Power & Bring‑Up (Orbital)",
      period: "Oct 2024–Mar 2025",
      summary:
        "Co‑designed power tree and implemented Altium layout/bring‑up for the satellite OBC: dual buck rails (3V3, 1V2), reverse‑polarity protection, status LEDs, and test/selection jumpers.",
      bullets: [
        "Designed dual‑buck stage (LM26420 family) and validated compensation; placed decoupling and inductors per datasheet layout guidance",
        "Implemented P‑MOSFET reverse‑polarity protection + TVS; set LED current and added accessible test points",
        "Coordinated connector pinout and power‑up sequencing; supported bench bring‑up and revisions"
      ],
  
      links: [
        // TODO: host images for OBC schematic/3D and drop URLs below
        // { label: "Buck Schematic", href: "https://.../obc-buck.png", icon: <ExternalLink className="h-4 w-4" aria-hidden /> },
        // { label: "3D", href: "https://.../obc-3d.png", icon: <ExternalLink className="h-4 w-4" aria-hidden /> },
      ],
      tags: ["Altium", "OBC", "Buck", "Power", "RPP"],
      image: "/boards/obc-rev3.png.png",
      imageAlt: "OBC board render"
    },

    {
      title: "Reconfigurable Amplifier IC (MOSBIUS)",
      period: "May–Aug 2025",
      summary:
        "Designed a folded‑cascode OTA in GF180 using gm/ID (target gm/ID≈10, VOV≈0.2 V) with ~500 kHz open‑loop GBW; contributed to reconfigurable amplifier architecture & reviews.",
      bullets: [
        "AC/small‑signal simulations, interface coordination, test planning",
        "IEEE SSCS MOSBIUS Chipathon led by Prof. Peter Kinget",
      ],
      links: [
        { label: "Repo", href: links.otaRepo, icon: <Github className="h-4 w-4" aria-hidden /> },
      ],
      tags: ["GF180", "OTA", "gm/ID", "AC/Noise"]
    },
    {
      title: "EMI Shielding Simulator (MATLAB App Designer)",
      period: "Oct–Dec 2023",
      summary:
        "GUI tool to model shielding effectiveness vs. frequency from material properties & source distance; added aperture‑loss estimation and exportable plots.",
      bullets: [
        "Processed lab data with digital filters, windowing, spectra",
        "Reviewed ~25 papers to inform models and UI"
      ],
      links: [],
      tags: ["MATLAB", "EMI", "Signal Processing"]
    }
  ];

  const experience = [
    {
      role: "Electrical Engineering Intern",
      org: "Curtiss‑Wright (Indal Technologies)",
      period: "Jan–Apr 2025 · Mississauga, ON",
      bullets: [
        "C/C++ HMI with Modbus RTU/TCP for bidirectional register R/W",
        "VxWorks test harness to automate validation for 100+ SPUs",
        "Authored hardware/software test procedures (hipot & IR)"
      ]
    },
    {
      role: "Hardware Developer",
      org: "UW Orbital Design Team",
      period: "May 2024–Apr 2025 · Waterloo, ON",
      bullets: [
        "Design reviews for OBC & MPPT; improved layout/EMI/SI",
        "Integrated watchdog timer; PC/104 header integration"
      ]
    },
    {
      role: "EV Product Development Intern",
      org: "Bombardier Recreational Products (BRP)",
      period: "Sep–Dec 2023 · Valcourt, QC",
      bullets: [
        "MATLAB shielding simulation tool for EV battery studies",
        "Python/MATLAB DSP on charger current spikes; LTspice AC inrush"
      ]
    },
    {
      role: "Machine Vision Systems Designer",
      org: "Taymer International",
      period: "Feb–Apr 2023 · Markham, ON",
      bullets: [
        "Optimized optics/lighting; assisted OpenCV/C++ algorithms",
        "Assembly/solder for 30+ machines"
      ]
    }
  ];

  function withBase(path) {
    const base = import.meta.env.BASE_URL || "/";
    return `${base.replace(/\/$/, "")}${path}`;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* NAV / HERO */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <header className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Athesh Gnanakaneshan</h1>
              <p className="mt-1 text-slate-600">University of Waterloo · Analog / Mixed‑Signal IC — building a folded‑cascode OTA in GF180</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                 className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:shadow">
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                 className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:shadow">
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
              {links.resume && links.resume !== "#" && (
                <a href={links.resume} target="_blank" rel="noreferrer" aria-label="Resume"
                   className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  <ChevronRight className="h-4 w-4" aria-hidden /> Resume
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Open to internships</span>
          </div>
        </header>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-5xl px-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Selected Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {p.image && (
                <div className="mb-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={withBase(p.image)} alt={p.imageAlt || p.title} className="w-full h-auto object-contain" />
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="text-xs text-slate-500">{p.period}</p>
                </div>
                <div className="flex gap-2">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-medium hover:shadow">
                      {l.icon}
                      <span className="sr-only">{l.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{p.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto mt-10 max-w-5xl px-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Experience</h2>
        <div className="space-y-4">
          {experience.map((e) => (
            <article key={e.role + e.org} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold">{e.role} — <span className="font-normal text-slate-700">{e.org}</span></h3>
                <span className="text-sm text-slate-500">{e.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto mt-10 max-w-5xl px-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto my-12 max-w-5xl px-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Athesh Gnanakaneshan · Waterloo, ON · <a className="underline hover:text-slate-700" href={links.email}>agnanaka@uwaterloo.ca</a></p>
      </footer>
    </main>
  );
}

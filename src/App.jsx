import { ChevronRight, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  const links = {
    linkedin: "https://www.linkedin.com/in/athesh/",
    github: "https://github.com/AtheshG",
    email: "mailto:agnanaka@uwaterloo.ca",
    otaRepo: "https://github.com/ushan-fernando/SSCS-Chipathon-2025-Team-FPTA",
    resume: "#"
  };

  const skillGroups = [
    {
      title: "PCB & Hardware",
      items: [
        "Altium Designer",
        "OrCAD",
        "Cadence Allegro",
        "4-10 layer PCB layout",
        "stackup planning",
        "buck/boost converters",
        "LDOs",
        "PMBus"
      ]
    },
    {
      title: "Validation & Simulation",
      items: [
        "board bring-up",
        "power sequencing",
        "oscilloscopes",
        "VNAs",
        "spectrum analyzers",
        "HyperLynx",
        "LTspice",
        "Ngspice"
      ]
    },
    {
      title: "Programming & Interfaces",
      items: ["Python", "C/C++", "MATLAB", "I2C", "SPI", "UART", "Modbus RTU/TCP", "1GbE"]
    }
  ];

  const projects = [
    {
      title: "Satellite OBC Power Module",
      period: "Oct 2024 - Mar 2025",
      summary:
        "Designed a dual synchronous buck power module for UW Orbital's on-board computer, generating 3.3 V and 1.2 V rails on a 6-layer PCB.",
      bullets: [
        "Generated 3.3 V/1 A and 1.2 V/500 mA rails using an LM26420-family regulator",
        "Added P-FET reverse-polarity protection, TVS clamping, status LEDs, and accessible test points",
        "Placed decoupling, inductors, and high-current paths per datasheet EMI and thermal guidance"
      ],
      links: [],
      tags: ["Altium", "LM26420", "6-layer PCB", "Power"],
      image: "/boards/obc-rev3.png.png",
      imageAlt: "Satellite OBC power module board render"
    },
    {
      title: "MPPT Solar Charge Controller",
      period: "Mar 2025 - Apr 2025",
      summary:
        "Designed a 5-18 V solar-input PCB with current monitoring, I2C telemetry, and switching power layout for satellite power validation.",
      bullets: [
        "Integrated INA230 current monitoring with Kelvin-sensed shunt routing",
        "Minimized switching loop area and separated noisy power paths from analog sensing circuitry",
        "Added I2C pull-ups, test points, and DNP options to support bring-up and debug"
      ],
      links: [],
      tags: ["Altium", "INA230", "TPS63070", "4-layer PCB"],
      image: "/boards/mppt-breakout.png.png",
      imageAlt: "MPPT solar charge controller board render"
    },
    {
      title: "Folded-Cascode OTA IC",
      period: "Jun 2025 - Aug 2025",
      summary:
        "Designed a 180 nm CMOS folded-cascode OTA in GF180 using Xschem, Ngspice, and gm/ID methodology.",
      bullets: [
        "Achieved 70 dB DC gain, 450 kHz GBW, and 65 degree phase margin in simulation",
        "Performed AC and small-signal analysis while coordinating architecture and review feedback"
      ],
      links: [{ label: "Repo", href: links.otaRepo, icon: <Github className="h-4 w-4" aria-hidden /> }],
      tags: ["GF180", "Xschem", "Ngspice", "gm/ID"]
    },
    {
      title: "EMI Shielding Simulator",
      period: "Sep 2023 - Dec 2023",
      summary:
        "Built a MATLAB tool for EV battery enclosure EMI shielding analysis and charger switching-noise characterization.",
      bullets: [
        "Characterized charger switching noise from DC to 1 GHz",
        "Identified emissions that led to a ferrite bead integration recommendation"
      ],
      links: [],
      tags: ["MATLAB", "EMI", "Signal Processing"]
    }
  ];

  const experience = [
    {
      role: "Hardware Engineering Intern",
      org: "Nexthop AI",
      period: "Jan 2026 - Apr 2026 | Santa Clara, CA",
      bullets: [
        "Designed a 25 kW rack-mount power distribution chassis for manufacturing test across 5 network switches",
        "Owned schematic capture and 10-layer PCB layout for a chassis controller board integrating 5 CRPS PSUs, Raspberry Pi CM5, 1GbE, PMBus telemetry, and switch power-control circuitry",
        "Built a Python manufacturing interface for PMBus telemetry logging and independent switch power-cycling",
        "Performed bring-up and validation for chassis controller and 2RU switch LED boards, debugging PMBus, control, connectivity, and system-integration issues",
        "Ran HyperLynx thermal, SI, and PI simulations to guide layout changes before fabrication"
      ]
    },
    {
      role: "Hardware Developer",
      org: "UW Orbital Design Team",
      period: "May 2024 - Apr 2025 | Waterloo, ON",
      bullets: [
        "Designed a 6-layer FlatSat integration board with 70+ test points connecting OBC, MPPT, comms, and ADCS subsystems",
        "Reduced full-system validation time by 50% through accessible debug interfaces",
        "Led design reviews for 6 PCBs, improving EMI, SI/PI, connector placement, routing, and layer stackups"
      ]
    },
    {
      role: "Electrical Engineering Intern",
      org: "Curtiss-Wright - Indal Technologies",
      period: "Jan 2025 - Apr 2025 | Mississauga, ON",
      bullets: [
        "Developed embedded C/C++ HMI firmware for aircraft securing controllers using Modbus RTU/TCP",
        "Created a 12-case automated VxWorks validation suite for 100+ System Processing Units",
        "Reduced validation time by 2 hours per unit and identified a watchdog-timer schematic error before production release"
      ]
    },
    {
      role: "EV Product Development Intern",
      org: "Bombardier Recreational Products (BRP)",
      period: "Sep 2023 - Dec 2023 | Valcourt, QC",
      bullets: [
        "Built a MATLAB EMI shielding analysis tool for EV battery enclosures",
        "Characterized charger switching noise from DC to 1 GHz and recommended ferrite bead integration"
      ]
    }
  ];

  function withBase(path) {
    const base = import.meta.env.BASE_URL || "/";
    return `${base.replace(/\/$/, "")}${path}`;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <header className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Athesh Gnanakaneshan</h1>
              <p className="mt-1 text-slate-600">
                University of Waterloo Electrical Engineering | PCB design, power electronics, board bring-up, and hardware validation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:shadow"
              >
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium hover:shadow"
              >
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
              {links.resume && links.resume !== "#" && (
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Resume"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden /> Resume
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">Open to hardware engineering internships</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Waterloo, ON</span>
          </div>
        </header>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Selected Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {p.image && (
                <div className="mb-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={withBase(p.image)} alt={p.imageAlt || p.title} className="h-auto w-full object-contain" />
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="text-xs text-slate-500">{p.period}</p>
                </div>
                <div className="flex gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-medium hover:shadow"
                    >
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
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-5xl px-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Experience</h2>
        <div className="space-y-4">
          {experience.map((e) => (
            <article key={e.role + e.org} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold">
                  {e.role} - <span className="font-normal text-slate-700">{e.org}</span>
                </h3>
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

      <section className="mx-auto mt-10 max-w-5xl px-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto my-12 max-w-5xl px-4 text-center text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Athesh Gnanakaneshan | Waterloo, ON |{" "}
          <a className="underline hover:text-slate-700" href={links.email}>
            agnanaka@uwaterloo.ca
          </a>
        </p>
      </footer>
    </main>
  );
}

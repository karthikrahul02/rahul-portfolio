import type { ReactNode } from "react";

import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import CertificateVault from "./components/certificate-vault";

const projects = [
  {
    number: "01",
    eyebrow: "AI · DECISION SYSTEMS",
    title: "Payment Failure Digital Twin",
    period: "2026",
    description:
      "An AI-driven payment recovery engine that estimates recovery probability and compares recovery strategies through counterfactual simulations.",
    highlight:
      "Evaluated on 1,972 held-out transactions; the selected strategy achieved 6.08% higher mean utility than the best fixed recovery policy.",
    tags: [
      "PYTHON",
      "SCIKIT-LEARN",
      "RANDOM FOREST",
      "OPTIMIZATION",
    ],
    github:
      "https://github.com/karthikrahul02/payment-failure-digital-twin",
    demo: "",
  },
  {
    number: "02",
    eyebrow: "AI · ENVIRONMENTAL DATA",
    title: "CleanSKAI Dashboard",
    period: "2025",
    description:
      "A full-stack environmental monitoring dashboard that combines live air-quality data, forecasting, and geographic insights for Delhi NCR.",
    highlight:
      "Built REST APIs and visual analytics for AQI trends, pollution forecasts, and multi-zone smart-city insights.",
    tags: [
      "PYTHON",
      "FASTAPI",
      "REACT",
      "MACHINE LEARNING",
    ],
    github: "https://github.com/karthikrahul02",
    demo: "",
  },
  {
    number: "03",
    eyebrow: "FULL-STACK · WEB APPLICATION",
    title: "SkillSwap",
    period: "2025–2026",
    description:
      "A peer-to-peer skill exchange platform designed to help students teach, learn, and connect through structured skill listings and matching.",
    highlight:
      "Implemented authentication flows, email OTP verification, protected routes, and weighted peer matching.",
    tags: [
      "REACT",
      "PYTHON",
      "FLASK",
      "SQLITE",
      "JWT",
    ],
    github: "https://github.com/karthikrahul02",
    demo: "",
  },
];

const skills = [
  {
    group: "LANGUAGES",
    items: "Python · JavaScript · SQL · C",
  },
  {
    group: "BACKEND",
    items: "FastAPI · Flask · Node.js · Express · REST APIs",
  },
  {
    group: "FRONTEND",
    items: "React · Next.js · HTML · CSS",
  },
  {
    group: "DATA & AI",
    items: "Pandas · NumPy · Scikit-learn · TensorFlow",
  },
  {
    group: "DATABASES",
    items: "MySQL · PostgreSQL · SQLite · MongoDB",
  },
  {
    group: "ENGINEERING",
    items: "Git · GitHub · Postman · DSA · OOP · DBMS",
  },
];

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <main id="top">
      {/* ==================== HEADER ==================== */}

      {/* Cinematic background animation */}

        <div className="comet-layer" aria-hidden="true">
          {/* Twinkling background stars */}

          <div className="star-field" aria-hidden="true">
            <span className="twinkle-star" />
            <span className="twinkle-star" />
            <span className="twinkle-star large-star" />
            <span className="twinkle-star" />
            <span className="twinkle-star" />
            <span className="twinkle-star large-star" />
            <span className="twinkle-star" />
            <span className="twinkle-star" />
            <span className="twinkle-star large-star" />
            <span className="twinkle-star" />
          </div>
          <span className="comet comet-one" />
          <span className="comet comet-two" />
          <span className="comet comet-three" />

          <span className="comet-particle particle-one" />
          <span className="comet-particle particle-two" />
          <span className="comet-particle particle-three" />
          <span className="comet-particle particle-four" />
        </div>

      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Rahul K homepage"
        >
          <div className="avatar-frame">
            <img
              src="/IMAGE1.jpeg"
              alt="Rahul K"
            />
          </div>

          <div className="brand-copy">
            <strong>Rahul K</strong>
            <small>CSE / FULL-STACK</small>
          </div>
        </a>

        <nav
          className="main-nav"
          aria-label="Main navigation"
        >
          <a href="#work">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#research">RESEARCH</a>
          <a href="#certifications">CERTIFICATION</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a
          className="header-cta"
          href="#contact"
        >
          LET&apos;S TALK
          <ArrowUpRight size={16} />
        </a>
      </header>

      {/* ==================== HERO ==================== */}

      <section
        className="hero page-wrap"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <div className="status-pill">
            <Sparkles size={15} />
            SOFTWARE ENGINEERING · OPEN TO OPPORTUNITIES
          </div>

          <SectionLabel>
            01 / INTRODUCTION
          </SectionLabel>

          <h1 id="hero-title">
            BUILDING SYSTEMS
            <br />
            THAT <span>THINK FAST.</span>
          </h1>

          <p className="hero-description">
            I&apos;m Rahul, a Computer Science student at
            Dayananda Sagar University. I build full-stack
            applications, backend APIs, and practical
            AI-enabled products — with a focus on useful
            engineering, clean interfaces, and measurable
            outcomes.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#work"
            >
              EXPLORE MY WORK
              <ArrowDownRight size={17} />
            </a>

            <a
              className="button button-outline"
              href="https://github.com/karthikrahul02"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GITHUB
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={15} />
              BENGALURU, INDIA
            </span>

            <span>
              <Code2 size={15} />
              SOFTWARE · BACKEND · AI
            </span>
          </div>
        </div>

        <aside
          className="hero-panel"
          aria-label="Profile snapshot"
        >
          <div className="panel-topline">
            <span>PROFILE / SNAPSHOT</span>

            <span className="live-dot">
              ● AVAILABLE
            </span>
          </div>

          <div className="snapshot-grid">
            <div className="snapshot-cell">
              <span>CORE STACK</span>
              <strong>
                PYTHON
                <br />
                + REACT
              </strong>
            </div>

            <div className="snapshot-cell">
              <span>FOCUS</span>
              <strong>
                DSA
                <br />
                &amp; SYSTEMS
              </strong>
            </div>

            <div className="snapshot-cell">
              <span>PROJECTS</span>
              <strong>
                03
                <span className="metric-note">
                  {" "}FEATURED
                </span>
              </strong>
            </div>

            <div className="snapshot-cell">
              <span>APPROACH</span>
              <strong>
                BUILD.
                <br />
                MEASURE.
              </strong>
            </div>
          </div>

          <div className="education-card">
            <span>EDUCATION</span>

            <strong>
              B.Tech — Computer Science
            </strong>

            <p>
              Dayananda Sagar University
            </p>

            <small>
              Aug 2023 — Jul 2027
            </small>
          </div>

          <p className="panel-footnote">
            No inflated numbers. Just projects, iteration,
            and learning in public.
          </p>
        </aside>
      </section>

      {/* ==================== PROJECTS ==================== */}

      <section
        className="work-section section-wrap"
        id="work"
      >
        <div className="section-heading">
          <div>
            <SectionLabel>
              02 / SELECTED WORK
            </SectionLabel>

            <h2>
              BUILT TO SOLVE.
              <br />
              <span>MADE TO SHIP.</span>
            </h2>
          </div>

          <p>
            Three projects across AI decision systems,
            environmental intelligence, and full-stack
            product engineering.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-card-top">
                <span>
                  {project.number} / {project.eyebrow}
                </span>

                <BriefcaseBusiness size={19} />
              </div>

              <h3>
                {project.title}
              </h3>

              <p className="project-period">
                {project.period}
              </p>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-highlight">
                {project.highlight}
              </div>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  SOURCE CODE
                  <ArrowUpRight size={15} />
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIVE DEMO
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="demo-note">
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}

      <section
        className="skills-section section-wrap"
        id="skills"
      >
        <div className="section-heading compact-heading">
          <div>
            <SectionLabel>
              03 / TOOLKIT
            </SectionLabel>

            <h2>
              TOOLS I BUILD <span>WITH.</span>
            </h2>
          </div>

          <p>
            A practical, growing toolkit across frontend,
            backend, databases, and machine learning.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article
              className="skill-card"
              key={skill.group}
            >
              <span>
                {skill.group}
              </span>

              <p>
                {skill.items}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== RESEARCH ==================== */}

      <section
        className="research-section section-wrap"
        id="research"
      >
        <div className="research-panel">
          <div>
            <SectionLabel>
              04 / RESEARCH
            </SectionLabel>

            <h2>
              EXPERIMENT.
              <br />
              <span>VALIDATE.</span>
            </h2>
          </div>

          <div className="research-copy">
            <p className="research-kicker">
              CONFERENCE PAPER · ICISC 2026
            </p>

            <h3>
              LSTM-Based Stock Prediction, Anomaly
              Detection &amp; Risk Analysis
            </h3>

            <p>
              Research focused on forecasting and risk
              analysis in the Indian banking sector using
              historical market data, evaluating predictive
              performance alongside financial risk measures.
            </p>

            <p className="research-note">
              Add the official publication or proceedings
              link here when available.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATIONS ==================== */}

      <CertificateVault />

      {/* ==================== CONTACT ==================== */}

      <section
        className="contact-section section-wrap"
        id="contact"
      >
        <div className="contact-heading">
          <SectionLabel>
            06 / CONTACT
          </SectionLabel>

          <h2>
            READY FOR
            <br />
            <span>GOOD WORK.</span>
          </h2>

          <p>
            Interested in software engineering, backend
            systems, or practical AI? Let&apos;s connect.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-cards">
            <a
              className="contact-card"
              href="mailto:rahul002b@gmail.com"
            >
              <Mail />

              <span>
                <small>EMAIL</small>
                <strong>
                  rahul002b@gmail.com
                </strong>
              </span>

              <ArrowUpRight className="contact-arrow" />
            </a>

            <a
              className="contact-card"
              href="tel:+918431785448"
            >
              <Phone />

              <span>
                <small>PHONE</small>
                <strong>
                  +91 84317 85448
                </strong>
              </span>

              <ArrowUpRight className="contact-arrow" />
            </a>

            <a
              className="contact-card"
              href="https://github.com/karthikrahul02"
              target="_blank"
              rel="noreferrer"
            >
              <Github />

              <span>
                <small>GITHUB</small>
                <strong>
                  karthikrahul02
                </strong>
              </span>

              <ArrowUpRight className="contact-arrow" />
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/rahul-k-eng/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />

              <span>
                <small>LINKEDIN</small>
                <strong>
                  rahul-k-eng
                </strong>
              </span>

              <ArrowUpRight className="contact-arrow" />
            </a>
          </div>

          <aside className="mission-card">
            <span>
              CURRENT MISSION
            </span>

            <h3>
              Build reliable software, sharpen
              problem-solving, and turn strong projects into
              real-world engineering experience.
            </h3>

            <div className="mission-bottom">
              <span>
                <MapPin size={15} />
                BENGALURU, INDIA
              </span>

              <a href="mailto:rahul002b@gmail.com">
                START A CONVERSATION
                <ArrowUpRight size={15} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}

      <footer className="site-footer">
        <a href="#top">
          RAHUL K <span>↗</span>
        </a>

        <p>
          DESIGNED WITH INTENT. BUILT WITH CURIOSITY.
        </p>

        <span>
          © {new Date().getFullYear()} · ALL RIGHTS RESERVED
        </span>
      </footer>
    </main>
  );
}
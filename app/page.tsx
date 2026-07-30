import type { CSSProperties } from "react";

type VisualStyle = CSSProperties & {
  "--visual-a": string;
  "--visual-b": string;
  "--visual-c": string;
};

type StarStyle = CSSProperties & {
  "--star-size": string;
};

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  colors: VisualStyle;
};

type GalleryItem = {
  title: string;
  className: string;
  colors: VisualStyle;
};

const largeStarStyle: StarStyle = { "--star-size": "1.6rem" };
const smallStarStyle: StarStyle = { "--star-size": "0.9rem" };

const projects: Project[] = [
  {
    number: "01",
    title: "Quiet Interface Studies",
    category: "Web Design",
    year: "2026",
    description:
      "A placeholder project space for refined digital experiences, visual systems, and interaction studies.",
    colors: {
      "--visual-a": "#f1d7df",
      "--visual-b": "#dbe8f1",
      "--visual-c": "#fff8f0",
    },
  },
  {
    number: "02",
    title: "Human AI Experiments",
    category: "Creative Dev",
    year: "2026",
    description:
      "A future home for AI-assisted prototypes that make technical ideas feel more expressive and approachable.",
    colors: {
      "--visual-a": "#e6dcf2",
      "--visual-b": "#f5dce4",
      "--visual-c": "#f9fbff",
    },
  },
  {
    number: "03",
    title: "Visual Identity Notes",
    category: "Art Direction",
    year: "2026",
    description:
      "A flexible entry for brand atmosphere, typography, composition, and visual language exploration.",
    colors: {
      "--visual-a": "#dcecf0",
      "--visual-b": "#eee1f4",
      "--visual-c": "#fffdf8",
    },
  },
];

const galleryItems: GalleryItem[] = [
  {
    title: "Pale study",
    className: "gallery-piece gallery-piece--large",
    colors: {
      "--visual-a": "#f0d6df",
      "--visual-b": "#d9e8f0",
      "--visual-c": "#fffaf2",
    },
  },
  {
    title: "Lavender field",
    className: "gallery-piece gallery-piece--tall",
    colors: {
      "--visual-a": "#e6dcf2",
      "--visual-b": "#f4dce7",
      "--visual-c": "#f9f6fb",
    },
  },
  {
    title: "Soft signal",
    className: "gallery-piece gallery-piece--wide",
    colors: {
      "--visual-a": "#dbe8f1",
      "--visual-b": "#f1d7df",
      "--visual-c": "#fffdf8",
    },
  },
];

export default function Home() {
  return (
    <div className="art-page">
      <div className="ambient-field ambient-field--pink" />
      <div className="ambient-field ambient-field--blue" />
      <div className="ambient-field ambient-field--lilac" />

      <SiteHeader />

      <main>
        <Hero />
        <About />
        <SelectedWorks />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <a className="site-header__brand" href="#home" aria-label="Lumi Huang home">
          Lumi Huang
        </a>
        <nav className="site-header__nav" aria-label="Primary navigation">
          <a className="site-header__link" href="#about">
            About
          </a>
          <a className="site-header__link" href="#works">
            Works
          </a>
          <a className="site-header__link" href="#gallery">
            Gallery
          </a>
          <a className="site-header__link" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="site-container hero__grid">
        <div className="relative">
          <span
            aria-hidden="true"
            className="sparkle hero__star-one reveal reveal-delay-2"
            style={largeStarStyle}
          />
          <span
            aria-hidden="true"
            className="sparkle hero__star-two reveal reveal-delay-3"
            style={smallStarStyle}
          />
          <h1 className="hero__title reveal" id="hero-title">
            <span>Lumi</span>
            <span className="hero__title-line--offset">Huang</span>
          </h1>
        </div>

        <div className="hero__label reveal reveal-delay-1">
          <p>Visual / Web Designer</p>
          <p>Creative Developer</p>
        </div>

        <div className="hero__role reveal reveal-delay-2">
          <strong>Designing digital moments with softness and structure.</strong>
          <p>
            I design, build, and refine thoughtful digital experiences with
            design, code, and AI.
          </p>
        </div>
      </div>
      <a className="hero__scroll reveal reveal-delay-3" href="#about">
        Scroll
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section view-reveal" id="about" aria-labelledby="about-title">
      <div className="site-container">
        <p className="section-kicker">About</p>
        <div className="about-layout">
          <h2 className="about-statement" id="about-title">
            I make digital work feel more human.
          </h2>
          <div className="about-copy">
            <p className="type-lead">
              Lumi Huang is a Visual / Web Designer and Creative Developer
              working across visual design, front-end development, and
              AI-assisted creative workflows.
            </p>
            <p>
              This portfolio is being shaped as a living visual system: quiet
              enough to let the work breathe, expressive enough to feel authored,
              and precise enough to support thoughtful digital experiences.
            </p>
            <ul className="discipline-list" aria-label="Selected disciplines">
              <li>
                Visual Design <span>Identity / Systems</span>
              </li>
              <li>
                Web Design <span>Editorial / Responsive</span>
              </li>
              <li>
                Creative Development <span>Code / AI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWorks() {
  return (
    <section className="section view-reveal" id="works" aria-labelledby="works-title">
      <div className="site-container">
        <p className="section-kicker">Selected Works</p>
        <div className="works">
          <div>
            <h2 className="sr-only" id="works-title">
              Selected Works
            </h2>
            <div className="work-list">
              {projects.map((project) => (
                <a className="project-row" href="#contact" key={project.number}>
                  <span className="project-row__number">{project.number}</span>
                  <span>
                    <h3 className="project-row__title">{project.title}</h3>
                    <p className="project-row__description">
                      {project.description}
                    </p>
                    <span
                      aria-label={`${project.title} visual placeholder`}
                      className="mobile-project-visual"
                      role="img"
                      style={project.colors}
                    />
                  </span>
                  <span className="project-row__meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <aside className="project-preview" aria-label="Project preview">
            <div
              aria-label="Abstract preview placeholder for selected portfolio work"
              className="project-preview__visual"
              role="img"
              style={projects[0].colors}
            />
            <p className="project-preview__caption">
              Project imagery will replace these quiet placeholders as Lumi adds
              final case studies.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section
      className="section section--compact view-reveal"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="site-container">
        <p className="section-kicker">Gallery</p>
        <div className="grid gap-10">
          <h2 className="type-heading max-w-4xl" id="gallery-title">
            Experiments, fragments, and visual notes.
          </h2>
          <div className="gallery-layout">
            {galleryItems.map((item) => (
              <figure className={item.className} key={item.title} style={item.colors}>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="section section--spacious view-reveal"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="site-container contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="contact-title" id="contact-title">
            Let&apos;s create something thoughtful.
          </h2>
        </div>

        <div className="contact-panel">
          <p className="type-lead">
            I&apos;d love to hear about your project, collaboration, or visual
            idea.
          </p>
          <form className="grid gap-6">
            <label className="field" htmlFor="name">
              <span className="field__label">Name</span>
              <input className="input" id="name" name="name" type="text" />
            </label>
            <label className="field" htmlFor="email">
              <span className="field__label">Email</span>
              <input className="input" id="email" name="email" type="email" />
            </label>
            <label className="field" htmlFor="message">
              <span className="field__label">Message</span>
              <textarea className="input min-h-32 resize-y" id="message" name="message" />
            </label>
            <button className="button button--secondary justify-self-start" type="submit">
              Send note
            </button>
          </form>
          <div className="contact-links" aria-label="Contact links">
            <a href="mailto:hello@example.com">
              Email <span>Placeholder until Lumi adds her address</span>
            </a>
            <a href="#home">
              Availability <span>Open to thoughtful projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

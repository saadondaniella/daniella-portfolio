import { useState } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero">
        <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
          <a href="/" className="logo">
            Daniella Saadon
          </a>

          <nav className="nav-links">
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </header>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>

        <div className="hero-content">
          <div className="hero-title">
            <div className="lavender-shape"></div>
            <h1>
              Daniella <span>Saadon</span>
            </h1>
            <p className="portfolio-year">Web Development Portfolio 2026</p>

            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="intro-left">
          <p>
            Full-stack development student in Gothenburg exploring front-end,
            back-end and everything in between.
          </p>
        </div>

        <div className="intro-right">
          <p>
            I’m a developer in the making, always learning something new and
            probably trying something I haven’t done before. I love exploring
            both sides of the web, how things work behind the scenes and how
            they look and feel for the person using them.
          </p>

          <a href="/projects" className="text-link">
            See selected work
          </a>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-heading">
          <h2>Selected projects</h2>
          <div className="divider"></div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

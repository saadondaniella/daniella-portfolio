import "../App.css";
import Navbar from "../components/Navbar.jsx";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  const handleOrbMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    event.currentTarget.style.setProperty("--orb-x", `${x * 14}px`);
    event.currentTarget.style.setProperty("--orb-y", `${y * 14}px`);
  };

  const resetOrb = (event) => {
    event.currentTarget.style.setProperty("--orb-x", "0px");
    event.currentTarget.style.setProperty("--orb-y", "0px");
  };

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <div className="hero-title">
            <div
              className="lavender-shape"
              onPointerMove={handleOrbMove}
              onPointerLeave={resetOrb}
              aria-hidden="true"
            >
              <div className="orb-core">
                <div className="orb-glow"></div>
                <div className="orb-ring orb-ring-one"></div>
                <div className="orb-ring orb-ring-two"></div>
                <div className="orb-highlight"></div>
              </div>
              <div className="orb-satellite orb-satellite-one"></div>
              <div className="orb-satellite orb-satellite-two"></div>
              <div className="orb-satellite orb-satellite-three"></div>
            </div>

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
            back-end and everything in between. I’m currently looking for an
            internship from November 23, 2026 to May 28, 2027, where I can learn
            alongside experienced developers, ask plenty of questions and
            contribute along the way.
          </p>
        </div>

        <div className="intro-right">
          <p>
            I’m a developer in the making, always learning something new and
            probably trying something I haven’t done before. I love exploring
            both sides of the web, how things work behind the scenes and how
            they look and feel for the person using them.
          </p>

          <a href="#projects" className="text-link">
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
              slug={project.slug}
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

export default Home;

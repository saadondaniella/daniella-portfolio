import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProjectPage.css";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  const currentIndex = projects.findIndex((item) => item.slug === slug);

  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="project-page">
          <section className="project-hero">
            <h1>Project not found</h1>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="project-page">
        <section className="project-hero">
          <Link to="/#projects" className="project-back">
            ← Projects
          </Link>

          <div className="project-title">
            <h1>{project.title}</h1>

            <p className="project-meta">
              {project.year} &nbsp;&nbsp;&nbsp; {project.type}{" "}
              &nbsp;&nbsp;&nbsp;
              {project.course}
            </p>
          </div>

          <div className="divider"></div>

          <div className="project-cover">
            <img src={project.image} alt={project.title} />
          </div>

          <section className="project-overview">
            <div className="overview-text">
              <p className="project-label">Overview</p>

              <p className="overview-description">{project.overview}</p>
            </div>

            <div className="overview-details">
              <div>
                <p className="project-label">Technologies</p>

                <ul className="technology-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <p className="project-label">Links</p>

                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Live website →
                  </a>
                )}

                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    GitHub repository →
                  </a>
                )}
              </div>
            </div>
          </section>

          {project.mobileImages && (
            <section className="project-mobile-images">
              {project.mobileImages.map((image, index) => (
                <div className="mobile-image" key={image}>
                  <img
                    src={image}
                    alt={`${project.title} mobile view ${index + 1}`}
                  />
                </div>
              ))}
            </section>
          )}
          <section className="next-project">
            <p className="project-label">Next project</p>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="next-project-link"
            >
              {nextProject.title}
            </Link>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectPage;

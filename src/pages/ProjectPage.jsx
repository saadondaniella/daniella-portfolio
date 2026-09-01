import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  return (
    <main className="project-page">
      <section className="project-hero">
        <a href="/#projects" className="project-back">
          ← Projects
        </a>

        <div className="project-title">
          <h1>{project.title}</h1>

          <p className="project-meta">2026 · Mobile & Desktop</p>
        </div>

        <div className="divider"></div>

        <div className="project-cover">
          <img src={project.image} alt={project.title} />
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;

import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ slug, title, description, technologies, image }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${slug}`} className="project-card-link">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>

        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>

          <p className="project-technologies">{technologies.join(" · ")}</p>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;

import "./ProjectCard.css";

function ProjectCard({ title, description, technologies, image }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-info">
        <h3>{title}</h3>

        <p>{description}</p>

        <p className="project-technologies">
          {technologies.join("\u00A0 · \u00A0")}
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;

import "./Contact.css";
import daniellaPortrait from "../assets/Daniella.JPG";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <div className="contact-links">
          <a href="mailto:saadondaniella@gmail.com">Email</a>

          <a
            href="https://github.com/saadondaniella"
            target="_blank"
            rel="noreferrer"
            className="contact-link-italic"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/daniella-saadon-3bbb86aa/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="contact-right">
        <img src={daniellaPortrait} alt="Portrait of Daniella" />
      </div>
    </section>
  );
}

export default Contact;

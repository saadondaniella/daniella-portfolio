import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <a href="/" className="logo">
          Daniella Saadon
        </a>

        <nav className="nav-links">
          <a href="/#projects">Projects</a>
          <a href="/about">About</a>
          <a href="/about#education">Education</a>
          <a href="/#contact">Contact</a>
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
          <a href="/#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/about#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>

          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

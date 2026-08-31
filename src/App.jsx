import "./App.css";

function App() {
  return (
    <main>
      <section className="hero">
        <header className="navbar">
          <a href="/" className="logo">
            Daniella Saadon
          </a>

          <nav className="nav-links">
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-content">
          <div className="hero-title">
            <div className="lavender-shape"></div>
            <h1>
              Daniella <span>Saadon</span>
            </h1>
            <p className="portfolio-year">Portfolio 2026</p>

            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="intro">
        <p>
          Full-stack development student in Gothenburg exploring front-end,
          back-end and everything in between.
        </p>

        <p>
          I’m a developer in the making, always learning something new and
          probably trying something I haven’t done before. I love exploring both
          sides of the web, how things work behind the scenes and how they look
          and feel for the person using them.
        </p>
      </section>
    </main>
  );
}

export default App;

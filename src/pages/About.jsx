import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import daniellaImage from "../assets/about/desk.jpg";
import { useState } from "react";

function About() {
  const [openEducation, setOpenEducation] = useState(null);

  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-section">
          <p className="project-label">About</p>

          <h1>
            Hello, I’m <span>Daniella</span>
          </h1>

          <div className="divider"></div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I’m not really afraid of making big changes in life. Moving into
                web development was definitely one of them. It felt scary,
                exciting and somehow completely right at the same time. I’m a
                curious person and I really enjoy learning new things, even if
                that often means throwing myself into something I have
                absolutely no idea how to do yet.
              </p>

              <p>
                I care a lot about the details and can probably spend way too
                long getting something to look or feel just right. I like the
                mix of logic and creativity in development, figuring out how
                something works behind the scenes while still caring about the
                experience on the other side of the screen.
              </p>

              <p>
                Outside of all that, I try to keep some balance. Training and
                yoga are a big part of my routine, and I love travelling, seeing
                new places and getting a change of perspective. I think a lot of
                my inspiration comes from just being somewhere different,
                whether that’s another country, a new environment or simply away
                from a screen for a while.
              </p>

              <p>
                Right now though, this desk gets a lot of my time. Early
                mornings, late nights, too many browser tabs and usually
                something I’m trying to figure out. I’m still very much learning
                my way through this huge cyber world, but I think that’s also
                what I like about it. There’s always something new to
                understand.
              </p>
            </div>

            <div className="about-image">
              <img src={daniellaImage} alt="Daniella Saadon" />
            </div>
          </div>

          <section className="education" id="education">
            <p className="project-label">Education</p>

            <div className="divider"></div>

            <div className="education-list">
              <div className="education-item">
                <div>
                  <p className="education-year">2025–2027</p>
                  <h2>Web Developer</h2>
                  <p>Yrgo · Gothenburg</p>

                  <button
                    className="education-toggle"
                    onClick={() =>
                      setOpenEducation(openEducation === "yrgo" ? null : "yrgo")
                    }
                  >
                    {openEducation === "yrgo" ? "Show less" : "Show more"}
                  </button>
                </div>

                {openEducation === "yrgo" && (
                  <div className="education-details">
                    <p>
                      A two-year full-time program focused on full-stack web
                      development, covering everything from frontend and backend
                      development to databases and server environments. The
                      program is very hands-on, with most of the learning
                      happening through individual and collaborative projects
                      where we get to turn what we learn into actual
                      applications.
                    </p>
                    <br></br>
                    <p>
                      Along the way, we work with different languages,
                      frameworks and tools used in the industry, while also
                      learning how to work in development teams using Git,
                      GitHub and Git Flow. We get experience working with open
                      source projects, APIs and different development workflows,
                      as well as deploying our projects using platforms and
                      environments suited to each project.
                    </p>
                    <br></br>
                    <p>
                      A big part of the education is learning how all the
                      different pieces of web development connect, from an idea
                      and design to development, collaboration and finally
                      getting something live on the web.
                    </p>

                    <div className="education-courses">
                      <p>Courses</p>

                      <ul>
                        <li>Digital Design — 20p</li>
                        <li>Frontend Development — 40p</li>
                        <li>Databases & Data Sources — 15p</li>
                        <li>Programming — 70p</li>
                        <li>Web Frameworks — 60p</li>
                        <li>Project Methodology — 30p</li>
                        <li>Degree Project — 30p</li>
                        <li>Internship — 135p</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="education-item">
                <div>
                  <p className="education-year">2023–2025</p>
                  <h2>Visual Merchandising</h2>
                  <p>IHM Business School · Gothenburg</p>

                  <button
                    className="education-toggle"
                    onClick={() =>
                      setOpenEducation(openEducation === "ihm" ? null : "ihm")
                    }
                  >
                    {openEducation === "ihm" ? "Show less" : "Show more"}
                  </button>
                </div>

                {openEducation === "ihm" && (
                  <div className="education-details">
                    <p>
                      A two-year full-time program focused on visual
                      communication and the connection between physical and
                      digital experiences. A big part of the education was
                      learning how to bridge the gap between physical retail and
                      e-commerce, creating a consistent customer experience
                      across different channels.
                    </p>

                    <p>
                      The program was highly creative and largely digital. We
                      worked with everything from visual concepts, graphic
                      identities and customer journeys to 3D visualization in
                      SketchUp. We also created digital experiences and websites
                      using tools and platforms such as Wix, Shopify and Framer,
                      while Canva was part of our everyday workflow for visual
                      communication and content creation.
                    </p>
<br></br>
                    <p>
                      Alongside the creative work, we learned about visual
                      merchandising, campaigns, branding and the business side
                      of creating experiences that work across both physical and
                      digital spaces. For me, the education became a strong
                      foundation in visual thinking, design and digital
                      experiences, something I’ve brought with me into web
                      development today.
                    </p>

                    <div className="education-courses">
                      <p>Courses</p>

                      <ul>
                        <li>Business Acumen</li>
                        <li>Retail Economics</li>
                        <li>Data Analysis</li>
                        <li>Design & Visual Concepts</li>
                        <li>Digital Store Concepts for Unified Commerce</li>
                        <li>Digital Marketing</li>
                        <li>Sustainable Commerce</li>
                        <li>Customer Journey in Omnichannel Commerce</li>
                        <li>Leadership & Communication</li>
                        <li>Logistics & Purchasing</li>
                        <li>Visual Sales</li>
                        <li>Internship – Work-Based Learning 1 & 2</li>
                        <li>Degree Project – Business Case</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;

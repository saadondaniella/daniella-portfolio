import achiCover from "../assets/projects/house-of-achi/Achi.png";
import capitalQuizCover from "../assets/projects/capital-quiz/capitalquiz.png";
import couplesTherapyCover from "../assets/projects/parterapi/couplestherapy.png";
import yrgopelagCover from "../assets/projects/yrgopelag/yrgopelag.png";

const projects = [
  {
    id: 1,
    slug: "house-of-achi",
    title: "House Of Achi",
    description:
      "A project I took on outside of my studies, combining development, design and visual storytelling for a Gothenburg experience studio.",
    technologies: ["WordPress", "PHP", "JavaScript"],
    image: achiCover,
  },
  {
    id: 2,
    slug: "capital-quiz",
    title: "Capital Quiz",
    description:
      "A team project where React met C# — and our geography knowledge was put to the test.",
    year: "2026",
    type: "Mobile & Desktop",
    course: "Programming (C#)",
    technologies: ["React", "C#", "ASP.NET Core", "Docker", "REST API"],
    url: "https://capitalquiz2.onrender.com/",
    repo: "https://github.com/ESengenbjerg/CapitalQuiz.git",
    overview:
      "A full-stack quiz application built in a team using React and ASP.NET Core. The app fetches random country questions from a C# API and allows users to submit and view highscores.",

    solution:
      "The frontend communicates with a custom C# API, while the backend is containerized with Docker and deployed on Render.",

    image: capitalQuizCover,
  },
  {
    id: 3,
    slug: "yrgopelag",
    title: "Yrgopelag",

    description:
      "A full-stack hotel booking project where bookings, data and business logic all had to work together.",

    year: "2026",
    type: "Desktop",
    course: "Programming",

    technologies: ["PHP", "SQL", "HTML", "CSS"],

    url: "https://developedbydaniella.se/yrgopelag/",
    repo: "https://github.com/saadondaniella/theWhiteLotus-yrgopelag",

    overview:
      "A complex full-stack project where I built a hotel booking system for a fictional hotel concept.",

    solution:
      "The project included booking handling, revenue and cost calculations, API integration, database management, accessibility considerations and structured PHP code following best practices.",

    image: yrgopelagCover,
  },
  {
    id: 4,
    slug: "couples-therapy",
    title: "Couples Therapy",

    description:
      "A multiplayer memory game built around real-time collaboration, scoring and a 3D game board.",

    year: "2026",
    type: "Desktop",
    course: "Web Frameworks",

    technologies: [
      "Node.js",
      "JavaScript",
      "WebSockets",
      "Three.js",
      "HTML",
      "CSS",
    ],

    url: "https://couples-therapy-oyua.onrender.com/",
    repo: "https://github.com/Timalm90/Couples-Therapy.git",

    overview:
      "A collaborative multiplayer memory game built with Node.js and WebSockets.",

    solution:
      "The game uses real-time state handling and scoring logic, with a 3D board built using Three.js.",

    image: couplesTherapyCover,
  },
];

export default projects;

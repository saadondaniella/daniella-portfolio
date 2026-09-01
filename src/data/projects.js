import achiCover from "../assets/projects/house-of-achi/Achi.png";
import capitalQuizCover from "../assets/projects/capital-quiz/capitalquiz.png";
import couplesTherapyCover from "../assets/projects/parterapi/couplestherapy.png";
import yrgopelagCover from "../assets/projects/yrgopelag/yrgopelag.png";
import achiPhone1 from "../assets/projects/house-of-achi/achi-phone1.png";
import achiPhone2 from "../assets/projects/house-of-achi/achi-phone2.png";
import yrgopelagPhone1 from "../assets/projects/yrgopelag/yrgopelag-phone1.png";
import yrgopelagPhone2 from "../assets/projects/yrgopelag/yrgopelag-phone2.png";
import couplesTherapyPhone1 from "../assets/projects/parterapi/parterapi-phone1.png";
import couplesTherapyPhone2 from "../assets/projects/parterapi/parterapi-phone2.png";
import capitalQuizPhone1 from "../assets/projects/capital-quiz/capitalquiz-phone1.png";
import capitalQuizPhone2 from "../assets/projects/capital-quiz/capitalquiz-phone2.png";

const projects = [
  {
    id: 1,
    slug: "house-of-achi",
    title: "House Of Achi",
    description:
      "A project I took on outside of my studies, combining development, design and visual storytelling for a Gothenburg experience studio.",
    year: "2026",
    type: "Mobile & Desktop",
    course: "Independent client project",
    technologies: ["WordPress", "PHP", "JavaScript", "ACF"],
    url: "https://houseofachi.se",
    repo: "https://github.com/saadondaniella/house-of-achi-theme",
    overview:
      "House of Achi is a Gothenburg-based experience studio working with events, spaces and visual experiences. I took on the project outside of my studies and designed and developed their website from the ground up. The site is built as a custom WordPress theme using PHP, JavaScript and ACF, with a flexible case system that allows the client to add and update projects, images and videos themselves. A big part of the project was balancing the visual, media-heavy design with responsive behaviour and a structure that is easy for the client to manage.",
    image: achiCover,
    mobileImages: [achiPhone1, achiPhone2],
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
      "Capital Quiz is a full-stack quiz application built as a team project during our C# programming course. We created the frontend in React and built our own API using C# and ASP.NET Core, which provides random country and capital questions to the game. Users can play through the quiz, submit their score and view the highscore list. The backend was containerized with Docker and deployed on Render, giving us experience connecting a React frontend to our own deployed API.",
    solution:
      "The frontend communicates with a custom C# API, while the backend is containerized with Docker and deployed on Render.",
    image: capitalQuizCover,
    mobileImages: [capitalQuizPhone1, capitalQuizPhone2],
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
      "Yrgopelag is a full-stack hotel booking system built during our PHP programming course. The project involved much more than displaying available rooms, with booking logic, database management, API integration and calculations for costs and revenue all working together. I built the application using PHP and SQL and worked with structuring the backend logic while keeping the booking flow clear for the user. The project was a good introduction to building a larger application where many different parts depend on each other.",
    solution:
      "The project included booking handling, revenue and cost calculations, API integration, database management, accessibility considerations and structured PHP code following best practices.",
    image: yrgopelagCover,
    mobileImages: [yrgopelagPhone1, yrgopelagPhone2],
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
    technologies: ["Node.js", "JavaScript", "WebSockets", "Three.js"],
    url: "https://couples-therapy-oyua.onrender.com/",
    repo: "https://github.com/Timalm90/Couples-Therapy.git",
    overview:
      "Couples Therapy is a collaborative multiplayer memory game built during our Web Frameworks course. The game uses Node.js and WebSockets to keep players and game state synchronized in real time, including turns, matched cards and scoring. We also built the game board in Three.js, giving the traditional memory game a 3D environment. The project combined real-time communication, game logic and frontend development in a way that was very different from the more traditional web applications we had built before.",
    solution:
      "The game uses real-time state handling and scoring logic, with a 3D board built using Three.js.",
    image: couplesTherapyCover,
    mobileImages: [couplesTherapyPhone1, couplesTherapyPhone2],
  },
];

export default projects;

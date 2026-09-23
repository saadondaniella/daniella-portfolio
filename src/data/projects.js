import achiCover from "../assets/projects/house-of-achi/achi.png";
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
import cosmoSphereCover from "../assets/projects/cosmo-sphere/cosmosphere.png";
import cosmoSpherePhone1 from "../assets/projects/cosmo-sphere/cosmosphere-phone1.png";
import cosmoSpherePhone2 from "../assets/projects/cosmo-sphere/cosmosphere-phone2.png";
import treatCover from "../assets/projects/treat/treat-desktop.png";
import treatImage1 from "../assets/projects/treat/treat-phone1.png";
import treatImage2 from "../assets/projects/treat/treat-phone2.png";

const projects = [
  {
    id: 1,
    slug: "house-of-achi",
    title: "House Of Achi",
    description:
      "A project I took on alongside my studies for a newly started creative studio with one goal to creating experiences people won’t forget.",
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
    id: 6,
    slug: "treat",
    title: "Treat",
    description:
      "Pick a mood, choose your pill and make it yours. Apparently we made it pretty well too, because this one took home first place.",

    year: "2026",
    type: "Desktop",
    course: "Cross-disciplinary project",

    technologies: ["React", "Three.js", "JavaScript", "GLB", "Figma"],

    url: "https://treat-configurator.vercel.app/",
    repo: "https://github.com/saadondaniella/configurator",

    overview:
      "Treat is an interactive 3D pill configurator created as a cross-disciplinary project together with students from Web Development, Digital Design and Computer Graphics Design. Each discipline brought a different part of the experience to life: the Digital Designers developed the concept, visual identity and user experience, the CG Designers created the 3D models and materials, and we as Web Developers built the interactive configurator and brought everything together in the browser. The experience takes the user through a story-driven flow where they can choose their mood, pill shape, colour and pack size while seeing their choices come to life in 3D. With its playful concept and a different approach to how a configurator can look and work, Treat was awarded Best Project by the jury.",

    solution:
      "On the development side, we built the configurator in React and integrated the CG team's GLB models using Three.js. The application dynamically switches between different 3D models based on the user's selections, with hover previews, interactive camera views and OrbitControls for exploring the product. Working across three disciplines meant continuously adapting the implementation to both the design and the 3D assets, especially when it came to model positioning, materials, lighting and keeping the experience responsive to every selection. After presenting the finished projects, Treat was selected by the jury as the winning configurator.",

    image: treatCover,
    mobileImages: [treatImage1, treatImage2],
  },
  {
    id: 2,
    slug: "capital-quiz",
    title: "Capital Quiz",
    description:
      "Guess the capital, get a point. Sounds simple enough! But the code behind it had other plans.",
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
      "We got an island, some play money and the freedom to open our own fictional hotel, then had to make sure our classmates could actually book a stay.",
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
      "Couples therapy, but make it a memory game. Flip the cards, find the matches and discover what your partner has been hiding.",
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
  {
    id: 5,
    slug: "cosmo-sphere",
    title: "Cosmo Sphere",
    description:
      "A chance to let our creativity run wild and turn a fictional cinema into its own little sci-fi universe.",
    year: "2025",
    type: "Mobile & Desktop",
    course: "Digital Design",

    technologies: ["Figma", "PHP", "JavaScript", "HTML", "CSS"],

    url: "cosmo-sphere.freedev.app",
    repo: "https://github.com/saadondaniella/cosmo-sphere",

    overview:
      "Cosmo Sphere is a fictional sci-fi cinema created during our Digital Design course, where the main focus was on visual identity and the design process. We developed the concept from the ground up, starting with the visual direction and designing the website in Figma before bringing it to life through code. We wanted the website to feel like its own little sci-fi universe rather than a traditional cinema website, using typography, imagery, colour and motion to build the atmosphere. The final website was developed from our Figma designs, with details such as an animated starry background adding another layer to the experience.",

    image: cosmoSphereCover,
    mobileImages: [cosmoSpherePhone1, cosmoSpherePhone2],
  },
];

export default projects;

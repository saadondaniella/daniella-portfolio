import achiCover from "../assets/projects/house-of-achi/Achi.png";
import capitalQuizCover from "../assets/projects/capital-quiz/capitalquiz.png";
import couplesTherapyCover from "../assets/projects/parterapi/couplestherapy.png";
import yrgopelagCover from "../assets/projects/yrgopelag/yrgopelag.png";

const projects = [
  {
    id: 1,
    title: "House Of Achi",
    description: "A full-stack website for a Gothenburg experience studio.",
    technologies: ["WordPress", "PHP", "JavaScript"],
    image: achiCover,
  },
  {
    id: 2,
    title: "Capital Quiz",
    description: "A quiz application focused on geography and capitals.",
    technologies: ["React", "JavaScript"],
    image: capitalQuizCover,
  },
  {
    id: 3,
    title: "Yrgopelag",
    description: "A hotel booking project built as part of my studies.",
    technologies: ["PHP", "JavaScript"],
    image: yrgopelagCover,
  },
  {
    id: 4,
    title: "Couples Therapy",
    description:
      "A multiplayer memory game built with Node.js and WebSockets. Real-time state handling, scoring logic and a 3D board using Three.js.",
    technologies: ["Node", "JavaScript", "Websockets", "Three.js"],
    image: couplesTherapyCover,
  },
];

export default projects;

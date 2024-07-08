import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const ABOUT_TEXT =
  "I´m a 27 years old developer from Slovakia based in Brno, Czechia. After I finished my university studies in Mass Media, I started working as a project and installation manager. During my 5-years in that field, I´ve collected many personal skills including teamwork, customer communication and attention to detail. I felt like it was time for me to grow professionally, and that was when I discovered my fascination with frontend development. At first as a hobby, later as a passion which progressed into intensive courses and multiple side projects. I enjoy finding creative solutions and focusing on details in my projects. When I'm not coding, you can find me playing my synths in my home studio, exercising in the gym or exploring nature on my bicycle.";

export const SKILLS = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "JavaScript",
  },
  {
    id: 4,
    title: "ReactJS",
  },
  {
    id: 5,
    title: "React Router",
  },
  {
    id: 6,
    title: "Tailwind",
  },
  {
    id: 7,
    title: "GitHub",
  },
  {
    id: 8,
    title: "Firebase",
  },
  {
    id: 9,
    title: "Framer-Motion",
  },
  {
    id: 10,
    title: "VSCode",
  },
  {
    id: 11,
    title: "Netlify",
  },
  {
    id: 12,
    title: "Figma",
  },
];

export const PROJECTS = [
  {
    title: "This Portfolio",
    image: project1,
    description:
      "My personal portfolio website showcasing myself, my projects, skills, and contact information.",
    technologies: ["ReactJS", "Tailwind", "Framer-motion"],
    ghlink: "https://github.com/martinkapral/react-portfolio",
    sitelink: "https://martinkapral.netlify.app/",
  },
  {
    title: "BRNO.info",
    image: project5,
    description:
      "This website serves as a resource for getting to know the city of Brno. It offers a wide variety of maps and charts with detailed data.",
    technologies: ["ReactJS", "React Router", "Leaflet JS"],
    ghlink: "https://github.com/martinkapral/BRNO.info",
    sitelink: "https://brno-info.netlify.app/",
  },
  {
    title: "Van-Life",
    image: project2,
    description:
      "Van rental app which offers a list of available vans, complete with all the necessary information for your perfect road trip.",
    technologies: ["ReactJS", "React Router", "Firebase"],
    ghlink: "https://github.com/martinkapral/van-life2",
    sitelink: "https://van-life-2.netlify.app/",
  },
  {
    title: "miniSOUNDTOOLS",
    image: project3,
    description:
      "This single page web app features a suite of compact tools tailored for musicians, music producers and beat makers.",
    technologies: ["HTML", "CSS", "Vanilla Javascript"],
    ghlink: "https://github.com/martinkapral/miniSOUNDTOOLS",
    sitelink: "https://martinkapral.github.io/miniSOUNDTOOLS/",
  },
  {
    title: "numbrrrs",
    image: project4,
    description:
      "This game challenges you by timing how quickly you can solve 'numbrrrs' game. Track your personal best time and enjoy playing.",
    technologies: ["ReactJS", "Javascript", "CSS"],
    ghlink: "https://github.com/martinkapral/numbrrrs",
    sitelink: "https://numbrrrs.netlify.app/",
  },
];

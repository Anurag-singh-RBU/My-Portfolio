import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI and UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Higher Education",
    company_name: "Ramdeobaba University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Pushing the boundaries of knowledge and innovation in the field of Computer Science.",
      "Currently pursing 4 years Bachelors degree (Btech) in Computer Science and Engineering.",
      "Current CGPA : 9.35",
      "Participating in various coding competitions and tech Events to enhance my skills.",
    ],
  },
  {
    title: "Secondary Education",
    company_name: "RK High School and College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2021 - Feb 2023",
    points: [
      "Completed my secondary education with a focus on Science and Mathematics.",
      "Prepared for JEE and other competitive exams.",
      "Scored 98.97 percentile in JEE Mains 2024 and 97.63 percentile in MHTCET 2023.",
      "Focused on building a strong foundation in programming (especially in C language) and problem-solving skills.",
    ],
  },
  {
    title: "Contributon",
    company_name: "GitHub Open Source Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Contributed to the development of a web application for a local business.",
      "Worked in a team to design and implement a project and gained experience of React Tanstack Query and Backend Stuff.",
      "Acquired expertise in version control and web development with Git and Github.",
    ],
  },
  {
    title: "AlgoPrep X",
    company_name: "Mentor Challenge",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Built a full-stack Media Player with user authentication , playlist management , and audio controls using MERN Stack.",      
      "Developed a real-time Chat Application using Firebase for seamless authentication and live messaging",
      "Actively exploring freelancing opportunities and looking for clients to work with on web development projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CricVortex",
    description:
      "Web-based platform that allows users to watch live match scores , upcoming fixtures , and real-time cricket insights all in one place , alongwith a manual scorecard feature.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Anurag-singh-RBU/CrickVortex",
  },
  {
    name: "ShadYx UI",
    description:
      "UI components library that offers awesome reusable components for building web applications , create stunning websites and enjoy the flow from COPY to VIBE.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Scrivo",
    description:
      "A full-featured project management platform designed to streamline task tracking and team collaboration through dashboards , customizable workflows , and real-time updates.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "neonDB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Anurag-singh-RBU/",
  },
];

export { services, technologies, experiences, testimonials, projects };
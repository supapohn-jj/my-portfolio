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
    bank,
    travel,
    dashboard,
    education,
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
  
{/* edit this one pls*/}
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "UX UI",
      icon: mobile,
    },
    {
      title: "Mobile Development",
      icon: backend,
    },
    {
      title: "Technology",
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
      title: "Worked on SRS for Web Application for Study assistance",
      company_name: "school project",
      icon: education,
      iconBg: "#383E56",
      date: "August 2021 - November 2021",
      points: [
        "worked as a team, Worked on Software Requirements Specification for Web Application for study assistance.",
      ],
    },
    {
      title: "Designed UI for mobile application for study assistance",
      company_name: "school project",
      icon: education,
      iconBg: "#E6DEDD",
      date: "November 2021 - December 2021",
      points: [
        "worked as a team, designed mobile application for study assistance for primary school.",
      ],
    },
    {
      title: "Designed UI for Reg Chula website",
      company_name: "school project",
      icon: education,
      iconBg: "#383E56",
      date: "April 2022 - May 2022",
      points: [
        "worked as team, gathered user requirements for the registration site.",
        "re-designed UI and the workflows throughout the website.",
        "built prototype using Figma.",
      ],
    },
    {
      title: "Worked on data preprocessing and data visualisation",
      company_name: "school project",
      icon: education,
      iconBg: "#383E56",
      date: "October 2022 - November 2022",
      points: [
        "used Python and RapidMinor in data preprocessing and used Tableau for data visualisation."
      ],
    },
    {
      title: "Built Web Application for Pet Adoption",
      company_name: "senior project",
      icon: education,
      iconBg: "#E6DEDD",
      date: "October 2022 - June 2023",
      points: [
        "worked as a team, gathered user requirements.",
        "created framework to visualised the web app layouts. designed UI, then created the prototype using Figma and Miro.",
        "designed and set up database structure and developed database schema using mySqlWorkbench.",
        "Used React.js frameworks and libraries to build responsive user interfaces.",
        "used Node.js to develop server logic protocol and manage database connections.",
        "Utilised MySQL to store and retrieve data, implementing secure authentication and authorisation mechanisms.",
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
  
  //Edit this pls

  const projects = [
    {
      name: "Campier",
      description:
        "my first next.js web application,l have watched tutorial on YouTube. I was amazed by how powerful Next.js really is. Next. JS offers such as server side rendering- file-based routing and next. JS image optimisation I can't wait to learn and discover more about this amazing framework.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/",
    },
    {
      name: "WeBank",
      description:
        "one of my most pretty looking web application for me the colour combination is everything, I use react framework and tailwind CSS in this project and it's a bank that want to promote their new product in a very cool way.",
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
      image: bank,
      source_code_link: "https://github.com/",
    },
    {
      name: "Shopier",
      description:
        "React. js is on of my most favourite JavaScript framework, this one is the project that I want to try for so long, it's an admin dashboard of a online store and i was using React alongside with some tools that I personally like, like tailwind(this is also my favourite). lt has a lot of charts, so I used SyncFusion for creating those beautiful charts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "syncfusion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/",
    },
    {
      name: "3D portfolio",
      description:
        "Three.js is one of the most fasinating tool, this is my first time using Three.js with frammer motion and cool react libraru like react-tilt, i had a fun time developing this project and i want to learn more about Three.js .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
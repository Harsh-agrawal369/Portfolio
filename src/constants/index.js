import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Building the future, one line of code at a time. As a Software Engineering Student, I turn complex problems into elegant solutions, leveraging cutting-edge technologies and innovative thinking. Let's code the future together.`;

export const ABOUT_TEXT = `Hola Amigo! I'm Harsh Agrawal, final year B.Tech Information Technology student at Vellore Institute of Technology.I am passionate about software engineering and have developed a strong skill set in both front-end and back-end technologies, like React, Node.js, MySQL, and MongoDB. Through internships and academic projects, I have gained hands-on experience and enjoy solving complex problems with innovative solutions. I also have a keen interest in artificial intelligence and machine learning, continuously exploring new advancements in these fields. With a commitment to excellence and a drive to make a meaningful impact, I am eager to contribute to the tech industry.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 - Oct 2023",
    role: "Technical Intern",
    company: "Certainty Infotech Pvt. Ltd.",
    description: `Developed visually appealing and user-friendly static pages for a Bakery using React.js. Built a comprehensive authentication system with user login, password management, email reset, and Google OAuth integration. Utilized Node.js and MongoDB to create efficient APIs, enhancing system security and user satisfaction.`,
    technologies: ["Node.js", "React.js", "Javascript",  "mongoDB", "Prisma", "Docker"],
  },
  {
    year: "Apr 2023 - Mar 2024",
    role: "Management Head",
    company: "Heritage Club, Vit Vellore",
    description: `Successfully organized cultural events and workshops. I coordinated with various teams to ensure seamless event execution, managed budgets, and fostered collaborations with local cultural organizations, enhancing the club's visibility and impact.`,
    technologies: ["Leadership", "Collaboration", "Problem-Solving", "Communication"],
  },
];

export const PROJECTS = [
  {
    title: "BiteJoy: Food Delivery Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  intro : "I'd love to hear from you! Whether you have a question or just want to say hi.",   
};

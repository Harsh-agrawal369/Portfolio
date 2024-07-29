import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `Building the future, one line of code at a time. As a Software Engineering Student, I turn complex problems into elegant solutions, leveraging cutting-edge technologies and innovative thinking. Let's code the future together.`;

export const ABOUT_TEXT = `Hola Amigo! I'm Harsh Agrawal, final year B.Tech Information Technology student at Vellore Institute of Technology.I am passionate about software engineering and have developed a strong skill set in both front-end and back-end technologies, like React, Node.js, MySQL, and MongoDB. Through internships and academic projects, I have gained hands-on experience and enjoy solving complex problems with innovative solutions. I also have a keen interest in artificial intelligence and machine learning, continuously exploring new advancements in these fields. With a commitment to excellence and a drive to make a meaningful impact, I am eager to contribute to the tech industry.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 - Oct 2023",
    role: "Technical Intern",
    company: "Certainty Infotech Pvt. Ltd.",
    description: `Developed visually appealing and user-friendly static pages for a Bakery using React.js. Built a comprehensive authentication system with user login, password management, email reset, and Google OAuth integration. Utilized Node.js and MongoDB to create efficient APIs, enhancing system security and user satisfaction.`,
    technologies: ["Node.js", "React.js", "Javascript",  "mongoDB", "Prisma", "Docker"],
    github: "https://github.com/user/project1",
    deployment: "https://project1.example.com",
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
      "A fully functional online food delivery website with features like food listing, shopping cart, payment gateway, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Prisma", "JWT", "Stripe"],
    github: "https://github.com/Harsh-agrawal369/BiteJoy---Food-Delivery"
  },
  {
    title: "Travel Buddy: Travel Mate Finder",
    image: project2,
    description:
      "A platform that connects like-minded travelers, enabling them to list their travel plans and find companions for sharing cabs, trains, or flights.",
    technologies: ["EJS", "CSS", "Bootstrap", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/Harsh-agrawal369/TravelBuddyFinder-MVC",
    deployment: "https://travelbuddyfinder.onrender.com/"
  },
  {
    title: "Movie Recommendation System",
    image: project3,
    description:
      "A user-friendly web app that recommends movies tailored to individual preferences through advanced content-based filtering techniques.",
    technologies: ["python", "Machine Learning", "Vectorization", "Streamlit"],
    github: "https://github.com/Harsh-agrawal369/Movie_Recommendation",
    deployment: "https://harsh-agrawal369-movie-recommendation-app-derhvx.streamlit.app/"
  },
  {
    title: "Notes Summarizer",
    image: project4,
    description:
      " Django application that extracts text from uploaded PDFs using EasyOCR and summarizes it using the Llama3 8bAPI from Groq Cloud.",
    technologies: ["Django", "EasyOCR", "Llama3 API", " Groq Cloud", "PDF generation"],
    github: "https://github.com/Harsh-agrawal369/Notes-Summarizer/"
  },
  {
    title: "Fake News Detection System",
    image: project5,
    description:
      "A small Flask application that uses a Python script and a personalized dataset to detect fake news from given text inputs.",
    technologies: ["Python", "Flask", "Pandas", "Web Scrapping",  "Maltego"],
    github: "https://github.com/Harsh-agrawal369/Fake-News-Detection-System"
  },
  {
    title: "To-Do List Application",
    image: project6,
    description:
      "A simple and intuitive to-do list application that helps users manage tasks, set deadlines, and track progress efficiently.",
    technologies: ["EJS", "CSS", "Node.js", "Express.js","Google-O-Auth",  "MYSQL"],
    github: "https://github.com/Harsh-agrawal369/To-do",
    deployment: "https://to-do-list-6thr.onrender.com/"
  },

];

export const CONTACT = {
  intro : "I'd love to hear from you! Whether you have a question or just want to say hi.",   
};

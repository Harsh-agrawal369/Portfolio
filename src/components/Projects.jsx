import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import "../index.css";

const Projects = () => {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };


  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start font-body-text"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                width={220}
                height={180}
                className="mb-4 rounded mt-4"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start mb-2">
                <h6 className="font-semibold text-center lg:text-left">{project.title}</h6>
                <div className="ml-0 lg:ml-4 mt-2 lg:mt-0 flex flex-wrap gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        openInNewTab(project.github);
                      }}
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.deployment && (
                    <a
                      href={project.deployment}
                      onClick={(e) => {
                        e.preventDefault();
                        openInNewTab(project.deployment);
                      }}
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Deployment
                    </a>
                  )}
                </div>
              </div>
              <p className="mb-4 font-fam text-neutral-400 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-skills font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

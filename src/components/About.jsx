import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center overflow-hidden">
            <img
              className="rounded-2xl lg:w-25/40 w-5/5 object-cover object-bottom h-96"
              src="/img1.png"
              alt="About"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-6 text-justify font-body-text">
              {ABOUT_TEXT}
            </p>
            <a
              href="https://drive.google.com/file/d/14Lo_OJEF1x2nImw6qoZla1kHMBhT7ivI/view?usp=sharing"
              type="application/pdf"
              onClick={(e) => {
                e.preventDefault();
                openInNewTab(
                  "https://drive.google.com/file/d/14Lo_OJEF1x2nImw6qoZla1kHMBhT7ivI/view?usp=sharing"
                );
              }}
              className="mt-4 inline-block px-5 py-3 rounded-md bg-purple-800 text-white text-lg font-medium hover:bg-purple-600 transition-colors duration-300 font-fam"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

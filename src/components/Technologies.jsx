import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaJava, FaPython, FaCss3Alt, FaHtml5, FaGit, FaDocker, FaAws } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";
import { SiRstudio, SiStreamlit, SiMysql, SiMongodb, SiNumpy, SiPandas, SiScikitlearn, SiPrisma } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
    const skills = [
        { icon: <FaJava className="text-7xl group-hover:hidden" />, text: "Java" },
        { icon: <MdJavascript className="text-7xl group-hover:hidden" />, text: "JavaScript" },
        { icon: <TbBrandCpp className="text-7xl group-hover:hidden" />, text: "C++" },
        { icon: <FaPython className="text-7xl group-hover:hidden" />, text: "Python" },
        { icon: <SiRstudio className="text-7xl group-hover:hidden" />, text: "RStudio" },
        { icon: <RiReactjsLine className="text-7xl group-hover:hidden" />, text: "React" },
        { icon: <FaNodeJs className="text-7xl group-hover:hidden" />, text: "Node.js" },
        { icon: <FaHtml5 className="text-7xl group-hover:hidden" />, text: "HTML5" },
        { icon: <FaCss3Alt className="text-7xl group-hover:hidden" />, text: "CSS3" },
        { icon: <RiTailwindCssFill className="text-7xl group-hover:hidden" />, text: "Tailwind CSS" },
        { icon: <SiStreamlit className="text-7xl group-hover:hidden" />, text: "Streamlit" },
        { icon: <SiMysql className="text-7xl group-hover:hidden" />, text: "MySQL" },
        { icon: <SiMongodb className="text-7xl group-hover:hidden" />, text: "MongoDB" },
        { icon: <SiPrisma className="text-7xl group-hover:hidden" />, text: "Prisma" },
        { icon: <SiNumpy className="text-7xl group-hover:hidden" />, text: "NumPy" },
        { icon: <SiPandas className="text-7xl group-hover:hidden" />, text: "Pandas" },
        { icon: <SiScikitlearn className="text-7xl group-hover:hidden" />, text: "Scikit-Learn" },
        { icon: <FaGit className="text-7xl group-hover:hidden" />, text: "Git" },
        { icon: <FaDocker className="text-7xl group-hover:hidden" />, text: "Docker" },
        { icon: <FaAws className="text-7xl group-hover:hidden" />, text: "AWS" },
    ];

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(2.5 + (index % 2) * 0.5)}
                        initial="initial"
                        animate="animate"
                        className="group rounded-2xl border-4 border-neutral-800 p-4 text-center text-gray-100">
                        {skill.icon}
                        <p className="hidden group-hover:block text-2xl font-fam text-purple-300">{skill.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;

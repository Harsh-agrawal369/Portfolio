import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, delay: delay } },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center text-center">
                <div className="w-full lg:w-1/8">
                    <div className="flex flex-col items-center">
                        <motion.h1
                            variants={container(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Harsh Agrawal
                        </motion.h1>

                        <motion.span
                            variants={container(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r text-4xl lg:pb-1 from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-5xl tracking-tight text-transparent ">
                            Software Engineer
                        </motion.span>

                        <motion.p
                            variants={container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-3xl py-6 font-light lg:text-lg font-body-text">
                            {HERO_CONTENT} 
                        </motion.p>

                        {/* Empty div only visible on large screens */}
                        <div className="hidden lg:block h-48 w-full"></div>
                    </div>
                </div>
                {/* <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        initial= {{x: 100, opacity: 0}}
                        animate= {{x: 0, opacity: 1}}
                        transition= {{duration:0.5, delay: 0.6}}
                        src={profilePic} alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Hero;

import RulesImg from "../assets/rules.png";
import { motion } from "framer-motion";
function Rules() {
  return (
    <motion.section
      initial={{ opacity: "0" }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="purple-flare w-full lg:w-[50%] h-[300px] lg:h-full top-[1rem] lg:top-3 left-[-40%] lg:left-[-70px]  !opacity-[0.35]"></div>
      <div className="purple-flare w-full lg:w-[30%] h-[300px] lg:h-full bottom-32 lg:bottom-[-10rem]  right-1 "></div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-7 lg:gap-10">
        <motion.article
          initial={{ opacity: "0" }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="lg:max-w-[50%]"
        >
          <h3 className=" font-bold">
            Rules and <span className="text-purple">Guidelines</span>{" "}
          </h3>
          <p className="!text-sm mt-6">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you´re a coding
            genius, a design maverick, or a concept wizard, you´ll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that´s what we´re all about!
          </p>
        </motion.article>
        <figure className="w-full lg:w-[700px]">
          <img src={RulesImg} alt="" className="w-full" />
        </figure>
      </div>
      <hr />
    </motion.section>
  );
}

export default Rules;

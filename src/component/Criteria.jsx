import CriteriaImg from "../assets/criteria.png";
import { motion } from "framer-motion";
export default function Criteria() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 1,
        },
      }}
      className="relative"
    >
      <div className="purple-flare w-full lg:w-[50%] h-[300px] lg:h-full top-[20rem] lg:top-3 left-[-70px]  !opacity-[0.35]"></div>
      <div className="purple-flare w-full lg:w-[50%] h-[300px] lg:h-full lg:-bottom-[20rem] -bottom-[0%]  right-1 "></div>
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10">
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="lg:max-w-[50%] "
        >
          <h3 className=" leading-tight font-bold whitespace-nowrap">
            Judging Criteria
            <br /> <span className="text-purple">Key attributes</span>
          </h3>
          <p className="!text-sm mt-10">
            {" "}
            <span className="text-pink font-bold">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="!text-sm mt-5">
            {" "}
            <span className="text-pink font-bold">Functionality:</span> Assess
            how well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className="!text-sm mt-5">
            {" "}
            <span className="text-pink font-bold">
              Impact and Relevance:
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="!text-sm mt-5">
            {" "}
            <span className="text-pink font-bold">
              Technical Complexity:
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.{" "}
          </p>
          <p className="!text-sm mt-5">
            {" "}
            <span className="text-pink font-bold">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.{" "}
          </p>
        </motion.article>
        <figure className="w-full lg:w-[800px] h-auto">
          <img src={CriteriaImg} alt="" className="w-full h-full" />
        </figure>
      </div>
      <hr />
    </motion.section>
  );
}

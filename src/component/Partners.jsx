import PartnersImg from "../assets/partners.png";
import { motion } from "framer-motion";
export default function Partners() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <div className="flex flex-col items-center justify-center mt-10">
        <article className="flex flex-col items-center justify-center ">
          <h3>Partners and Sponsors</h3>
          <p className="w-[80%] text-center mx-auto mt-2">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </article>
        <figure className="lg:w-[80%] mt-5">
          <img src={PartnersImg} alt="" />
        </figure>
      </div>
    </motion.section>
  );
}

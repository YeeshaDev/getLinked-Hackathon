import Cup from "../assets/cup.png";
import Rewards from "../assets/Rewards.png";
import { motion } from "framer-motion";
import WhiteStar from "../assets/white-star.png";
//import Background from '../assets/flare-bg.png'
export default function Prizes() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <img src={WhiteStar} alt="" className="star top-[40%] left-[45%]  " />
      <img src={WhiteStar} alt="" className="star top-[30%] left-[90%]  " />
      <div className="flare-bg"></div>

      <section className="flex flex-col items-center justify-between py-14">
        <article className="lg:hidden flex flex-col justify-end ">
          <h3>
            Prizes and <br /> <span className="text-purple">Rewards</span>
          </h3>
          <p className="w-[80%] mx-auto  text-center lg:text-start">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </article>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 ">
          <figure className=" relative w-full lg:max-w-[50%] lg:w-[500px] z-[99]">
            <img src={Cup} alt="" className="w-full lg:mt-[8rem]" />
            <div className="purple-flare top-[50%] flex items-center justify-center left-[30%] translate-x-[-50%] translate-y-[-50%] w-full h-full opacity-[0.5] -z-[1]"></div>
          </figure>
          <article className="flex flex-col items-centerjustify-center lg:max-w-[50%] ">
            <div className="hidden lg:flex flex-col items-start justify-center mx-auto ml-[10rem] mb-10">
              <h3>
                Prizes and <br /> <span className="text-purple">Rewards</span>
              </h3>
              <p className="w-[60%]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>

            <figure className="w-full -mt-5 lg:mt-0">
              <img src={Rewards} alt="" />
            </figure>
          </article>
        </div>
      </section>
    </motion.div>
  );
}

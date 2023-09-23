import HeroImg from "../assets/Hero1.png";
import Bulb from "../assets/creative.png";
import Splash from "../assets/splash.png";
import Chain from "../assets/chain.png";
import Curve from "../assets/pink-curve.svg";
import { motion } from "framer-motion";

//import Flare from '../assets/purple-flare.png'
function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <div className="flex flex-col lg:flex-row items-center mt-5 md:mt-16 lg:mt-1">
        <article className="relative flex flex-col items-center lg:items-start justify-center lg:justify-start z-[10]">
          <div className="purple-flare top-0 flex items-center justify-center left-[30%] translate-x-[-50%] translate-y-[-50%] w-full h-full"></div>
          <div className="relative lg:mt-5 mb-16 lg:mb-24 lg:hidden ">
            <h3 className='text-[16px] sm:text-[30px] whitespace-nowrap  italic font-["Inter"] font-extrabold '>
              Igniting a Revolution in HR Innovation
            </h3>
            <img
              src={Curve}
              alt=""
              className="absolute top-6 sm:top-10 right-0 lg:right-10 w-[50%] "
            />
          </div>
          <div className="relative z-[20] text-center lg:text-start">
            <h2 className="text-white font-bold text-[2rem] sm:text-[50px] lg:text-[70px] ">
              getlinked Tech <br /> Hackathon{" "}
              <span className="text-purple">1.0</span>{" "}
            </h2>
            <p className="lg:text-[20px] text-[13px] sm:text-[16px] w-[90%] lg:w-[90%] mx-auto lg:mx-0">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="mx-auto lg:mx-0 flex items-center justify-center">
              Register
            </button>
            <figure className="absolute -top-8 md:-top-14 lg:right-20 w-[30px] md:w-[50px] right-[30%] md:right-[32%]">
              <img src={Bulb} alt="" className="w-full" />
            </figure>
            <figure className=" w-[30px] md:w-[50px]">
              <img
                src={Splash}
                alt=""
                className="absolute w-[30px] sm:w-[45px]  md:w-[60px] lg:right-5 right-1 sm:right-14 lg:top-[130px] top-[30%] sm:top-[35%]"
              />
              <img
                src={Chain}
                alt=""
                className="absolute w-[30px] sm:w-[45px] md:w-[60px] lg:-right-12  sm:right-2 -right-7 top-[30%] lg:top-[130px] sm:top-[35%]"
              />
            </figure>
          </div>
        </article>

        <article className="relative lg:max-w-[50%]">
          <motion.figure
            initial={{ x: "100%" }}
            whileInView={{
              x: 0,
              transition: {
                delay: 0.3,
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="w-full h-auto mt-12 lg:mt-16 "
          >
            <img src={HeroImg} alt="" className="w-full" />
          </motion.figure>
          <div className="hidden lg:block">
            <h3 className='text-[32px] whitespace-nowrap absolute top-0 italic font-["Inter"] font-bold'>
              Igniting a Revolution in HR Innovation
            </h3>
            <img
              src={Curve}
              alt=""
              className="absolute top-10 right-0 lg:right-10"
            />
          </div>
        </article>
      </div>
      <hr />
    </motion.section>
  );
}

export default Hero;

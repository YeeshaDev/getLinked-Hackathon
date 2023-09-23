import TermsImg from "../assets/terms.png";
import GreenCheck from "../assets/green-check.svg";
import { motion } from "framer-motion";
import GrayStar from "../assets/gray-star.png";
import PurpleStar from "../assets/purple-star.png";
export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.7,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="relative"
      id="overview"
    >
      <img
        src={GrayStar}
        className=" star top-[0] lg:top-0 left-[75%] lg:left-[50%]   w-5"
      />
      <img
        src={PurpleStar}
        className=" star top-[70%] left-[75%] lg:left-[55%]   w-4 h-4"
      />
      <div className="flare-bg"></div>
      <section className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 mt-10">
        <article className="lg:max-w-[50%] flex flex-col items-center ">
          <h3>Privacy Policy and Terms</h3>
          <p className="my-8">Last updated on September 12, 2023</p>
          <p className=" lg:w-[80%] text-center mx-auto lg:my-10">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="border border-solid border-purple py-7 px-5 lg:px-14 mt-10 mb-7 rounded-[5px] flex flex-col justify-center">
            <p className="mb-5">
              {" "}
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h4 className="font-bold text-xl text-purple my-5">
              Licensing Policy
            </h4>
            <h4 className="font-bold text-md mb-5">
              Here are terms of our Standard License:
            </h4>
            <span className="flex items-start gap-3 my-5">
              <img
                src={GreenCheck}
                width="17px"
                height="17px"
                alt=""
                className="mt-1"
              />
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </span>
            <span className="flex items-start gap-3 my-5">
              <img
                src={GreenCheck}
                width="17px"
                height="17px"
                alt=""
                className="mt-1"
              />
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </span>
            <button className="mx-auto">Read More</button>
          </div>
        </article>
        <figure className="lg:max-w-[50%] w-full md:w-[70%] lg:w-[500px] mt-6 lg:mt-0">
          <img src={TermsImg} alt="" className="w-full" />
        </figure>
      </section>
    </motion.div>
  );
}

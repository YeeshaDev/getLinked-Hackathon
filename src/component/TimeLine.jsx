import { motion } from "framer-motion";

export default function Timeline() {
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
      viewport={{ once: true }}
      id="timeline"
    >
      <article className="flex flex-col items-center justify-center mb-12 lg:[3rem]">
        <h3 className="font-semibold mb-3">Timeline</h3>
        <p className="text-center lg:text-start">
          Here is the breakdown of the time we anticipate{" "}
          <br className="hidden md:block" />
          using for the upcoming event.
        </p>
      </article>
      <article className="mt-16 lg:mt-[7rem]">
        <div className="timeline relative">
          <span className="lg:w-[33.33%] w-[80%]  mx-12 md:mx-16">
            <h2 className="font-bold text-[12px] md:text-[20px] leading-tight text-purple">
              Hackathon Announcement
            </h2>
            <p className=" text-[12px] md:text-sm md:mt-5 leading-tight">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </span>

          <span className="lg:w-[33.33%] w-[80%]  mx-12 md:mx-16">
            <h2 className="lg:mt-12 font-bold text-[12px] md:text-[20px] text-purple">
              November 18, 2023
            </h2>
          </span>
          <div className="absolute  lg:-top-6 left-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:mt-20 flex flex-col items-center justify-center gap-3">
            <div className="bg-purple borderline first"></div>
            <span className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full bg-timelineGradient flex items-center justify-center font-semibold lg:mt-5">
              1
            </span>
          </div>
        </div>
        <div className="timeline lg:flex-row-reverse relative">
          <span className="lg:w-[33.33%] w-[80%] mx-12 md:mx-16">
            <h2 className="font-bold text-[12px] md:text-[20px] leading-tight text-purple">
              Hackathon Announcement
            </h2>
            <p className="text-[12px] md:text-sm md:mt-5 leading-tight">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </span>

          <span className="lg:w-[33.33%] w-[80%]  mx-12 md:mx-16">
            <h2 className="lg:mt-2 font-bold text-[12px] md:text-[20px] text-purple">
              November 18, 2023
            </h2>
          </span>
          <div className="absolute lg:-top-6 left-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:mt-[4.5rem] flex flex-col items-center justify-center gap-3">
            <div className="bg-purple borderline "></div>
            <span className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full bg-timelineGradient flex items-center justify-center font-semibold lg:mt-10">
              2
            </span>
          </div>
        </div>

        <div className="timeline relative">
          <span className="lg:w-[33.33%] w-[80%]  mx-12 md:mx-14 lg:mx:16">
            <h2 className="font-bold text-[12px] md:text-[20px] leading-tight text-purple">
              Hackathon Announcement
            </h2>
            <p className="text-[12px] md:text-sm md:mt-5 leading-tight">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </span>

          <span className="lg:w-[33.33%] w-[80%] mx-12 md:mx-16">
            <h2 className="lg:mt-2 font-bold text-[12px] md:text-[20px] text-purple">
              November 18, 2023
            </h2>
          </span>
          <div className="absolute lg:-top-6 left-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:mt-[4.5rem] flex flex-col items-center justify-center gap-3">
            <div className="bg-purple borderline "></div>
            <span className=" w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full bg-timelineGradient flex items-center justify-center font-semibold lg:mt-10">
              3
            </span>
          </div>
        </div>

        <div className="timeline relative lg:flex-row-reverse">
          <span className="lg:w-[33.33%] w-[80%] mx-12 md:mx-16">
            <h2 className="font-bold text-[12px] md:text-[20px] leading-tight text-purple">
              Hackathon Announcement
            </h2>
            <p className="text-[12px] md:text-sm md:mt-5 leading-tight">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </span>

          <span className="lg:w-[33.33%] w-[80%]  mx-12 md:mx-16">
            <h2 className="lg:mt-2 font-bold text-[12px] md:text-[20px] text-purple">
              November 18, 2023
            </h2>
          </span>
          <div className="absolute lg:-top-6 left-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:mt-[4.5rem] flex flex-col items-center justify-center gap-3">
            <div className="bg-purple borderline "></div>
            <span className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full bg-timelineGradient flex items-center justify-center font-semibold lg:mt-10">
              4
            </span>
          </div>
        </div>

        <div className="timeline relative ">
          <span className="lg:w-[33.33%] w-[80%] mx-12 md:mx-16">
            <h2 className="font-bold text-[12px] md:text-[20px] leading-tight text-purple">
              Hackathon Announcement
            </h2>
            <p className="text-[12px] md:text-sm md:mt-5 leading-tight">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </span>

          <span className="lg:w-[33.33%] w-[80%]  mx-12 md:mx-16">
            <h2 className="lg:mt-2 font-bold text-[12px] md:text-[20px] text-purple">
              November 18, 2023
            </h2>
          </span>
          <div className="absolute lg:-top-6 left-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:mt-[4.5rem] flex flex-col items-center justify-center gap-3">
            <div className="bg-purple borderline "></div>
            <span className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full bg-timelineGradient flex items-center justify-center font-semibold lg:mt-10">
              5
            </span>
          </div>
        </div>

        <div className="timeline relative lg:flex-row-reverse">
          <span className="lg:w-[33.33%] w-[80%]  mx-12 md:mx-16">
            <h2 className="font-bold text-[12px] md:text-[20px] leading-tight text-purple">
              Hackathon Announcement
            </h2>
            <p className="text-[12px] md:text-sm md:mt-5 leading-tight">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </span>

          <span className="lg:w-[33.33%]  mx-12 md:mx-16 ">
            <h2 className="lg:mt-6 font-bold text-[12px] md:text-[20px] text-purple">
              November 18, 2023
            </h2>
          </span>
          <div className="absolute lg:-top-6 left-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:mt-[4.5rem] flex flex-col items-center justify-center gap-3">
            <div className="bg-purple borderline "></div>
            <span className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full bg-timelineGradient flex items-center justify-center font-semibold lg:mt-10">
              6
            </span>
          </div>
        </div>
      </article>
    </motion.section>
  );
}

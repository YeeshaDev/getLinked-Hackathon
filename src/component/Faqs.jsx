import FaqImg from "../assets/faq.png";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
export default function Faqs() {
  return (
    <motion.section
      id="faqs"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 1,
        },
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <article className="lg:max-w-[50%]">
          <h3 className="leading-tight font-bold whitespace-nowrap">
            Frequently Ask
            <br /> <span className="text-purple">Question</span>
          </h3>
          <p className="!text-sm mt-10">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <div>
            <Accordion
              title="Can I work on a project I started before the hackathon?"
              content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
            />
            <Accordion
              title="What happens if I need help during the hackathon?"
              content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
            />
            <Accordion
              title="What happens if I don't have an idea for a project?"
              content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
            />
            <Accordion
              title="Can I join a team or do I have to come with one?"
              content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
            />
            <Accordion
              title="What happens after the hackathon ends"
              content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
            />
            <Accordion
              title="Can I work on a project I started before the hackathon?"
              content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!"
            />
          </div>
        </article>
        <figure className="w-full lg:w-[700px]">
          <img src={FaqImg} alt="" className="w-full" />
        </figure>
      </div>
      <hr />
    </motion.section>
  );
}

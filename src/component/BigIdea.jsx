import BigIdeaImg from '../assets/big-idea.png'
import { motion } from 'framer-motion'
function BigIdea() {
    return (
        <motion.section initial={{ opacity:0 }}
        whileInView={{
          opacity:1,
          transition:{
          delay:0.3,
          duration:1.5
          } 
        }}
        viewport={{ once: true }}
        >
            <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10'>
           <motion.article 
           initial={{ opacity:0 }}
           whileInView={{
             opacity:1,
             transition:{
             delay:0.3,
             duration:1
             } 
           }}
           viewport={{ once: true }}
           className='lg:max-w-[50%]'>
            <h3 className=" leading-tight font-bold md:whitespace-nowrap">Introduction to getlinked
<br className='hidden md:block' /> <span className="text-purple">tech Hackathon 1.0</span>
</h3>
<p className="!text-sm mt-10">Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you´re a coding genius, a 
design maverick, or a concept wizard, you´ll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that´s what we´re all about!</p>
            </motion.article> 
            <figure className='w-full lg:w-[700px]'>
                <img src={BigIdeaImg} alt="" className='w-full' />
            </figure>
            </div>
            <hr />
        </motion.section>
    )
}

export default BigIdea

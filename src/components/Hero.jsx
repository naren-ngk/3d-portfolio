import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row mx-auto items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Naren</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop web applications using <br className="sm:block hidden" />NodeJs and Mongo DB with Express.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-1 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[52px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div
              animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full my-1 bg-secondary" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
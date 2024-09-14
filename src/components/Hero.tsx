import styles from "../style";
import discount from "../assets/Discount.svg";
import robot from "../assets/robot.png";
import { motion } from "framer-motion";

import GetStarted from "./GetStarted.tsx";
import Stats from "./Stats.tsx";

const Hero = () => {
  return (
    <motion.section
      className={`bg-primary ${styles.boxWidth} mx-auto`}
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <section
        id="home"
        className={`bg-primary flex md:flex-row flex-col ${styles.paddingY} pt-28 sm:pt-36`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">10%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The power of
              <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Artificial Intelligence</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our service, developed by a team of experts, puts the power of
            artificial intelligence in your hands. Do you want a summary of a
            web page? You are in the right place with{" "}
            <span className="text-gradient font-semibold">SUMMAI</span>. You
            will be able to try, through our demo, to perhaps summarize an
            article necessary for your scholastic research. <br />
            Try <span className="text-gradient font-semibold">SUMMAI</span> now!
          </p>
        </div>
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <motion.img
            src={robot}
            alt="robot"
            className="w-[100%] relative z-[5]"
            animate={{
              y: [-8, 8],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          />
          <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient bottom-40" />
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
      <Stats />
    </motion.section>
  );
};

export default Hero;

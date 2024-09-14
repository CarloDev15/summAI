import { feedback } from "../constants/arrays";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";

const Testimonials = () => (
  <motion.section
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
    id="clients"
    className={`bg-primary ${styles.paddingY} ${styles.flexCenter} ${styles.boxWidth} flex-col relative mx-auto`}
  >
    <div className="w-full flex justify-around text-center items-center md:flex-row flex-col pt-24 sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-center md:text-left`}>
          "A simple but effective tool, with great utility in everyday needs."
        </p>
      </div>
    </div>
    <div className="flex justify-center flex-col md:flex-row">
      {feedback.map((card, index) => (
        <motion.div
          key={card.id}
          className="flex flex-wrap justify-center w-full feedback-container relative z-[1]"
          variants={{
            hidden: {
              opacity: 0,
              x: -75,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 * index }}
        >
          <FeedbackCard {...card} />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;

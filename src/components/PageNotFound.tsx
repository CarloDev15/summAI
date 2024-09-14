import { motion } from "framer-motion";
import errorSVG from "../assets/404.svg";

export const PageNotFound = () => (
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
    className="flex flex-col items-center justify-center h-screen gap-4"
  >
    <img
      src={errorSVG}
      alt="robot 404 error"
      className="w-3/4 sm:w-1/2 md:w-2/5"
    />
  </motion.section>
);

import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Demo from "./Demo";
import { AnimatePresence } from "framer-motion";
import { PageNotFound } from "./PageNotFound";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/clients" element={<Testimonials />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

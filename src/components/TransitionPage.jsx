"use client";

import { TransitionVariantPage } from "../../utils/motion-transition";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait"> 
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-[#8e44ad]" 
        variants={TransitionVariantPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
};

export default TransitionPage;
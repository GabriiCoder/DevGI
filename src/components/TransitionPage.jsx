"use client";

import { TransitionVariantPage } from "../../utils/motion-transition";

import { AnimatePresence, motion } from "framer-motion";

 const TransitionPage = () => {
    return (
        <AnimatePresence node='wait'>
            <div>
                <motion.div
                    className="fixed top-0 right-full 
                    w-screen z-30 bg-[#2e2257]"
                    variants={TransitionVariantPage}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
                    >
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;
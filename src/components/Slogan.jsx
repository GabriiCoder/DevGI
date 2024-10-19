"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../utils/motion-transition";

const Slogan = () => {
    return (
      <motion.div
        className="absolute top-1/3 left-5 transform -translate-y-1/2 md:top-1/4 md:left-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn('left')}
      >
        <p className="mt-14 text-2xl md:text-4xl lg:text-5xl font-light font-poppins relative text-left">
          <span
            className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-bold"
          >
            "Codificando ideas,<br />
            creando el mañana."
          </span>
          <br /> <br />
          <span
            className="bg-gradient-to-r from-green-400 to-pink-400 text-transparent bg-clip-text font-bold"
          >
            "Innovación en cada línea,<br />
            aprendizaje en cada paso."
          </span>
        </p>
      </motion.div>
    );
  };
  
  export default Slogan;
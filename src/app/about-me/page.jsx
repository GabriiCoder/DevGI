"use client";

import TransitionPage from "@/components/TransitionPage";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion-transition"; 


const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <TransitionPage />

      
      <div className="flex flex-col items-center justify-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          Sobre Mí
        </h2>
        <p className="text-lg md:text-xl text-gray-800 text-center mx-4">
          Soy una desarrolladora web full stack apasionada por la creación de 
          <br />
          experiencias interactivas y modernas.
          <br />
          Me esfuerzo por mantenerme actualizada con las últimas tecnologías,
          <br />
          resolviendo desafíos y optimizando funcionalidades para brindar 
          <br />
          soluciones creativas.
          <br />
          <br />
          "Codificando ideas, creando el mañana."
        </p>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[100%] md:translate-y-0"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }} 
        exit={{ x: "-100%", opacity: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden w-full h-1/2">
          <Avatar />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
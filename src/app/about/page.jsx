"use client"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Sobre mí
      </motion.h1>

      <p className="text-lg max-w-xl text-center">
        Desarrolladora web full-stack, apasionada por crear soluciones innovadoras y escalables.
        Mi objetivo es transformar ideas en realidad, utilizando las últimas tecnologías y
        las mejores prácticas de desarrollo.
      </p>
    </div>
  );
};

export default About;
import { Share2, ExternalLink } from "lucide-react";
import MotionTransition from "./TransitionComponent";
import Link from "next/link";
const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="ml-14 md: text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
              DevGI
            </h1>
          </Link>
        </div>
        <nav className="flex items-center space-x-4 mr-6">
          <Link href="https://github.com/tu-usuario" target="_blank" className="flex items-center text-green-400 hover:text-green-500 transition-colors duration-300">
            <Share2 size={25} className="text-green-400 hover:text-green-500 transition-colors duration-300" />
            <span className="ml-1 text-green-400 hover:text-green-500 transition-colors duration-300">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/tu-usuario" target="_blank" className="flex items-center text-green-400 hover:text-green-500 transition-colors duration-300">
            <ExternalLink size={25} className="text-green-400 hover:text-green-500 transition-colors duration-300" />
            <span className="ml-1 text-green-400 hover:text-green-500 transition-colors duration-300">LinkedIn</span>
          </Link>
        </nav>
      </header>
    </MotionTransition>
  );
};

export default Header;
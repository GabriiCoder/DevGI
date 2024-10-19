import CoverParticles from "@/components/CoverParticles";
import React from "react";
import TransitionPage from "@/components/TransitionPage";
import Avatar from "../components/Avatar";
import Slogan from "../components/Slogan";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full" >
     <div className="relative w-full h-screen bg-black">
      <Slogan />
      <div className="flex min-h-[100vh] bg-no-repeat bg-gradient-cover">
        <CoverParticles />
      </div>
      <div className="w-full h-full absolute right-0 bottom-0 bg-[url('/bg-explosion.png')] bg-cover bg-right bg-no-repeat mix-blend-color-dodge translate-z-0 hidden md:block">
        <div
          className="w-full h-full absolute right-0 bottom-0 
             bg-[url('/bg-explosion.png')] bg-cover bg-right bg-no-repeat
             mix-blend-overlay translate-z-0 filter hue-rotate-200 saturate-100"
        >
          <div className="absolute w-full h-full to-transparent opacity-5"></div>
        </div>
      </div>

      <div className="absolute bottom-0 right-[20%] z-10 w-auto">
        <Avatar />
      </div>

      <TransitionPage />
    </div>
    </div>
  );
}

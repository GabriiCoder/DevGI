"use client";

import Link from "next/link";

import MotionTransition from "./TransitionComponent";

import { usePathname } from "next/navigation";

import { itemsNavbar } from "../../data/ItemsNavbar";

const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center 
      w-auto h-screen right-0 top-0  p-8 rounded-m-xl"
    >
      <nav>
        <div className="flex md:flex-col items-center  justify-center gap-6 px-1 py-8 rounded-full bg-black/40 background-blur-xxl">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-2 py-1.5 transition duration-150 rounded-full cursor-pointer hover:bg-secondary 
    ${router == item.link && "bg-secondary"}`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};
export default Navbar;
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
      w-auto h-screen right-0 top-0  p-2 rounded-l-sm"
    >
      <nav>
        <div className="flex flex-col items-center justify-center gap-8 px-1 py-6 rounded-full bg-black/60 background-blur-xl">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-2 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary 
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
import MotionTransition from "./TransitionComponent";
import Link from "next/link";

const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w=full top-5 md:5 md:top-10">
      <header>
        <div className="container justify-between max.w.6xl mx-auto md:flex" >
          <Link href="/">
          DevGI
          </Link>
        </div>
      </header>
    </MotionTransition>
  );
}

export default Header;
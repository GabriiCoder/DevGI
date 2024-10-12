import { CodeSquare, HomeIcon, UserRound, Mail } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },

    {
      id: 4,
      title: "Contact",
      icon: <Mail size={25} color="#fff" strokeWidth={1} />,
      link: "/contact",
    },
];
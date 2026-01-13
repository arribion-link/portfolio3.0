"use client";
import { Link } from "react-router-dom";
const navItems = [
  { title: "Web Development", path: "/web-development" },
  { title: "Design", path: "/design" },
  { title: "Mobile Apps", path: "/mobile-apps" },
  { title: "AI Integrations", path: "/ai-integrations" },
];

const ExploreNavigation = () => {
  return (
      <nav className="">   
      <ul className="flex justify-center space-x-15 mt-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="relative text-2xl text-blue-500 font-bold transition-colors duration-300 hover:text-white
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300
                         hover:after:w-full">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ExploreNavigation;

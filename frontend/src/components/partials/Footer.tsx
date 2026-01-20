import { Link } from "react-router-dom";
import ScrollVelocity from "../ScrollVelocity";
 const navLinks = [
   { name: "Process", path: "/process" },
   { name: "Projects", path: "/projects" },
   { name: "About", path: "/about" },
   { name: "Blog", path: "/blogs" },
   { name: "Case Studies", path: "/case-studies" },
 ];
const Footer = () => {
  const Velocity = 20
  return (
    <footer className="relative bg-no-repeat bg-cover bg-center min-h-[80vh] text-white text-center mt-4">
      <div className="m-4">
        <ul className="navLinks md:flex gap-8 hidden ">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-slate-300">
              <Link
                to={link.path}
                className="relative  text-blue-400 font-bold transition-colors duration-300 hover:text-white
                       ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ScrollVelocity
        texts={["", "JEFF - MUTETHIA - NTONGAI -"]}
        velocity={Velocity}
        className=" text-slate-500"
      />
      <h1 className="text-slate-50 m-4 bottom-10 right-0 left-0 text-[clamp(0.51em,5vw,1.5em)] absolute text-end">
        copyright &copy; {new Date().getFullYear()} JEFF M NTONGAI. ARRIBION
        TECHNOLOGIES. CODNIFY.DEV
      </h1>
    </footer>
  );
};

export default Footer;

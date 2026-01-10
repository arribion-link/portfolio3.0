import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import hero_image from "../../assets/hero-stoic-head.webp"

const Hero = () => {
  return (
    <section className="my-5 mx-4 relative">
      <h1 className="text-[clamp(2em,10vw,6em)] text-slate-50 font-bold">
        SOTWARE DEVELOPER
      </h1>
      <div>
        <h1 className="text-[clamp(2em,10vw,5em)] text-slate-950 font-semibold bg-white py-2">PORTFOLIO</h1>
        <h1 className="text-[clamp(2em,10vw,6em)] text-slate-50 font-bold">
          WEBSITE
        </h1>
        <div className="text-white mt-10 flex gap-20">
          <div>
            <FaLinkedin size={25} className="hover:text-blue-700" />
          </div>
          <div>
            <FaTwitter size={25} className="hover:text-slate-600" />
          </div>
          <div>
            <FaGithub size={25} className="hover:text-gray-400" />
          </div>
          <div>
            <FaFacebook size={25} className="hover:text-blue-500" />
          </div>
          <div>
            <FaYoutube size={25} className="hover:text-red-600" />
          </div>
        </div>
      </div>
      <img
        src={hero_image}
        alt="hero image"
        className="absolute right-[17em] top-[6em] max-w-[17em] z-10"
        data-aos="zoom-in"
      />
    </section>
  );
}

export default Hero

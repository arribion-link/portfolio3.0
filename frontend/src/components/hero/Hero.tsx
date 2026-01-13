import hero_image from "../../assets/hero-stoic-head.webp"
import hero_small_image from "../../assets/hero-small-image.png";
import hero_small_image_2 from "../../assets/hero-small-image-2.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to(".hero_image", {
      x: -400,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero_image",
        start: "top center",
        end: "+=500",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section className="mt-[1em] min-h-[85vh] mx-4 relative">
      {/* <img
        src={hero_small_image}
        alt=""
        className="-left-8 -top-8 max-w-[10em] absolute "
      /> */}
      <img
        src={hero_small_image_2}
        alt=""
        className="-left-1 -top-17 max-w-[8em] absolute "
      />
      <img
        src={hero_small_image}
        alt=""
        className="-right-8 -top-8 max-w-[10em] absolute "
      />
      <h1 className="text-[clamp(2em,10vw,5em)] text-slate-50 text-center font-bold">
        SOTWARE DEVELOPER
      </h1>
      <div>
        <h1 className="text-[clamp(2em,10vw,5em)] text-slate-50 font-bold py-2">
          PORTFOLIO
        </h1>
      </div>
      <img
        src={hero_image}
        alt="hero image"
        className=" absolute right-[2em] md:right-[17em] top-[16em] md:-top-[0.51em] max-w-[25em] md:max-w-[19em] z-10"
        data-aos="zoom-in"
      />
    </section>
  );
};

export default Hero

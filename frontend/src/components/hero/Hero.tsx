import hero_image from "../../assets/hero-stoic-head.webp"

const Hero = () => {
  return (
    <section className='my-5 mx-4 relative'>
        <h1 className="text-[clamp(2em,10vw,7em)] text-slate-50 font-bold">
            SOTWARE DEVELOPER
        </h1>
        <div>
            <h1 className="text-[clamp(2em,10vw,5em)] text-slate-50">PORTFOLIO</h1>
            <h1 className="text-[clamp(2em,10vw,6em)] text-slate-50 font-bold">WEBSITE</h1>
          </div>
          <img
              src={hero_image}
              alt="hero image"
              className='absolute right-[10em] -top-[1em] max-w-[21em] z-10'
          />
    </section>
  );
}

export default Hero

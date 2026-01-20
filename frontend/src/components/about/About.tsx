import about_image_2 from "../../assets/about-image-3.png";
import hero_small_image from "../../assets/hero-small-image.png";
import about_image from "../../assets/about-image-2.png";
import space from "../../assets/space-2.jpg"
const About = () => {
  return (
    <section className="mx-4 my-[5em]">
      <div
        style={{
          backgroundImage: `url(${space})`, // ← add url() and template literal
          backgroundSize: "cover", // usually needed
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px", // give it some height!
        }}
        className="min-h-[50vh] w-1/2 mt-30 border p-4 border-slate-700 rounded bg-[url(../assets/space-1.jpg)] relative">
        <img
          src={about_image_2}
          alt=""
          className="absolute -bottom-5 -left-4 max-w-[20em] "
        />
        <img
          src={about_image}
          alt=""
          className="absolute -bottom-70 -left-3 opacity-70 max-w-[15em] "
        />
        <img
          src={hero_small_image}
          alt=""
          className="-top-14 -right-10 max-w-[10em] absolute "
        />
      </div>
    </section>
  );
}

export default About

import about_image_2 from "../../assets/about-image-3.png";
import spark_image_2 from "../../assets/spark-2.png";
const About = () => {
  return (
    <section className="mx-4 my-[5em]">
      <div className="min-h-[50vh] mt-30 border p-4 border-slate-700 rounded relative">
        <h1 className="text-[clamp(0.51em,10vw,1.5em)] text-end font-bold text-slate-700 flex-2  ">
          I believe the best digital products emerge <br /> from a deep
          understanding of both user needs <br /> and technical possibilities.
        </h1>
        <img
          src={about_image_2}
          alt=""
          className="absolute -bottom-5 left-0 max-w-[25em] "
        />
        <img
          src={spark_image_2}
          alt=""
          className="absolute -right-12 -bottom-12 max-w-[13em] opacity-80"
        />
      </div>
    </section>
  );
}

export default About

import ScrollVelocity from "../ScrollVelocity";
import ExploreNavigation from "./ExploreNavigation";
import stark_image_1 from "../../assets/spark-1.png";
const velocity = 20;
const Explore = () => {
  return (
    <section className="min-h-[150vh]">
      <ScrollVelocity
        texts={["", "JEFF - FULLSTACK - DEVELOPER - & - DESIGNER"]}
        velocity={velocity}
        className=" text-slate-500"
      />
      <div className="mt-10">
        <h1 className="text-[clamp(2em,10vw,4em)] text-slate-700 font-bold py-2 text-center">
          EXPLORE
        </h1>
        <div>
          <div>
            <p className="text-slate-600 text-center mx-4 md:mx-20">
              Dive into a world where innovation meets creativity. As a
              Fullstack Developer and Designer, I craft seamless digital
              experiences that captivate and inspire. Explore my portfolio to
              witness the fusion of cutting-edge technology and artistic vision,
              where every project tells a unique story of problem-solving and
              design excellence. Let's embark on a journey through my work and
              discover how I bring ideas to life in the digital realm.
            </p>
          </div>
          <div className="relative">
            <img
              src={stark_image_1}
              alt=""
              className="absolute max-w-[20em] right-0"
            />
            <ExploreNavigation />
            <div className="min-h-[70vh]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;

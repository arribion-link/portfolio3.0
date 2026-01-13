import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Tech from "../components/tech/Tech";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Service";
import Explore from "../components/explore/Explore";
import LatestBlogs from "../components/blog/LatestBlogs";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Services />
      <Explore />
      <LatestBlogs />
    </div>
  );
};

export default Home;

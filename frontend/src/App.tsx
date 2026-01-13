import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
// import MobileNav from './components/partials/MobileNav';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Optional: animation duration in milliseconds
      once: false, // Optional: whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Header />
      {/* <MobileNav/> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

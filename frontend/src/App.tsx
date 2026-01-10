import {useEffect} from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'; // Import the AOS CSS file
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
const App = () => {
   useEffect(() => {
     AOS.init({
       duration: 1500, // Optional: animation duration in milliseconds
       once: false, // Optional: whether animation should happen only once
     });
   }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App

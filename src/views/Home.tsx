import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';  
import Profil from '../components/Profil';
import Projects from '../components/Projects';



const Home = () => {
  return (
    <>
    <Navbar />
    <Profil />
    <About />
    <Projects />
    <Contact />
    </>

  )
}

export default Home;
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';  
import Profil from '../components/Profil';
import Projects from '../components/Projects';
import Skills from '../components/Skills';



const Home = () => {
  return (
    <>
    <Navbar />
    <Profil />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>

  )
}

export default Home;
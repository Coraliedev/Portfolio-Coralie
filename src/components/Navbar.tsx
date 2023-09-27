import navdata from '../assets/data/nav.data.json';
import { useState } from 'react';


const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToComponent = (id: string) => {
    const element = document.querySelector(id);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    const menu = document.getElementById("menu-links");
    if (menu) {
      menu.classList.toggle("max-h-[300px]");
    }
    setMenuOpen(!menuOpen);
  }

  return (<>
    <nav className='xl:flex justify-around items-center h-[17vh] hidden mb-[3vh]' id="desktop-nav">
      <p className='text-[2.5rem] cursor-default'>Coralie Acquaert</p>
      <ul className='gap-[2rem] text-[1.5rem] hidden xl:flex'>
        {navdata.sections.map((section) => (
          <li key={section.id}>
            <button className='hover:text-gray-400 hover:underline hover:underline-offset-[1rem] ' onClick={() => scrollToComponent(section.id)}>{section.name}</button>
          </li>
        ))}
      </ul>
    </nav>
    <nav id="hambergur-nav" className='flex justify-around items-center h-[17vh] xl:hidden'>
      <p className='text-[1.5rem] cursor-default'>Coralie Acquaert</p>
      <div className='relative inline-block'>
        <div className='w-8 h-6 cursor-pointer flex flex-col justify-around' id="hamburger-icon" onClick={() => toggleMenu()}>
          <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ease-in-out ${menuOpen ? 'tranform rotate-45 translate-y-2' : 'transform-none'}`}></span>
          <span className={`block h-0.5 w-full bg-black transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-1'}`}></span>
          <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ease-in-out ${menuOpen ? 'transform -rotate-45 -translate-y-2' : 'transform-none'}`}></span>
        </div>

        <div id="menu-links" className='absolute flex flex-col right-0 top-full bg-white w-fit max-h-0 overflow-hidden transition-all duration-300 ease-in-ou'>
          {navdata.sections.map((section) => (
            <li key={section.id} className='list-none'>
              <button className='block p-[10px] text-center text-2xl transition-all duration-300 ease-in-out w-full' onClick={() => { toggleMenu(); scrollToComponent(section.id) }}>{section.name}</button>
            </li>
          ))}
        </div>
      </div>

    </nav>
  </>
  )

};

export default NavBar;

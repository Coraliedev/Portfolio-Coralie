import React from 'react';
import allomovie from '../assets/images/allomovie.jpg';
import arrow from '../assets/images/arrow.png';

const Projects: React.FC = () => {
  const scrollToContact = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="projects" className='block relative section_padding xl:h-[96vh] h-fit my-0 xl:mx-40 mx-10 box-border min-h-[fit-content] mb-16 lg:mb-0'>
      <p className='text-center sm:text-xl text-lg mb-4 text-gray-600 mt-4'>Browse My Recent</p>
      <p className='sm:text-5xl text-3xl  text-center font-bold w-full mb-4'>Projects</p>
      <div id="experience-details-container" className='flex justify-center sm:gap-8 mb-8 mt-8 flex-wrap xl:flex-nowrap'> 
        <div className='border-gray-400 gap-8 mb-8 mt-8 p-6 rounded-2xl border-2 text-center w-[80vw] md:w-[40vw] xl:w-[25vw]'> 
          <div className='flex flex-wrap flex-row gap-10 justify-around'>
            <img src={allomovie} alt="project allomovie" id="project-img" className='rounded-2xl w-[350px]' />
          </div>
          <h2 className='font-semibold text-2xl mb-8 m-4 text-black'>Allomovie</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://github.com/Coraliedev/IncubateurProject_AlloMovie')
            }>Github</button>
            <button className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://incubateur-project-allo-movie.vercel.app/')
            }>Live Demo</button>
          </div>
        </div>
        
        <div className='border-gray-400 gap-8 mb-8 mt-8 p-6 rounded-2xl border-2 text-center w-[80vw] md:w-[40vw] xl:w-[25vw]'> 
          <div className='flex flex-wrap flex-row gap-10 justify-around'>
            <img src={allomovie} alt="project allomovie" id="project-img" className='rounded-2xl w-[350px]' />
          </div>
          <h2 className='font-semibold text-2xl mb-8 m-4 text-black'>Allomovie</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://github.com/Coraliedev/IncubateurProject_AlloMovie')
            }>Github</button>
            <button className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://incubateur-project-allo-movie.vercel.app/')
            }>Live Demo</button>
          </div>
        </div>
        <div className='border-gray-400 gap-8 mb-8 mt-8 p-6 rounded-2xl border-2 text-center w-[80vw] md:w-[40vw] xl:w-[25vw]'> 
          <div className='flex flex-wrap flex-row gap-10 justify-around'>
            <img src={allomovie} alt="project allomovie" id="project-img" className='rounded-2xl w-[350px]' />
          </div>
          <h2 className='font-semibold text-2xl mb-8 m-4 text-black'>Allomovie</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            <button className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://github.com/Coraliedev/IncubateurProject_AlloMovie')
            }>Github</button>
            <button className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://incubateur-project-allo-movie.vercel.app/')
            }>Live Demo</button>
          </div>
        </div>

      </div>
      <img src={arrow} alt="Arrow icon" className='cursor-pointer h-8 absolute right-[-5rem] bottom-9 hidden xl:block' id="arrow" onClick={() => scrollToContact("#contact")} />
    </section>
  );

}

export default Projects;
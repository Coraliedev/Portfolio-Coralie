import React from 'react';
import allomovie from '../assets/images/allomovie.jpg';
import arrow from '../assets/images/arrow.png';

const Projects: React.FC = () => {
  const scrollToContact = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="projects" className='block relative section_padding section_height my-0 mx-40 box-border min-h-[fit-content]'>
      <p className='text-center text-xl mb-4 text-gray-600 mt-4'>Browse My Recent</p>
      <p className='text-5xl text-center font-bold w-full mb-4'>Projects</p>
      <div id="experience-details-container" className='flex justify-center gap-8 mb-8 mt-8 flex-wrap'>
        <div id="details-container color-container" className='border-gray-400 gap-8 mb-8 mt-8 p-6 bg-white rounded-2xl border border-gray-200 text-center w-fit'>
          <div id="article-container" className='flex flex-wrap flex-row gap-10 justify-around'>
            <img src={allomovie} alt="project allomovie" id="project-img" className='rounded-2xl w-[350px]'/>
          </div>
          <h2 id="experience-sub-title project-title" className='font-semibold text-2xl mb-8 m-4 text-black'>Allomovie</h2>
          <div id="btn-container" className='flex justify-center gap-4'>
            <button id="btn btn-color-2 project-btn" className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://github.com/Coraliedev/IncubateurProject_AlloMovie')
            } >Github</button>
            <button id="btn btn-color-2 project-btn" className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://incubateur-project-allo-movie.vercel.app/')
            } >Live Demo</button>
          </div>
        </div>
        <div id="details-container color-container" className='border-gray-400 gap-8 mb-8 mt-8 p-6 flex-1 bg-white rounded-2xl border border-gray-200 text-center w-fit'>
          <div id="article-container" className='flex flex-wrap flex-row gap-10 justify-around'>
            <img src={allomovie} alt="project allomovie" id="project-img" className='rounded-2xl w-[350px]'/>
          </div>
          <h2 id="experience-sub-title project-title" className='font-semibold text-2xl mb-8 m-4 text-black'>Allomovie</h2>
          <div id="btn-container" className='flex justify-center gap-4'>
            <button id="btn btn-color-2 project-btn" className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://github.com/Coraliedev/IncubateurProject_AlloMovie')
            } >Github</button>
            <button id="btn btn-color-2 project-btn" className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://incubateur-project-allo-movie.vercel.app/')
            } >Live Demo</button>
          </div>
        </div>
        <div id="details-container color-container" className='border-gray-400 gap-8 mb-8 mt-8 p-6 flex-1 bg-white rounded-2xl border border-gray-200 text-center w-fit'>
          <div id="article-container" className='flex flex-wrap flex-row gap-10 justify-around'>
            <img src={allomovie} alt="project allomovie" id="project-img" className='rounded-2xl w-[350px]'/>
          </div>
          <h2 id="experience-sub-title project-title" className='font-semibold text-2xl mb-8 m-4 text-black'>Allomovie</h2>
          <div id="btn-container" className='flex justify-center gap-4'>
            <button id="btn btn-color-2 project-btn" className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://github.com/Coraliedev/IncubateurProject_AlloMovie')
            } >Github</button>
            <button id="btn btn-color-2 project-btn" className='font-semibold transition-all duration-300 ease-in-out p-4 w-32 rounded-full bg-transparent text-black border border-gray-400' onClick={
              () => window.open('https://incubateur-project-allo-movie.vercel.app/')
            } >Live Demo</button>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className='cursor-pointer h-8 absolute right-[-5rem] bottom-9' id="arrow" onClick={() => scrollToContact("#contact")} />
    </section>
  );
};

export default Projects;
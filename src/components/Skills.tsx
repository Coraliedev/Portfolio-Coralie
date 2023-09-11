import React from 'react';
import checkmark from '../assets/images/checkmark.png';
import frontenddata from '../assets/data/frontend.data.json';
import backenddata from '../assets/data/backend.data.json';
import arrow from '../assets/images/arrow.png';

const Skills: React.FC = () => {

  const scrollToProjects = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="skills" className='block relative section_padding section_height my-0 mx-40 box-border min-h-[fit-content]'>
      <p className='text-center text-xl mb-4 text-gray-600 mt-4'>Explore My</p>
      <p className='text-5xl text-center font-bold w-full mb-4'>Skills</p>
      <div id="experience_details_contaiiner" className='flex justify-center flex-col'>
        <div id="about-containers" className='flex mt-8 mb-8 gap-8'>
          <div id="details_containers" className='p-6 flex-1 bg-white rounded-2xl border border-gray-200 text-center'>
            <h2 className='text-gray-700 font-semibold text-[1.75rem] mb-8'>Frontend Development</h2>
            <div id="article-container" className='flex flex-wrap flex-row gap-10 justify-around'>

              {frontenddata.frontend.map((skill) => (

                <article className='flex flex-wrap w-40 gap-2'>
                  <img src={checkmark} alt="experience icon" className=' h-8' />
                  <div> <h3 className="text-xl font-bold text-start">{skill.name}</h3>
                    <p className='text-start text-gray-600'>{skill.experience}</p></div>
                </article>

              ))
              }

            </div>
          </div>
          <div id="details_containers" className='p-6 flex-1 bg-white rounded-2xl border border-gray-200 text-center'>
            <h2 id="experience-sub-title" className='text-gray-700 font-semibold text-[1.75rem] mb-8'>Backend Development</h2>
            <div id="article-container" className='flex flex-wrap flex-row gap-10 justify-around'>
              
                {backenddata.backend.map((skill) => (
                  <article className='flex flex-wrap w-40 gap-2'>
                    <img src={checkmark} alt="experience icon" className=' h-8' />
                    <div>
                      <h3 className="text-xl font-bold text-start">{skill.name}</h3>
                      <p className='text-start'>{skill.experience}</p>
                    </div>
                    </article>
                ))
                }
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className='cursor-pointer h-8 absolute right-[-5rem] bottom-9' id="arrow" onClick={() => scrollToProjects("#projects")} />
    </section >
  );
};

export default Skills;
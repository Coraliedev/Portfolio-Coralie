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
    <section id="skills" className='block relative section_padding lg:h-[96vh] h-fit my-0 xl:mx-40 mx-10 box-border min-h-fit mb-16 lg:mb-0'>
      <p className='text-center sm:text-xl text-lg mb-4 text-gray-600 mt-4'>Explore My</p>
      <p className='sm:text-5xl text-3xl  text-center font-bold w-full mb-4'>Skills</p>
      <div className='flex justify-center flex-col'>
        <div className='flex flex-wrap mt-8 mb-8 gap-8'>
          <div className='p-6 flex-1 rounded-2xl border-2 border-gray-400 text-center'>
            <h2 className='text-gray-600 font-semibold sm:text-[1.75rem] text-[1.5rem] mb-8'>Frontend Development</h2>
            <div className='flex flex-wrap flex-row gap-10 justify-around'>

              {frontenddata.frontend.map((skill) => (

                <article className='flex flex-wrap gap-2 w-40'>
                  <img src={checkmark} alt="experience icon" className=' h-8' />
                  <div> <h3 className="sm:text-xl text-lg font-bold text-start">{skill.name}</h3>
                    <p className='text-start text-gray-600'>{skill.experience}</p></div>
                </article>

              ))
              }

            </div>
          </div>
          <div className='p-6 flex-1 rounded-2xl border-2 border-gray-400 text-center'>
            <h2 className='text-gray-600 font-semibold sm:text-[1.75rem] text-[1.5rem] mb-8'>Backend Development</h2>
            <div className='flex flex-wrap flex-row gap-10 justify-around'>
              
                {backenddata.backend.map((skill) => (
                  <article className='flex flex-wrap gap-2 w-40'>
                    <img src={checkmark} alt="experience icon" className=' h-8' />
                    <div>
                      <h3 className="sm:text-xl text-lg font-bold text-start">{skill.name}</h3>
                      <p className='text-start'>{skill.experience}</p>
                    </div>
                    </article>
                ))
                }
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className='cursor-pointer h-8 absolute right-[-5rem] bottom-9 hidden xl:block' id="arrow" onClick={() => scrollToProjects("#projects")} />
    </section >
  );
};

export default Skills;
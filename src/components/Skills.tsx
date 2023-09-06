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
    <section id="skills">
      <p>Explore My</p>
      <p>Skills</p>
      <div id="experience_details_contaiiner">
        <div id="about-containers">
          <div id="details_containers">
            <h2 id="experience-sub-title">Frontend Development</h2>
            <div id="article-container">
              <article>
                {frontenddata.frontend.map((skill) => (
                  <>
                    <img src={checkmark} alt="experience icon" className=' h-8' />
                    <h3>{skill.name}</h3>
                    <p>{skill.experience}</p>
                  </>
                ))
                }

              </article>
            </div>
          </div>
          <div id="details_containers">
            <h2 id="experience-sub-title">Backend Development</h2>
            <div id="article-container">
              <article>
                {backenddata.backend.map((skill) => (
                  <>
                    <img src={checkmark} alt="experience icon" className=' h-8' />
                    <h3>{skill.name}</h3>
                    <p>{skill.experience}</p>
                  </>
                ))
                }
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className='cursor-pointer h-8 absolute right-[5rem] bottom-[2,5rem]' id="arrow" onClick={() => scrollToProjects("#projects")}/>
    </section>
  );
};

export default Skills;
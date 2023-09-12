import React from 'react';
import profilImg from '../assets/images/profil.png';
import CV from '../assets/CV.pdf';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';

const Profil: React.FC = () => {

  const scrollToContact = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section id="profil" className='section_padding mx-10 box-border min-h-min-content flex justify-center gap-20 h-[80vh]'>
      <div className="section__pic-container flex h-[400px] w-[400px] my-auto mx-0">
        <img src={profilImg} alt="Coralie profile picture"/>
      </div>
      <div className='self-center text-center'>
        <p className='font-semibold text-center text-xl mb-4 text-gray-600'>Hello, I'm</p>
        <h1 className='text-5xl text-center font-bold w-full mb-4'>Coralie Acquaert</h1>
        <p className='font-semibold text-center text-3xl mb-4 text-gray-700'>Web developer</p>
        <div className='flex justify-center gap-4'>
          <button className='font-semibold transition-all duration-300 ease p-4 w-fit rounded-[2rem] border border-black hover:cursor-pointer' onClick={() => window.open(CV)}>Download CV</button>
          <button className='font-semibold transition-all duration-300 ease p-4 w-fit rounded-[2rem] border border-black hover:cursor-pointer text-white bg-gray-800' onClick={() => scrollToContact("#contact")}>Contact Info</button>
        </div>
        <div className='flex justify-center mt-[1rem] gap-4'>
          <img src={linkedin} alt="My linkedin profile" className='cursor-pointer h-8' onClick={() => location.href = 'https://www.linkedin.com/in/coralie-acquaert/'} />
          <img src={github} alt="My github profile" className='cursor-pointer h-8' onClick={() => location.href = 'https://github.com/Coraliedev'} />
        </div>
      </div>
    </section>
  );
};

export default Profil;
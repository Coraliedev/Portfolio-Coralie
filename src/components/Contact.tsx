import React from 'react';
import email from '../assets/images/email.png';
import linkedin from '../assets/images/linkedin.png';

const Contact: React.FC = () => {
  return (
    <section id="contact" className='block relative section_padding my-0 mx-40 box-border min-h-fit flex justify-center flex-col h-[70vh] '>
      <p className='text-center text-xl mb-4 text-gray-600 mt-4' >Get in Touch</p>
      <h1 className='text-5xl text-center font-bold w-full mb-4'>Contact Me</h1>
      <div id="contact-info-upper-container" className='flex justify-center rounded-full border border-gray-400 my-8 p-2 w-fit m-auto'>
        <div id="contact-info-container" className='flex items-center justify-center gap-2 m-4'>
          <img src={email} alt="email icon" id="icon contact-icon"  className='h-8 cursor-pointer' />
          <p><a href="mailto:coralie.acquaert@gmail.com">coralie.acquaert@gmail.com</a></p>
       </div>
       <div id="contact-info-container" className='flex items-center justify-center gap-2 m-4'>
          <img src={linkedin} alt="linkedin icon" id="icon contact-icon"  className='h-8' />
          <p><a href="https://www.linkedin.com/in/coralie-acquaert/" target='_blank'>Linkedin</a></p>
       </div>
      </div>
    </section>
  );
};

export default Contact;
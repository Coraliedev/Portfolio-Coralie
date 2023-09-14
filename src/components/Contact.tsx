import React from 'react';
import email from '../assets/images/email.png';
import linkedin from '../assets/images/linkedin.png';

const Contact: React.FC = () => {
  return (
    <section id="contact" className='block relative section_padding my-0 mx-0 box-border min-h-fit flex justify-center flex-col h-fit lg:h-[70vh] w-full'>
      <p className='text-center sm:text-xl text-lg mb-4 text-gray-600 mt-4 w-full' >Get in Touch</p>
      <h1 className='sm:text-5xl text-3xl text-center font-bold w-full mb-4 w-full'>Contact Me</h1>
      <div id="contact-info-upper-container" className='flex justify-center rounded-full border border-gray-400 sm:my-8 my-2 sm:p-2 p-1 sm:m-auto mr-2 ml-2 flex-wrap'>
        <div id="contact-info-container" className='flex items-center justify-center gap-2 sm:m-4 m-2'>
          <img src={email} alt="email icon" id="icon contact-icon"  className='h-8' />
          <p><a href="mailto:coralie.acquaert@gmail.com">coralie.acquaert@gmail.com</a></p>
       </div>
       <div id="contact-info-container" className='flex items-center justify-center gap-2 sm:m-4 m-2'>
          <img src={linkedin} alt="linkedin icon" id="icon contact-icon"  className='h-6' />
          <p><a href="https://www.linkedin.com/in/coralie-acquaert/" target='_blank'>Linkedin</a></p>
       </div>
      </div>
    </section>
  );
};

export default Contact;
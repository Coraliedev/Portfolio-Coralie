import experience from '../assets/images/experience.png';
import education from '../assets/images/education.png';
import arrow from '../assets/images/arrow.png';

const About: React.FC = () => {



  function scrollToSkills(id: string){
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="about" className='relative section_padding lg:h-[96vh] h-fit mx-10 box-border min-h-fit mb-16 lg:mb-0' >
      <p className='text-center sm:text-xl text-lg mb-4 text-gray-600 mt-4'>Get to Know more</p>
      <p className='sm:text-5xl text-3xl text-center font-bold w-full mb-4'>About me</p>
      <div className='gap-8'>
        <div className='gap-8 mb-8 lg:mt-28 mt-12 flex justify-center items-center sm:flex-row flex-col '>
          <div className='flex flex-col sm:w-[40vw] w-[70vw] text-center border-2 border-gray-400 p-[1,5rem] rounded-[2rem]'>
            <img src={experience} alt="experience icon" id="icon" className='m-auto h-8 w-8' />
            <h1 className='lg:text-2xl text-xl text-center font-bold'>Experience</h1>
            <p>1- year</p>
            <p> Web Development</p>
          </div>
          <div className='flex flex-col p-[1,5rem] text-center sm:w-[40vw] w-[70vw] rounded-[2rem] border-gray-400 border-2'>
            <img src={education} alt="education icon" id="icon" className='m-auto h-8 w-8' />
            <h1 className='lg:text-2xl text-xl text-center font-bold'>Education</h1>
            <p>Professional License in chemistry</p>
            <p>License in chemistry</p>
          </div>
        </div>
        <div>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis alias dolorem, fugit ipsum quasi officiis, minus dolor, saepe cum dignissimos inventore adipisci? Facere similique nam reprehenderit pariatur sunt. Ipsam, mollitia! Veritatis asperiores sed sit. Saepe, sit repellat, nulla, quidem magnam ab consequatur tenetur voluptate excepturi corrupti cum obcaecati nisi?</p>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className='cursor-pointer h-8 absolute right-[5rem] bottom-9 hidden xl:block' id="arrow" onClick={() => scrollToSkills("#skills")} />
    </section>
  );
};

export default About;
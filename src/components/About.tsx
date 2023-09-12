import experience from '../assets/images/experience.png';
import education from '../assets/images/education.png';
import arrow from '../assets/images/arrow.png';

const About: React.FC = () => {



  function scrollToSkills(id: string){
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="about" className='relative section_padding section_height mx-10 box-border min-h-[fit-content]' >
      <p id="section__text__p1" className='text-center text-xl mb-4 text-gray-600 mt-4'>Get to Know more</p>
      <p id="title" className='text-5xl text-center font-bold w-full mb-4'>About me</p>
      <div id="section-container" className='gap-8'>
        <div id="about-containers" className='gap-4 flex mb-8 mt-28 flex justify-center'>
          <div id="details-container" className='flex flex-col justify-start w-[30vw] text-center border border-black p-[1,5rem] flex bg-write rounded-[2rem]'>
            <img src={experience} alt="experience icon" id="icon" className='m-auto cursor-pointer h-8 w-8' />
            <h1 className='text-2xl text-center font-bold'>Experience</h1>
            <p>1- year</p>
            <p> Web Development</p>
          </div>
          <div id="details-container" className='flex flex-col text-center w-[30vw] bg-write rounded-[2rem] border-black border'>
            <img src={education} alt="education icon" id="icon" className='m-auto cursor-pointer h-8 w-8' />
            <h1 className='text-2xl text-center font-bold'>Education</h1>
            <p>Professional License in chemistry</p>
            <p>License in chemistry</p>
          </div>
        </div>
        <div id="text-container">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis alias dolorem, fugit ipsum quasi officiis, minus dolor, saepe cum dignissimos inventore adipisci? Facere similique nam reprehenderit pariatur sunt. Ipsam, mollitia! Veritatis asperiores sed sit. Saepe, sit repellat, nulla, quidem magnam ab consequatur tenetur voluptate excepturi corrupti cum obcaecati nisi?</p>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className='cursor-pointer h-8 absolute right-[5rem] bottom-9' id="arrow" onClick={() => scrollToSkills("#skills")}/>
    </section>
  );
};

export default About;
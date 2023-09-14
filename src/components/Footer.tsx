import navdata from '../assets/data/nav.data.json';

const Footer: React.FC = () => {

  const scrollToComponent = (id: string) => {
    const element = document.querySelector(id);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  }; 

  return (
    <footer className='sm:h-[26vh] mx-4 h-[35vh]'>
      <nav className='flex justify-around items-center sm:h-[17vh] h-fit'>
        <div id="nav-links-container">
        <ul className='sm:gap-[2rem] gap-[1.5rem] sm:text-[1.5rem] text-[1.25rem] flex sm:flex-row flex-col sm:mt-0 mt-12 sm:mb-0 mb-4'>
        {navdata.sections.map((section) => (
          <li key={section.id}>
            <button className='hover:text-gray-400 hover:underline hover:underline-offset-[1rem] ' onClick={() => scrollToComponent(section.id)}>{section.name}</button>
          </li>
        ))}
      </ul>
        </div>
      </nav>
      <p className='text-center'>
        © 2023 Coralie Acquaert
      </p>
    </footer>
  );
};

export default Footer;
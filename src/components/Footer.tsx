import navdata from '../assets/data/nav.data.json';

const Footer: React.FC = () => {

  const scrollToComponent = (id: string) => {
    const element = document.querySelector(id);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  }; 

  return (
    <footer className='h-[26vh] mx-4'>
      <nav className='flex justify-around items-center h-[17vh]'>
        <div id="nav-links-container">
        <ul className='gap-[2rem] text-[1.5rem] hidden xl:flex'>
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
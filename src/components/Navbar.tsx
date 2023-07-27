import navdata from '../assets/data/nav.data.json';


const NavBar = () => {

  const scrollToComponent = (id: string) => {
    const element = document.querySelector(id);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className='flex justify-around items-center h-[17vh] '>
      <div className='text-[2rem] cursor-default'>Coralie Acquaert</div>
      <ul className='flex gap-[2rem] text-[1.5rem]'>
        {navdata.sections.map((section) => (
          <li key={section.id}>
            <button className='hover:text-gray-400 hover:underline hover:underline-offset-[1rem] ' onClick={() => scrollToComponent(section.id)}>{section.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  )

};

export default NavBar;
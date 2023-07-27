import navdata from '../assets/data/nav.data.json';


const NavBar = () => {

  const scrollToComponent = (id: string) => {
    const element = document.querySelector(id);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (<nav>
    <div>Coralie Acquaert</div>
    <nav>
      <ul>
        {navdata.sections.map((section) => (
          <li key={section.id}>
            <button onClick={() => scrollToComponent(section.id)}>{section.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  </nav>)

};

export default NavBar;
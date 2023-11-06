import { useState } from 'react';

export default function Menu({ resumeMenu }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='burger-menu'>
      <div
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      {menuOpen && (
        <nav>
          <ul className='menu'>
            <li>
              <a href='#home'>{resumeMenu.home}</a>
            </li>
            <li>
              <a href='#about'>{resumeMenu.about}</a>
            </li>
            <li>
              <a href='#projects'>{resumeMenu.projects}</a>
            </li>
            <li>
              <a href='#skills'>{resumeMenu.skills}</a>
            </li>
            <li>
              <a href='#contact'>{resumeMenu.contact}</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

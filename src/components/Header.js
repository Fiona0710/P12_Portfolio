import React, { useState, useMemo } from 'react';
import Typical from 'react-typical';
import Switch from 'react-switch';
import Menu from './Menu.js';

function Header({ sharedData, resumeBasicInfo, ...resumeMenu }) {
  const [checked, setChecked] = useState(false);

  const onThemeSwitchChange = (isChecked) => {
    setChecked(isChecked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = 'data-theme';
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
    body.setAttribute(dataThemeAttribute, newTheme);
  };
  // useMemo est utilisé ici pour optimiser les performances en mémorisant l'animation généré par Typical. Cela évite de recalculer cette valeur à chaque fois que le composant est rendu.
  const HeaderTitleTypeAnimation = useMemo(() => {
    if (resumeBasicInfo) {
      return (
        // Le composant Typical est utilisé pour créer une animation de texte où le contenu change avec une animation de frappe.
        <Typical
          className='title-styles'
          steps={resumeBasicInfo.title}
          loop={50}
        />
      );
    } else {
      return null;
    }
  }, [resumeBasicInfo]);

  if (sharedData && resumeBasicInfo) {
    const name = sharedData.name;

    return (
      <header
        id='home'
        style={{ height: window.innerHeight - 140, display: 'block' }}
      >
        <Menu {...resumeMenu} />
        <div
          className='row aligner'
          style={{ height: '100%' }}
        >
          <div className='col-md-12'>
            <div>
              <br />
              <h1 className='mb-0'>
                <Typical
                  steps={[name]}
                  wrapper='p'
                />
              </h1>
              <div className='title-container'>{HeaderTitleTypeAnimation}</div>
              {/* Le composant Switch est utilisé pour permettre à l'utilisateur de basculer entre les thèmes clairs et sombres de la page. */}
              <Switch
                checked={checked}
                onChange={onThemeSwitchChange}
                offColor='#500025'
                onColor='#f5f5f5'
                className='react-switch mx-auto'
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className='iconify'
                    data-icon='twemoji:bat'
                    data-inline='false'
                    style={{
                      display: 'block',
                      height: '100%',
                      fontSize: 25,
                      textAlign: 'end',
                      marginLeft: '20px',
                      color: '#500025',
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className='iconify'
                    data-icon='noto-v1:sun-with-face'
                    data-inline='false'
                    style={{
                      display: 'block',
                      height: '100%',
                      fontSize: 25,
                      textAlign: 'end',
                      marginLeft: '10px',
                      color: '#500025',
                    }}
                  ></span>
                }
                id='icon-switch'
              />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return null;
}

export default Header;

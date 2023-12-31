import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TriskelAnimation from './components/TriskelAnimation';

function App() {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  // Fonction pour appliquer la langue sélectionnée
  const applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    const resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    loadResumeFromPath(resumePath);
  };

  // Fonction pour échanger la langue actuellement active
  const swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    const pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(pickedLangIconId)
      .removeAttribute('filter', 'brightness(40%)');
    document
      .getElementById(oppositeLangIconId)
      .setAttribute('filter', 'brightness(40%)');
  };

  // Charge les données partagées et appliquer la langue au montage du composant
  useEffect(() => {
    loadSharedData();
    applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Récupérer des données des fichiers res.primaryLanguage.json et res.secondaryLanguage.json
  // en utisant une variable d'environnement ce permet d'ajuster automatiquement les chemins en fonction de l'environnement
  const loadResumeFromPath = (path) => {
    fetch(`${process.env.PUBLIC_URL}/${path}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setResumeData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  // Récupérer des données du fichier portfolio_shared_data.json
  const loadSharedData = () => {
    fetch(`${process.env.PUBLIC_URL}/portfolio_shared_data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSharedData(data);
        document.title = `${data.basic_info.name}`;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <Header
        sharedData={sharedData.basic_info}
        resumeBasicInfo={resumeData.basic_info}
        resumeMenu={resumeData.menu}
      />
      {/* Sélecteur de langue */}
      <div className='col-md-12 mx-auto text-center language'>
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$primaryLanguage,
              window.$secondaryLanguageIconId
            )
          }
          style={{ display: 'inline' }}
        >
          <span
            className='iconify language-icon mr-5'
            data-icon='twemoji-flag-for-flag-france'
            data-inline='false'
            id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$secondaryLanguage,
              window.$primaryLanguageIconId
            )
          }
          style={{ display: 'inline' }}
        >
          <span
            className='iconify language-icon'
            data-icon='twemoji-flag-for-flag-united-kingdom'
            data-inline='false'
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />

      <Contact
        resumeContact={resumeData.contact}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
      <TriskelAnimation sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
}

// Export du composant App comme composant par défaut
export default App;

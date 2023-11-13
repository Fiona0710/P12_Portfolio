import { useState } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

function Projects({ resumeBasicInfo, resumeProjects }) {
  // State pour stocker les détails du projet sélectionné
  const [deps, setDeps] = useState({});

  // State pour gérer l'affichage/masquage de la modal avec détails du projet
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  // Fonction pour afficher la modal avec détails du projet avec les données fournies
  const handleDetailsModalShow = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  // Fonction pour masquer la modal des détails du projet
  const detailsModalClose = () => setDetailsModalShow(false);

  return (
    <section id='portfolio'>
      <div className='col-md-12'>
        {/* Titre de la section */}
        <h1
          className='section-title'
          style={{ color: 'black' }}
        >
          <span>{resumeBasicInfo?.section_name.projects}</span>
        </h1>

        <div className='col-md-12 mx-auto'>
          <div className='row mx-auto'>
            {/* Mapping des projets pour les afficher */}
            {resumeProjects &&
              resumeBasicInfo &&
              resumeProjects.map((projects) => (
                <div
                  className='col-sm-12 col-md-6 col-lg-4'
                  key={projects.title}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Container du projet avec image cliquable */}
                  <span className='portfolio-item d-block'>
                    <div
                      className='foto'
                      onClick={() => handleDetailsModalShow(projects)}
                    >
                      {/* Image du projet avec date et titre */}
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/${projects.images[0]}`}
                          alt='projectImages'
                          height='230'
                          style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                            position: 'relative',
                          }}
                        />
                        <span className='project-date'>
                          {projects.startDate}
                        </span>
                        <br />
                        <p className='project-title-settings mt-3'>
                          {projects.title}
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Modal avec détails du projet */}
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
}

export default Projects;

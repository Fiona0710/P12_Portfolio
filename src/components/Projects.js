import { useState } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

function Projects({ resumeBasicInfo, resumeProjects }) {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const handleDetailsModalShow = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  const detailsModalClose = () => setDetailsModalShow(false);

  return (
    <section id='portfolio'>
      <div className='col-md-12'>
        <h1
          className='section-title'
          style={{ color: 'black' }}
        >
          <span>{resumeBasicInfo?.section_name.projects}</span>
        </h1>
        <div className='col-md-12 mx-auto'>
          <div className='row mx-auto'>
            {resumeProjects &&
              resumeBasicInfo &&
              resumeProjects.map((projects) => (
                <div
                  className='col-sm-12 col-md-6 col-lg-4'
                  key={projects.title}
                  style={{ cursor: 'pointer' }}
                >
                  <span className='portfolio-item d-block'>
                    <div
                      className='foto'
                      onClick={() => handleDetailsModalShow(projects)}
                    >
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

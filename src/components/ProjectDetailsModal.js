import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
// Styles spécifiques pour le slider theme light et dark
import AwesomeSliderStyles from '../scss/light-slider.scss';
import AwesomeSliderStyles2 from '../scss/dark-slider.scss';
// Animation personnalisée pour le slider.
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

function ProjectDetailsModal({ data, onHide, ...props }) {
  // onHide fonction pour gérer la fermeture de la modale.
  const images = data.images;

  return (
    // Utilisation du composant Modal de react-bootstrap
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='modal-inside'
    >
      <span
        onClick={onHide}
        className='modal-close'
      >
        <i className='fas fa-times fa-3x close-icon'></i>
      </span>
      <div className='col-md-12'>
        <div
          className='col-md-10 mx-auto'
          style={{ paddingBottom: '50px' }}
        >
          {/* Une bibliothèque de slider réactif. */}
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation='scaleOutAnimation'
            className='slider-image'
          >
            {/* Mapping des images du projet */}
            {data.technologies &&
              images.map((elem, i) => (
                <div
                  key={i}
                  data-src={`${process.env.PUBLIC_URL}/${elem}`}
                />
              ))}
          </AwesomeSlider>
        </div>
        <div className='col-md-10 mx-auto'>
          {/* Affichage du titre du projet avec liens éventuels */}
          <h3 style={{ padding: '5px 5px 0 5px' }}>
            {data.title}
            {data.url ? (
              <span>
                {/* Lien vers le code du projet */}
                <a
                  href={data.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-href'
                  title={data.urlTitle}
                >
                  <i
                    className='fas fa-external-link-alt'
                    style={{ marginLeft: '10px' }}
                  ></i>
                </a>
                {data.urlWebSite ? (
                  // Lien vers le site Web du projet
                  <a
                    href={data.urlWebSite}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link-href'
                    title={data.urlWebSiteTitle}
                  >
                    <i
                      className='fas fa-eye'
                      style={{ marginLeft: '10px' }}
                    ></i>
                  </a>
                ) : null}
              </span>
            ) : null}
          </h3>
          {/* Affichage de la description du projet */}
          <p className='modal-description'>{data.description}</p>
          <div className='col-md-12 text-center'>
            {/* Affichage des technologies utilisées avec leurs icônes respectives */}
            <ul className='list-inline mx-auto'>
              {data.technologies &&
                data.technologies.map((icon, i) => (
                  <li
                    className='list-inline-item mx-3'
                    key={i}
                  >
                    <span>
                      <div className='text-center'>
                        <i
                          className={icon.class}
                          style={{ fontSize: '300%' }}
                        >
                          <p
                            className='text-center'
                            style={{ fontSize: '30%' }}
                          >
                            {icon.name}
                          </p>
                        </i>
                      </div>
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectDetailsModal;

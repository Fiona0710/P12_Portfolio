import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../scss/light-slider.scss';
import AwesomeSliderStyles2 from '../scss/dark-slider.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

function ProjectDetailsModal({ data, onHide, ...props }) {
  const images = data.images;

  return (
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
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation='scaleOutAnimation'
            className='slider-image'
          >
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
          <h3 style={{ padding: '5px 5px 0 5px' }}>
            {data.title}
            {data.url ? (
              <span>
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
          <p className='modal-description'>{data.description}</p>
          <div className='col-md-12 text-center'>
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

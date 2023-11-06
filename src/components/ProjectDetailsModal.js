import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../scss/light-slider.scss';
import AwesomeSliderStyles2 from '../scss/dark-slider.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

function ProjectDetailsModal({ data, onHide, ...props }) {
  if (data) {
    const images = data.images;
    var title = data.title;
    var description = data.description;
    var url = data.url;
    var urlWebSite = data.urlWebSite;
    var urlTitle = data.urlTitle;
    var urlWebSiteTitle = data.urlWebSiteTitle;

    if (data.technologies) {
      var tech = data.technologies.map((icons, i) => {
        return (
          <li
            className='list-inline-item mx-3'
            key={i}
          >
            <span>
              <div className='text-center'>
                <i
                  className={icons.class}
                  style={{ fontSize: '300%' }}
                >
                  <p
                    className='text-center'
                    style={{ fontSize: '30%' }}
                  >
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      if (images) {
        var img = images.map((elem, i) => {
          return (
            <div
              key={i}
              data-src={elem}
            />
          );
        });
      }
    }
  }
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
            {img}
          </AwesomeSlider>
        </div>
        <div className='col-md-10 mx-auto'>
          <h3 style={{ padding: '5px 5px 0 5px' }}>
            {title}
            {url ? (
              <span>
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-href'
                  title={urlTitle}
                >
                  <i
                    className='fas fa-external-link-alt'
                    style={{ marginLeft: '10px' }}
                  ></i>
                </a>
                {urlWebSite ? (
                  <a
                    href={urlWebSite}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link-href'
                    title={urlWebSiteTitle}
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
          <p className='modal-description'>{description}</p>
          <div className='col-md-12 text-center'>
            <ul className='list-inline mx-auto'>{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectDetailsModal;

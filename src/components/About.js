import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';

function About({ sharedBasicInfo, resumeBasicInfo }) {
  // Extraction des données nécessaires des props pour la section "À propos"
  let profilepic = sharedBasicInfo
    ? `${process.env.PUBLIC_URL}/images/${sharedBasicInfo.image}`
    : '';
  let sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : '';
  let hello = resumeBasicInfo ? resumeBasicInfo.description_header : '';
  let about = resumeBasicInfo ? resumeBasicInfo.description : '';

  return (
    <section id='about'>
      <div className='col-md-12'>
        <h1 style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
        <div className='row center mx-auto mb-5'>
          <div className='col-md-4 mb-5 center'>
            <div className='polaroid'>
              <span style={{ cursor: 'auto' }}>
                {/* Image de profil */}
                <img
                  height='250px'
                  src={profilepic}
                  alt='Avatar placeholder'
                />
                {/* Icône React */}
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                />
              </span>
            </div>
          </div>
          <div className='col-md-8 center'>
            <div className='col-md-10'>
              <div
                className='card'
                style={{ borderRadius: '30px' }}
              >
                <div
                  className='card-body font-trebuchet text-justify ml-3 mr-3'
                  style={{
                    height: 'auto',
                    fontSize: '160%',
                    lineHeight: '200%',
                    fontWeight: 'bold',
                  }}
                >
                  <br />
                  {/* En-tête de description "Hello" */}
                  <span>{hello}</span>
                  <br />
                  <br />
                  {/* Description "À propos" */}
                  <div>{about}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

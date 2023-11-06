import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ resumeBasicInfo, resumeContact }) => {
  let sectionName,
    contactName,
    contactNamePlaceholder,
    contactEmail,
    contactEmailPlaceholder,
    contactMessage,
    contactMessagePlaceholder,
    contactSubmit;

  if (resumeBasicInfo && resumeContact) {
    sectionName = resumeBasicInfo.section_name.contact;
    contactName = resumeContact.name;
    contactNamePlaceholder = resumeContact.name_placeholder;
    contactEmail = resumeContact.email;
    contactEmailPlaceholder = resumeContact.email_placeholder;
    contactMessage = resumeContact.message;
    contactMessagePlaceholder = resumeContact.message_placeholder;
    contactSubmit = resumeContact.submit;
  } else {
    sectionName = '';
    contactName = '';
    contactNamePlaceholder = '';
    contactEmail = '';
    contactEmailPlaceholder = '';
    contactMessage = '';
    contactMessagePlaceholder = '';
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm(
      'Voulez-vous vraiment envoyer ce message ?'
    );

    if (isConfirmed) {
      emailjs
        .sendForm(
          'service_esiy8ak',
          'template_5tmnj4e',
          form.current,
          'Ob93Uttl879enZhge'
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Message envoyé avec succès !');
          },
          (error) => {
            console.log(error.text);
            alert("Une erreur s'est produite lors de l'envoi du message.");
          }
        );
    }
  };

  return (
    <section
      id='contact'
      className='pb-5'
    >
      <div className='col-md-12 mx-auto'>
        <div className='col-md-12'>
          <h1 className='section-title'>
            <span>{sectionName}</span>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='form-group'>
            <label htmlFor='name'>{contactName}</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              placeholder={contactNamePlaceholder}
              autoComplete='name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>{contactEmail}</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder={contactEmailPlaceholder}
              autoComplete='email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>{contactMessage}</label>
            <textarea
              className='form-control'
              id='message'
              rows='5'
              name='message'
              placeholder={contactMessagePlaceholder}
              autoComplete='message'
            ></textarea>
          </div>
          <button
            type='submit'
            className='btn'
          >
            {contactSubmit}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;

import React from 'react';

function Contact() {
  return (
    <section
      id='contact'
      className='pb-5'
    >
      <div className='col-md-12 mx-auto'>
        <div className='col-md-12'>
          <h1
            className='section-title'
            style={{ color: 'black' }}
          >
            <span
              className='text-black'
              style={{ textAlign: 'center' }}
            >
              Contactez-moi
            </span>
          </h1>
        </div>
      </div>
      <div className='col-md-8 mx-auto'>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Nom</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Votre nom'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Adresse e-mail</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Votre adresse e-mail'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              className='form-control'
              id='message'
              rows='5'
              placeholder='Votre message'
            ></textarea>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

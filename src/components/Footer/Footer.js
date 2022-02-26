import React from 'react';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer_p'> Made with <span className='fa fa-heart footer_p_span'/> by <a href='https://juanurani.netlify.app/' target='_blank' rel='noopener noreferrer' className='footer_p_a'>Juan</a></p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './Footer.css'

const Footer = () => {
  const links = [
    { text: 'Ayuda', href: './Assets/pages/Help.html' },
    { text: 'Preguntas frecuentes', href: './Assets/pages/FAQ.html' },
    { text: 'Terminos & Condiciones', href: './Assets/pages/Terms.html' },
    { text: 'Contactanos', href: './Assets/pages/Contact.html' }
  ];

  return (
    <footer>
      <div className="footer">
        <ol className="footer-links">
          {links.map((link, index) => (
            <li key={index}><a href={link.href}>{link.text}</a></li>
          ))}
        </ol>
      </div>
      <div className="derechos-reservados">
        <p>© 2023 The Flash Shop - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;

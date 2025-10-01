import React from 'react';

const Social = ({ darkMode, mobile }) => {
  const iconColor = darkMode ? 'white' : 'black';
  const hoverId = darkMode ? 'hover_black' : 'hover_white';

  const socialLinks = [
    { href: 'mailto:ayushabhilasha@gmail.com', icon: 'fa-solid fa-envelope' },
    { href: 'https://github.com/Ayush-Baranwal-X', icon: 'fa-brands fa-github' },
    { href: 'https://www.linkedin.com/in/akbiitd/', icon: 'fa-brands fa-linkedin' },
    { href: 'https://www.instagram.com/cybershot_x/', icon: 'fa-brands fa-instagram' },
    { href: 'https://calendly.com/akbiitd/', icon: 'fa-solid fa-calendar' },
  ];

  return (
    <div>
      <center>
        <div style={{ margin: mobile === false ? '0px 19.5%' : '0px 10%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: iconColor }}
            >
              <i className={`${link.icon} fa-4x`} id={hoverId}></i>
            </a>
          ))}
        </div>
      </center>
    </div>
  );
};

export default Social;

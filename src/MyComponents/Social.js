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
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '25px',  // small horizontal gap
          paddingLeft: mobile ? '5%' : '15%',
          paddingRight: mobile ? '5%' : '15%',
          boxSizing: 'border-box',
        }}
      >
        {socialLinks.map((link, index) => (
          <div
            key={index}
            style={{
              flex: '0 1 auto',   // shrink to content width
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '8px', // vertical gap
            }}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: iconColor }}
            >
              <i className={`${link.icon} fa-4x`} id={hoverId}></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;

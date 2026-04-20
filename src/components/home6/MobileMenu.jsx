import React from 'react';

const navItems = [
  ['Home', '#hero-section'],
  ['About', '#about-section'],
  ['Why Euro Vetix', '#why-us-section'],
  ['Services', '#services-section'],
  ['Brands', '#brands-section'],
  ['Insights', '#blog-section'],
  ['Contact', '#contact-section'],
];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu-wrapper ${isOpen ? 'body-visible' : ''}`}>
      <div className="mobile-menu-area text-center">
        <button className="menu-toggle" type="button" onClick={onClose}><i className="fal fa-times"></i></button>
        <div className="mobile-logo">
          <a href="#hero-section" onClick={onClose}><img alt="Euro Vetix" src="/assets/images/logo/logo-2.png" /></a>
        </div>
        <div className="mobile-menu">
          <ul>
            {navItems.map(([label, href]) => (
              <li key={href}><a href={href} onClick={onClose}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

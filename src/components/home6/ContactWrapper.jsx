import React from 'react';

export default function ContactWrapper() {
  return (
    <div className="contact-wrapper space-bottom bg-theme3">
      <div className="contact-option">
        <i className="fa-regular fa-envelope"></i>
        <span>Looking for a distribution or brand partner?</span>
        <a className="contact-link" href="#contact-section">Contact Euro Vetix today</a>
      </div>
      <div className="social-option">
        <i className="fa-regular fa-thumbs-up"></i>
        <span>Stay connected</span>
        <a className="social-link" href="#newsletter-section">Subscribe for updates</a>
      </div>
    </div>
  );
}

import React from 'react';

export default function SidebarArea({ onClose }) {
  return (
    <div className="sidebar" id="sidebar-area">
      <button className="sidebar-close-btn" type="button" onClick={onClose}>
        <svg className="icon-close" height="12.7px" style={{ enableBackground: 'new 0 0 16 12.7' }} viewBox="0 0 16 12.7" width="16px" x="0px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" y="0px"><g><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width="16" x="0" y="5.4"></rect><rect height="2" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width="16" x="0" y="5.4"></rect></g></svg>
      </button>
      <div className="sidebar-content">
        <div className="sidebar-logo"><a className="dark-logo" href="#hero-section"><img alt="Euro Vetix logo" src="/assets/images/logo/logo.png" /></a></div>
        <div className="sidebar-menu-wrap"></div>
        <div className="sidebar-about">
          <div className="sidebar-header"><h3>About Euro Vetix</h3></div>
          <p>Euro Vetix is a Singapore-based company bringing premium European pet food and supplement brands to a market that values science, quality, and long-term pet wellbeing.</p>
          <a className="theme-btn" href="#contact-section"><span className="link-effect"><span className="effect-1">Contact Us</span><span className="effect-1">Contact Us</span></span></a>
        </div>
        <div className="sidebar-contact">
          <div className="sidebar-header"><h3>Contact Us</h3></div>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i><p>Singapore</p></li>
            <li><i className="fas fa-phone"></i><a href="tel:+6500000000">+65 XXXX XXXX</a></li>
            <li><i className="fas fa-envelope-open-text"></i><a href="mailto:info@eurovetix.com">info@eurovetix.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

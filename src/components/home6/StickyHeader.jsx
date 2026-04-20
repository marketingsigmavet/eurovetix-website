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

export default function StickyHeader({ sticky, onOpenMobileMenu }) {
  return (
    <div className={`sticky-header${sticky ? ' fixed-header animated slideInDown' : ''}`}>
      <div className="container">
        <div className="menu-area">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <a href="#hero-section">
                  <img alt="Euro Vetix logo" src="/assets/images/logo/logo-2.png" />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu d-none d-lg-inline-block">
                <ul className="navigation">
                  {navItems.map(([label, href]) => (
                    <li key={href}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </nav>
              <div className="navbar-right d-inline-flex d-lg-none">
                <button className="menu-toggle sidebar-btn" type="button" onClick={onOpenMobileMenu}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </button>
              </div>
            </div>
            <div className="col-auto d-none d-lg-block">
              <a className="theme-btn bg-theme" href="#contact-section">
                <span className="link-effect">
                  <span className="effect-1">Become a Partner</span>
                  <span className="effect-1">Become a Partner</span>
                </span>
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

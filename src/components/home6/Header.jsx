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

export default function Header({ onOpenMobileMenu, onOpenSearch, onOpenSidebar }) {
  return (
    <header className="nav-header header-style7">
      <div className="sticky-wrapper">
        <div className="main-wrapper">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto logo">
                <div className="header-logo">
                  <a href="#hero-section" aria-label="Euro Vetix home">
                    <img alt="Euro Vetix logo" src="/assets/images/logo/logo-2.png" />
                    <img alt="Euro Vetix logo dark" src="/assets/images/logo/logo.png" />
                  </a>
                </div>
              </div>
              <div className="col-auto nav-menu">
                <nav className="main-menu d-none d-lg-inline-block lh-1">
                  <ul className="navigation">
                    {navItems.map(([label, href]) => (
                      <li key={href}>
                        <a href={href}>{label}</a>
                      </li>
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
              <div className="col-auto header-right-wrapper">
                <div className="header-right">
                  <button className="search-btn" type="button" onClick={onOpenSearch}>
                    <span className="icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                  </button>
                  <a className="theme-btn bg-theme" href="#contact-section">
                    <span className="link-effect">
                      <span className="effect-1">Become a Partner</span>
                      <span className="effect-1">Become a Partner</span>
                    </span>
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                  <div className="sidebar-icon">
                    <button className="sidebar-tab open" type="button" onClick={onOpenSidebar}>
                      <img alt="Open sidebar" src="/assets/images/icons/sidebar-dot.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

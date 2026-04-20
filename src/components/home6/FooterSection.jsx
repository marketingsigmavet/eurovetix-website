import React from 'react';

export default function FooterSection() {
  return (
    <>
      <footer id="footer-section" className="footer-section bg-dark">
        <div className="footer-top space">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 footer-brand">
                <div className="brand-header">
                  <a className="footer-logo d-block mb-20" href="#hero-section">
                    <img alt="Euro Vetix" src="/assets/images/logo/logo-2.png" />
                  </a>
                  <p className="text">
                    Euro Vetix introduces scientifically trusted European pet care brands to Singapore through strong partnerships with veterinary clinics and specialty retailers.
                  </p>
                </div>
                <div className="footer-social">
                  <a className="social-link" href="#contact-section">FB.</a>
                  <a className="social-link" href="#contact-section">IG.</a>
                  <a className="social-link" href="#contact-section">LN.</a>
                  <a className="social-link" href="#contact-section">YT.</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="row">
                  <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                    <div className="footer-widget">
                      <h4 className="title">Company</h4>
                      <ul className="list-unstyled">
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#brands-section">Brands</a></li>
                        <li><a href="#distribution-section">Distribution</a></li>
                        <li><a href="#blog-section">Insights</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                    <div className="footer-widget">
                      <h4 className="title">Support</h4>
                      <ul className="list-unstyled">
                        <li><a href="#services-section">Services</a></li>
                        <li><a href="#pricing-section">Partnership Models</a></li>
                        <li><a href="#contact-section">Become Partner</a></li>
                        <li><a href="#newsletter-section">Newsletter</a></li>
                        <li><a href="#contact-section">Enquiry</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 md-d-none"></div>
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget ml-0 mb-0">
                  <h4 className="title">Newsletter</h4>
                  <p className="text">Receive updates about new brands, product launches, and insights.</p>
                  <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input autoComplete="on" className="email" name="email" placeholder="Enter your email" required type="email" />
                      <button type="submit"><i className="far fa-paper-plane"></i><span className="btn-title"></span></button>
                    </div>
                  </form>
                  <div className="notify">
                    <div className="icon"><i className="fa-regular fa-bell"></i></div>
                    Singapore • Premium Pet Care • European Brands
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-0">©2026 - All Rights Reserved by Euro Vetix</p>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="footer-policy">
                  <a href="#contact-section">Privacy</a>
                  <a href="#contact-section">Terms</a>
                  <a href="#contact-section">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-top">
        <svg className="progress-circle svg-content" height="100%" viewBox="-1 -1 102 102" width="100%">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }}></path>
        </svg>
      </div>
    </>
  );
}

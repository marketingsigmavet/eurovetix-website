import React from 'react';

export default function CtaSection() {
  return (
    <section className="cta-section style-4 bg-theme2">
      <div className="bg image mbm-color-dodge">
        <img alt="cta background" src="/assets/images/cta/hm6-bg01.png" />
      </div>
      <div className="overlay"></div>
      <div className="container py-75">
        <div className="row gy-30 align-items-center">
          <div className="col-lg-6">
            <div className="social-proof">
              <div className="icon"><i className="fa-solid fa-check"></i></div>
              <p className="text">
                Partner with Euro Vetix to build premium,
                <br />
                scientifically trusted pet care brands in Singapore
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-btn text-right md-text-left">
              <a className="theme-btn bg-dark" href="#contact-section">
                <span className="link-effect">
                  <span className="effect-1">Partner With Euro Vetix</span>
                  <span className="effect-1">Partner With Euro Vetix</span>
                </span>
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

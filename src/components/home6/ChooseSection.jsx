import React from 'react';

const reasons = [
  ['Structured Distribution', 'We build strong relationships with veterinary clinics and premium pet retailers across Singapore.'],
  ['Market Development Support', 'From launch positioning to education and visibility, we help premium brands grow sustainably.'],
  ['Long-Term Partnership Mindset', 'Euro Vetix is designed to build enduring value for brands, clinics, retailers, and pet owners.'],
];

export default function ChooseSection() {
  return (
    <>
      <section id="why-us-section" className="choose-section style-6 bg-theme3 space overflow-hidden">
        <div className="container-fluid px-150 xxl-px-80 lg-px-30 md-px-15">
          <div className="row gy-30 align-items-center">
            <div className="col-lg-4 col-xxl-4">
              <div className="choose-content-wrapper">
                <div className="title-area twoT">
                  <div className="sub-title">
                    <span><i className="asterisk"></i></span>
                    WHY EURO VETIX
                  </div>
                  <h2 className="sec-title " data-animation="slide-right">
                    Connecting European
                    <br />
                    quality with Singapore’s
                    <span className="bold"> premium pet care market</span>
                  </h2>
                  <p className="sec-text text-gray">
                    Euro Vetix is launching with a clear purpose: to introduce trustworthy European pet food and supplement brands to a market that values quality, science, and responsible growth.
                  </p>
                </div>
                <ul className="features-list">
                  <li>European quality standards and scientific positioning</li>
                  <li>Focused on veterinary and specialty retail channels</li>
                </ul>
                <a className="theme-btn bg-dark mt-35" href="#brands-section">
                  <span className="link-effect">
                    <span className="effect-1">Explore Brand Potential</span>
                    <span className="effect-1">Explore Brand Potential</span>
                  </span>
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-xxl-4 md-d-none">
              <div className="choose-image-wrapper">
                <div className="thumb-bg">
                  <img alt="background" src="/assets/images/choose/hm6-bg01.png" />
                </div>
                <div className="thumb">
                  <img alt="Euro Vetix market growth" src="/assets/images/choose/hm6-img01.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xxl-4">
              <div className="choose-right-wrapper">
                <div className="right-top">
                  <div className="icon"><i className="fa-solid fa-check"></i></div>
                  <h4 className="text">
                    We are building a strong
                    <br />
                    foundation for premium pet care growth
                  </h4>
                </div>
                <div className="py-40"><div className="border"></div></div>
                {reasons.map(([title, text], index) => (
                  <div className={`featured-box ${index < reasons.length - 1 ? 'mb-45' : ''}`} key={title}>
                    <div className="icon">
                      <img alt="icon" src={`/assets/images/icons/hm6-choose_icon0${index + 1}.png`} />
                    </div>
                    <div className="content">
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper-section br-20 lg-br-0 overflow-hidden mx-30 lg-mx-0"></div>
    </>
  );
}

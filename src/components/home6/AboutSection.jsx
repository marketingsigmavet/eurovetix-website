import React from 'react';

const highlights = [
  ['European Manufacturing Excellence', 'Partnering with brands known for strict quality standards, research-driven formulation, and consistent product reliability.'],
  ['Veterinary Credibility', 'Supporting veterinarians and pet professionals with scientifically developed nutritional and healthcare solutions.'],
];

export default function AboutSection() {
  return (
    <section className="about-section style-6 space overflow-hidden bg-theme3" id="about-section">
      <div className="container">
        <div className="row gy-50">
          <div className="col-lg-6">
            <div className="about-thumb-area mr-60 xl-mr-0">
              <div className="about-slider swiper">
                <div className="swiper-wrapper">
                  {[1, 2, 3].map((item) => (
                    <div className="swiper-slide" key={item}>
                      <div className="about-slide_thumb">
                        <img alt="Euro Vetix about" src="/assets/images/about/hm6-img01.jpg" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="array-button">
                  <button className="array-prev">
                    <i className="fa-light fa-arrow-left-long"></i>
                  </button>
                  <button className="array-next active">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
              <div className="customar-box">
                <div className="box-top">
                  <div className="awards">
                    <span className="count-number odometer" data-count="1">1</span>
                    <span className="plus">st</span>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                </div>
                <div className="box-bottom">
                  <h6>
                    Launching a new standard
                    <br />
                    for premium pet care
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-wrapper">
              <div className="title-area two">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  About Euro Vetix
                </div>
                <h2 className="sec-title mb-25 " data-animation="slide-right">
                  A New Standard in Premium Pet Care
                  <br />
                  <span className="bold">Distribution</span>
                </h2>
                <p className="sec-text text-gray mb-20">
                  Euro Vetix is a Singapore-based company dedicated to bringing high-quality European pet food and supplement brands to the local market. Our focus is on products developed with scientific expertise, high safety standards, and proven nutritional value.
                </p>
                <p className="sec-text text-gray">
                  We partner with trusted European manufacturers to introduce innovative pet care solutions that support long-term health, wellbeing, and quality of life for pets.
                </p>
              </div>
              <div className="feature-list">
                {highlights.map(([title, text]) => (
                  <div className="feature-item align-items-start" key={title}>
                    <div className="icon">
                      <i className="flaticon-service"></i>
                    </div>
                    <div>
                      <p className="fw-semibold mb-1">{title}</p>
                      <span className="text-gray">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-35 pb-25">
                <div className="border">
                  <span className="bar"></span>
                </div>
              </div>
              <ul className="features-list">
                <li>Singapore-based entry platform for premium European brands</li>
                <li>Structured support for retail, veterinary, and market development partners</li>
              </ul>
              <a className="theme-btn bg-dark mt-35" href="#services-section">
                <span className="link-effect">
                  <span className="effect-1">Learn More About Us</span>
                  <span className="effect-1">Learn More About Us</span>
                </span>
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-top-right wow slideInRight">
        <img alt="about shape" src="/assets/images/choose/shape01.png" />
      </div>
      <div className="p-bottom-right wow img-anim-right">
        <img alt="about shape" src="/assets/images/about/hm6-about-line.png" />
      </div>
    </section>
  );
}

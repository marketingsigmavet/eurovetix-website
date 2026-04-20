import React from 'react';

const slides = [
  {
    image: '/assets/images/banner/hm6-img01.png',
    subtitle: 'European Quality • Scientific Nutrition',
    title: ['Premium European Pet', 'Care in Singapore'],
    text:
      'Euro Vetix introduces trusted European pet food and supplement brands to Singapore. We partner with vets and retailers to deliver high-quality nutrition for modern pet care.',
  },
  {
    image: '/assets/images/banner/hm6-img02.png',
    subtitle: 'Market Entry • Retail Growth',
    title: ['European Innovation for', 'Singapore Pets'],
    text:
      'Euro Vetix builds a strong platform for premium brands that value quality, education, and long-term market growth in the region.',
  },
];

export default function HeroSection() {
  return (
    <section id="hero-section" className="hero-section style-6 mx-30 nhb-br-0 lg-mx-0 mt-30 lg-mt-0">
      <div className="p-top-left animate__animated animate__bounceInLeft wow" data-wow-delay="300ms" data-wow-duration="1500ms">
        <img alt="shape" src="/assets/images/banner/home4-shape02.png" />
      </div>
      <div className="scroll-down z-3" data-tilt data-tilt-max="15">
        <a href="#about-section" id="scrollLink">
          <span className="scroll-wrap">
            <span>Scroll down</span>
          </span>
          <div className="icon">
            <img alt="arrow down" src="/assets/images/icons/arrow-down-long.png" />
          </div>
        </a>
      </div>
      <div className="p-top-right wow slideInDown" data-wow-delay="500ms" data-wow-duration="1000ms">
        <img alt="shape" src="/assets/images/banner/home4-shape01.png" />
      </div>
      <div className="hero-slider-6 swiper">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="hero-content md-mb-50">
                      <div className="sub-title mb-20 text-white " data-animation="slide-right">
                        <span><i className="asterisk"></i></span>
                        {slide.subtitle}
                      </div>
                      <h1 className="title " data-animation="slide-right">
                        {slide.title[0]}
                        <br />
                        <span>{slide.title[1]}</span>
                      </h1>
                      <div className="text">
                        <div className="icon spin">
                          <img alt="star" src="/assets/images/shapes/star3.png" />
                        </div>
                        <p>{slide.text}</p>
                      </div>
                      <div className="d-flex flex-wrap gap-3 align-items-center">
                        <a className="theme-btn bg-color10" href="#brands-section">
                          <span className="link-effect">
                            <span className="effect-1">Explore Our Brands</span>
                            <span className="effect-1">Explore Our Brands</span>
                          </span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                        <a className="theme-btn bg-transparent border-white text-white" href="#contact-section">
                          <span className="link-effect">
                            <span className="effect-1">Become a Partner</span>
                            <span className="effect-1">Become a Partner</span>
                          </span>
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="hero-right">
                      <div className="image-box">
                        <img alt="Euro Vetix hero" src={slide.image} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <div className="info-box style-2 bg-theme3 z-1 shape-mockup-wrap">
        <div className="inner-box">
          <div className="bg image">
            <img alt="background" src="/assets/images/banner/hm5-info-bg.png" />
          </div>
          <div className="content">
            <div className="awards">
              <span className="count-number odometer" data-count="100">100</span>
              <span className="plus">%</span>
            </div>
            <p>
              Focused on premium
              <br />
              market development
            </p>
          </div>
          <div className="image p-bottom-right shape-mockup" data-right="15px">
            <img alt="icon" src="/assets/images/banner/hm6-info-img01.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

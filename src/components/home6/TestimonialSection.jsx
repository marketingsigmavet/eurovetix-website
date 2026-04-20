import React from 'react';

const testimonials = [
  ['A professional platform for premium brand entry', 'Euro Vetix is built around quality, scientific positioning, and long-term market development rather than short-term distribution.', 'Brand Development Focus'],
  ['Strong alignment with veterinary and retail needs', 'The company’s approach supports trusted product recommendations, education, and consistent supply relationships across the market.', 'Channel Strategy'],
  ['A modern partner for European pet care companies', 'Euro Vetix combines local market understanding with a premium brand-building mindset suitable for Singapore.', 'Market Entry Vision'],
  ['Built to grow with the market', 'As a new company, Euro Vetix is focused on establishing a credible, structured foundation that can scale with the right partners.', 'Growth Mindset'],
];

export default function TestimonialSection() {
  return (
    <section id="testimonials-section" className="testimonial-section style-6 space overflow-hidden bg-dark mx-30 lg-mx-0 br-20 lg-br-0">
      <div className="shape-mockup jump" data-bottom="70px" data-left="35%">
        <img alt="shape" src="/assets/images/testimonial/hm6-dotshape.png" />
      </div>
      <div className="container">
        <div className="row gy-30">
          <div className="col-lg-4 col-md-6">
            <div className="testi-content-wrap">
              <div className="title-area white two">
                <div className="sub-title"><span><i className="asterisk"></i></span>TRUST & POSITIONING</div>
                <h2 className="sec-title " data-animation="slide-right">
                  Building trusted
                  <br />
                  <span className="bold text-theme2">industry relationships</span>
                </h2>
              </div>
              <div className="testi-clutch mb-35">
                <div className="review-card-three">
                  <span className="avarage-rating text-theme2">SG</span>
                  <div className="rating-inner">
                    <span className="rating-text text-white">Singapore-focused premium pet care platform</span>
                    <span className="stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="testi-btn-wrapper">
                <div className="array-button">
                  <button className="array-prev"><i className="fa fa-arrow-left-long"></i></button>
                  <button className="array-next active"><i className="fa fa-arrow-right-long"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="testi-slider-6 swiper">
              <div className="swiper-wrapper">
                {testimonials.map(([title, text, role], index) => (
                  <div className="swiper-slide" key={title}>
                    <div className="testimonial-card-five style-6">
                      <div className="inner-box">
                        <div className="content">
                          <h4 className="title"><i className="fa-solid fa-quote-left"></i>{title}</h4>
                          <div className="rating">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            <span>5.0</span>
                          </div>
                          <p>{text}</p>
                        </div>
                        <div className="author-wrap">
                          <div className="author-thumb"><img alt="author" src={`/assets/images/blog/social-pr0${(index % 3) + 1}.jpg`} /></div>
                          <div className="author-info">
                            <h5>Euro Vetix</h5>
                            <p className="user-title">{role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

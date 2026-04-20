import React from 'react';

const services = [
  ['Brand Distribution', 'Introducing premium European pet food and supplement brands to veterinary clinics and specialty retail stores.', '01'],
  ['Veterinary Channel Development', 'Supporting veterinarians with trusted nutritional and healthcare solutions developed with scientific expertise.', '02'],
  ['Retail Network Expansion', 'Expanding availability of premium pet care products across Singapore’s specialty retail network.', '03'],
  ['Marketing Support', 'Supporting brand awareness through structured marketing and educational initiatives.', '04'],
  ['Product Education', 'Providing training and product knowledge support for retail teams and veterinary professionals.', '01'],
  ['Market Entry Strategy', 'Helping European brands successfully establish presence in Singapore’s premium pet care market.', '02'],
];

export default function ServiceSection() {
  return (
    <section id="services-section" className="service-section style-6 bg-white space overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service-title-area d-flex justify-content-between sm-flex-column sm-mb-30">
              <div className="title-area dark three">
                <div className="sub-title">
                  <span><i className="asterisk"></i></span>
                  WHAT WE DO
                </div>
                <h2 className="sec-title mb-0 " data-animation="slide-right">
                  Building strong pet care brands
                  <br />
                  <span className="bold">in Singapore</span>
                </h2>
              </div>
              <div className="service-btn sm-justify-content-start">
                <a className="theme-btn bg-transparent" href="#contact-section">
                  <span className="link-effect">
                    <span className="effect-1">Discuss a Partnership</span>
                    <span className="effect-1">Discuss a Partnership</span>
                  </span>
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-wrapper">
              {services.map(([title, text, icon], index) => (
                <div className="service-single-item" key={title}>
                  <div className="item-left">
                    <div className="image">
                      <img alt={title} src="/assets/images/service/hm6-img01.jpg" />
                    </div>
                    <div className="item-wrap">
                      <div className="icon">
                        <img alt="icon" src={`/assets/images/icons/hm6-icon0${icon}.png`} />
                      </div>
                      <h3 className="text"><a href="#contact-section">{title}</a></h3>
                    </div>
                  </div>
                  <div className="item-right">
                    <div className="item-right-inner">
                      <p>{text}</p>
                      <a className="icon" href="#contact-section" aria-label={`Read more about ${title}`}>
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const models = [
  {
    name: 'Retail Partner',
    desc: 'For specialty pet retailers expanding their premium assortment.',
    items: ['Premium European brands', 'Product education', 'Marketing support'],
    featured: false,
  },
  {
    name: 'Veterinary Partner',
    desc: 'For clinics seeking scientific nutrition and supplement solutions.',
    items: ['Veterinary portfolio', 'Professional guidance', 'Supply relationship'],
    featured: true,
  },
  {
    name: 'Brand Partner',
    desc: 'For European manufacturers growing in the Singapore market.',
    items: ['Market entry strategy', 'Channel development', 'Local brand support'],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <>
      <section id="pricing-section" className="pricing-section style-3 space bg-theme3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="title-area">
                <div className="sub-title"><span><i className="asterisk"></i></span>PARTNERSHIP MODELS</div>
                <h2 className="sec-title " data-animation="slide-right">
                  Choose the right partnership path
                  <br />
                  <span className="bold">with Euro Vetix</span>
                </h2>
              </div>
              <a className="theme-btn bg-dark mb-50" href="#contact-section">
                <span className="link-effect"><span className="effect-1">Talk to Our Team</span><span className="effect-1">Talk to Our Team</span></span>
                <i className="fa-regular fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="row gy-30">
            {models.map((model) => (
              <div className="col-lg-4 col-md-6" key={model.name}>
                <div className={`pricing-single-box ${model.featured ? 'active' : ''}`}>
                  <div className="pricing-title"><h4>{model.name}</h4></div>
                  <p>{model.desc}</p>
                  <ul className="pricing-list list-unstyled">
                    {model.items.map((item) => <li key={item}><i className="fa-solid fa-check"></i>{item}</li>)}
                  </ul>
                  <a className="theme-btn bg-theme3" href="#contact-section">
                    <span className="link-effect"><span className="effect-1">Enquire Now</span><span className="effect-1">Enquire Now</span></span>
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="wrapper-section br-20 overflow-hidden mx-30 lg-mx-0"></div>
    </>
  );
}

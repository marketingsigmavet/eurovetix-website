import React from 'react';

const projects = [
  {
    category: 'BRAND PORTFOLIO',
    title: 'Premium European Pet Food & Supplements',
    text: 'Euro Vetix collaborates with trusted European manufacturers specializing in nutrition, supplements, and wellness products designed to support healthier lives for pets.',
    items: [
      ['Focus', 'Pet food, supplements, and wellness'],
      ['Market', 'Singapore'],
      ['Positioning', 'Premium, scientific, veterinary-aligned'],
    ],
  },
  {
    category: 'DISTRIBUTION NETWORK',
    title: 'Connecting Brands With Pet Care Professionals',
    text: 'Our distribution approach prioritizes veterinary clinics, specialty pet retailers, and partners who value product quality, education, and sustainable market development.',
    items: [
      ['Channels', 'Veterinary + specialty retail'],
      ['Approach', 'Structured expansion'],
      ['Goal', 'Long-term accessibility and growth'],
    ],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects-section" className="project-section style-6 space-top bg-theme3 mx-30 lg-mx-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-title-area project-slider-wrap">
              <div className="title-area dark three">
                <div className="sub-title text-dark">
                  <span><i className="asterisk"></i></span>
                  OUR FOCUS
                </div>
                <h2 className="sec-title mb-0 " data-animation="slide-right">
                  Building the right ecosystem for
                  <br />
                  <span className="bold">premium pet care growth</span>
                </h2>
              </div>
              <div className="project-btn-wrapper">
                <div className="array-button">
                  <button className="array-prev"><i className="fa fa-arrow-left-long"></i></button>
                  <button className="array-next active"><i className="fa fa-arrow-right-long"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-slider swiper position-relative">
        <div className="swiper-wrapper">
          {projects.map((project, index) => (
            <div className="swiper-slide" key={project.title}>
              <div className="project-wrapper">
                <div className="project-thum">
                  <img alt={project.title} src="/assets/images/project/hm6-thumb01.jpg" />
                </div>
                <div className="project-content">
                  <div className="project-box-title">
                    <p className="sub-title">{project.category}</p>
                    <h2 className="title">{project.title}</h2>
                  </div>
                  <p>{project.text}</p>
                  <ul className="project-list">
                    {project.items.map(([label, value]) => (
                      <li key={label}>
                        <i className="fa-solid fa-check"></i>
                        <span>{label} :</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-35 pb-35"><div className="border white"><span className="bar"></span></div></div>
                  <div className="project-btn">
                    <a className="theme-btn bg-theme2" href={index === 0 ? '#brands-section' : '#contact-section'}>
                      <span className="link-effect">
                        <span className="effect-1">{index === 0 ? 'Explore Portfolio' : 'Partner With Us'}</span>
                        <span className="effect-1">{index === 0 ? 'Explore Portfolio' : 'Partner With Us'}</span>
                      </span>
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-top-right z-1 wow slideInRight">
          <img alt="shape" src="/assets/images/project/hm6-project-shape.png" />
        </div>
        <div className="p-bottom-right z-1 wow img-anim-right">
          <img alt="shape" src="/assets/images/project/hm6-project-line.png" />
        </div>
      </div>
    </section>
  );
}

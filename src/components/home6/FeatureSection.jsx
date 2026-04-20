import React from 'react';

const features = [
  {
    title: 'Carefully Selected\nBrands',
    text: 'We introduce European brands known for innovation, ingredient quality, and scientific formulation.',
    image: '/assets/images/service/hm5-img01.jpg',
    icon: '/assets/images/icons/target01.png',
  },
  {
    title: 'Scientific\nApproach',
    text: 'Our portfolio focuses on products supported by veterinary science and nutritional expertise.',
    image: '/assets/images/service/hm5-img02.jpg',
    icon: '/assets/images/icons/growth-chart3.png',
  },
  {
    title: 'Long-Term\nGrowth',
    text: 'We focus on sustainable brand development and structured market growth across Singapore.',
    image: '/assets/images/service/hm5-img03.jpg',
    icon: '/assets/images/icons/rocket01.png',
  },
];

export default function FeatureSection() {
  return (
    <section id="features-section" className="feature-section space bg-dark style-5 mx-30 lg-mx-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-title-area d-flex justify-content-between sm-flex-column sm-mb-30">
              <div className="title-area white three">
                <div className="sub-title">
                  <span><i className="asterisk"></i></span>
                  WHY WORK WITH EURO VETIX
                </div>
                <h2 className="sec-title mb-0 " data-animation="slide-right">
                  Building the right platform
                  <br />
                  <span className="bold text-theme2">for premium brands</span> in Singapore
                </h2>
              </div>
              <div className="service-btn sm-justify-content-start">
                <a className="theme-btn bg-color10" href="#services-section">
                  <span className="link-effect">
                    <span className="effect-1">View Our Services</span>
                    <span className="effect-1">View Our Services</span>
                  </span>
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={feature.title}>
              <div className={`feature-box-four dark ${index === 1 ? 'current' : ''}`}>
                <div className="inner">
                  <div className="image-box">
                    <div className="thumb">
                      <img alt={feature.title} src={feature.image} />
                    </div>
                    <div className="service-icon">
                      <img alt="icon" src={feature.icon} />
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#why-us-section">{feature.title.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</a>
                    </h4>
                    <p className="text">{feature.text}</p>
                    <a className="service-btn" href="#why-us-section">
                      Learn More <i className="fa fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

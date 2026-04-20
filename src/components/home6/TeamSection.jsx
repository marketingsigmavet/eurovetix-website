import React from 'react';

const cards = [
  ['Veterinary Clinics', 'Trusted professional channel', '/assets/images/team/hm6-img01.png'],
  ['Specialty Retailers', 'Premium in-store presence', '/assets/images/team/hm6-img02.png'],
  ['International Brands', 'Strategic market entry partner', '/assets/images/team/hm6-img03.png'],
  ['Pet Owners', 'Better access to quality care', '/assets/images/team/hm6-img04.png'],
];

export default function TeamSection() {
  return (
    <section id="team-section" className="team-section style-4 space bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="team-title-area mb-60 md-mb-40">
              <div className="title-area mb-0">
                <div className="sub-title"><span><i className="asterisk"></i></span>PARTNERSHIP ECOSYSTEM</div>
                <h2 className="sec-title mb-0 " data-animation="slide-right">
                  Building trusted industry
                  <br />
                  <span className="bold">relationships</span>
                </h2>
              </div>
              <div className="team-btn d-flex align-items-center">
                <a className="theme-btn bg-dark" href="#contact-section">
                  <span className="link-effect">
                    <span className="effect-1">Start a Conversation</span>
                    <span className="effect-1">Start a Conversation</span>
                  </span>
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-100 xxl-px-15 xl-px-15">
        <div className="row gy-25">
          {cards.map(([name, role, image]) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={name}>
              <div className="team-box-four">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image"><img alt={name} src={image} /></div>
                    <div className="share-btn-wrap">
                      <ul className="social-link">
                        <li><a href="#contact-section"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#contact-section"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#contact-section"><i className="fa-brands fa-facebook-f"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="profile-info">
                    <h4 className="name"><a href="#contact-section">{name}</a></h4>
                    <p className="position">{role}</p>
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

import React from 'react';

const steps = [
  ['Brand Selection', 'We partner with European manufacturers who maintain high standards in product development and quality control.', 'icon-comercial'],
  ['Strategic Positioning', 'Each brand is positioned to match Singapore’s premium pet care market expectations and professional recommendations.', 'icon-infomsg'],
  ['Continuous Growth', 'Ongoing distribution, marketing, and educational support helps create sustainable brand development.', 'icon-finished'],
];

export default function ProcessSection() {
  return (
    <>
      <section id="process-section" className="process-section space bg-theme3 overflow-hidden style-5">
        <div className="container">
          <div className="title-area three text-center">
            <div className="sub-title"><span><i className="asterisk"></i></span>OUR APPROACH</div>
            <h2 className="sec-title " data-animation="slide-right">
              A structured path to
              <br />
              <span className="bold">market success</span>
            </h2>
          </div>
          <div className="row gy-30">
            {steps.map(([title, text, icon], index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft" key={title}>
                <div className={`process-single-box br-10 ${index === 1 ? 'current' : ''}`}>
                  <div className="inner-box">
                    <div className="header">
                      <div className="icon"><i className={icon}></i></div>
                      <h4 className="title m-0">{title}</h4>
                    </div>
                    <p className="text">{text}</p>
                    <div className="box-footer"><div className="box-count"><span>{`0${index + 1}`}</span></div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="wrapper-section br-20 lg-br-0 overflow-hidden mx-30 lg-mx-0 mb-30 md-mb-0"></div>
    </>
  );
}

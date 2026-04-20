import React from 'react';

const posts = [
  ['Scientific Pet Nutrition', 'Understanding how scientifically developed pet food supports long-term health and wellbeing.', 'Insights'],
  ['Growing Demand for Premium Pet Products', 'Singapore pet owners increasingly prioritize safety, ingredient quality, and proven nutritional value.', 'Market'],
  ['European Innovation in Pet Care', 'Why European manufacturers remain globally respected for quality standards and product development.', 'Brands'],
];

export default function BlogSection() {
  return (
    <section id="blog-section" className="blog-section space bg-theme3">
      <div className="container">
        <div className="title-area three text-center">
          <div className="sub-title"><span><i className="asterisk"></i></span>INSIGHTS</div>
          <h2 className="sec-title " data-animation="slide-right">
            Knowledge supporting
            <span className="bold"> better pet care</span>
          </h2>
        </div>
        <div className="row gy-30">
          {posts.map(([title, text, category], index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={title}>
              <article className="blog-single-box">
                <div className="inner-box">
                  <div className="blog-image">
                    <img alt={title} src={`/assets/images/blog/blog0${index + 1}.jpg`} />
                    <div className="category-tag">{category}</div>
                  </div>
                  <div className="blog-content">
                    <div className="author">
                      <img alt="Euro Vetix" src={`/assets/images/blog/social-pr0${index + 1}.jpg`} />
                      <span className="name"><span>By</span> Euro Vetix</span>
                    </div>
                    <div className="pt-25 pb-20"><div className="border dark"></div></div>
                    <h4 className="title"><a href="#contact-section">{title}</a></h4>
                    <p className="text">{text}</p>
                    <a className="continue-reading" href="#contact-section">Learn More</a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const brands = ['European Brand 01', 'European Brand 02', 'European Brand 03', 'European Brand 04', 'European Brand 05', 'European Brand 06'];

export default function BrandsSection() {
  return (
    <div id="brands-section" className="brands-section space bg-white">
      <div className="container">
        <div className="title-area three text-center mb-50">
          <div className="sub-title"><span><i className="asterisk"></i></span>OUR PORTFOLIO</div>
          <h2 className="sec-title " data-animation="slide-right">
            Premium European <span className="bold">pet care brands</span>
          </h2>
          <p className="sec-text text-gray">
            Euro Vetix collaborates with trusted European manufacturers specializing in pet nutrition, supplements, and wellness products.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="sponsors-outer">
              <div className="trusted-partners mt--15">
                <span className="bg-white pr-10">Brand logos can be placed here</span>
              </div>
              <div className="brands-slider swiper">
                <div className="swiper-wrapper">
                  {brands.map((brand, index) => (
                    <div className="swiper-slide" key={brand}>
                      <div className="brand-item">
                        <a className="image" href="#contact-section" aria-label={brand}>
                          <img alt={brand} src={`/assets/images/brands/0${(index % 4) + 1}.png`} />
                          <img alt={brand} src={`/assets/images/brands/0${(index % 4) + 1}.png`} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

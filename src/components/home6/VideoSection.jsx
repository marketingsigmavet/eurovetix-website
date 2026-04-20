import React from 'react';

export default function VideoSection() {
  return (
    <section className="video-section bg-theme3 style-3" id="distribution-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="video-area position-relative">
              <div className="video-box">
                <a className="popup-video play-btn style-2" href="#contact-section">
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
              </div>
              <div className="thumb">
                <img alt="Distribution network" className="mw-inherit" src="/assets/images/video/hm6-thumb01.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-container">
        <div className="stat-box bg-theme br_tl-10 white">
          <div className="count-box">
            <span className="count-number odometer" data-count="3">3</span>
            +
          </div>
          <p className="text">Core growth pillars: brands, clinics, retailers</p>
        </div>
        <div className="stat-box bg-theme2 br_br-10 dark">
          <div className="count-box">
            <span className="count-number odometer" data-count="1">1</span>
            st
          </div>
          <p className="text">Launch phase focused on Singapore market development</p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function NewsletterSection() {
  return (
    <section id="newsletter-section" className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter">
              <div className="p-top-left wow slideInLeft"><img alt="shape" src="/assets/images/newslatter/shape01.png" /></div>
              <div className="p-top-right wow slideInRight"><img alt="shape" src="/assets/images/newslatter/shape02.png" /></div>
              <div className="text">
                <h3>Stay updated on new brands, launches, and market insights</h3>
              </div>
              <div className="contact-info">
                <div className="email-icon"><i className="fa-regular fa-envelope"></i></div>
                <div className="email-details">
                  <p>Contact Euro Vetix</p>
                  <a href="mailto:info@eurovetix.com">info@eurovetix.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

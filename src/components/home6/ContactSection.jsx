import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact-section" className="contact-section style-3 overflow-hidden space-top">
      <div className="container">
        <div className="row gy-30 align-items-center">
          <div className="col-lg-6">
            <div className="contact-content-wrap style-2">
              <div className="title-area white two">
                <div className="sub-title"><span><i className="asterisk"></i></span>CONTACT US</div>
                <h2 className="sec-title " data-animation="slide-right">
                  Let’s build the future of
                  <br />
                  pet care together
                </h2>
                <p className="sec-text text-white-75">
                  Connect with Euro Vetix to explore partnership opportunities or learn more about our brand portfolio.
                </p>
              </div>
              <div className="contact-feature-list">
                <div className="item"><i className="fa-solid fa-location-dot"></i><span>Singapore</span></div>
                <div className="item"><i className="fa-solid fa-envelope"></i><a href="mailto:info@eurovetix.com">info@eurovetix.com</a></div>
                <div className="item"><i className="fa-solid fa-phone"></i><a href="tel:+6500000000">+65 XXXX XXXX</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-wrap style-2">
              <div className="header"><h2 className="title">Send us a message</h2></div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group"><input autoComplete="off" name="name" placeholder="Your Name" required type="text" /></div>
                <div className="form-group"><input autoComplete="off" name="email" placeholder="Email Address" required type="email" /></div>
                <div className="form-group"><input autoComplete="off" name="phone" placeholder="Phone" type="text" /></div>
                <div className="form-group">
                  <select autoComplete="off" className="custom-select" defaultValue="" name="service">
                    <option disabled value="">Select Interest</option>
                    <option value="retail">Retail Partnership</option>
                    <option value="vet">Veterinary Partnership</option>
                    <option value="brand">Brand Representation</option>
                    <option value="distribution">Distribution Enquiry</option>
                  </select>
                </div>
                <div className="form-group mb-15"><textarea id="msg" placeholder="Message" required></textarea></div>
                <div className="form-group terms">
                  <input id="terms" required type="checkbox" />
                  <label htmlFor="terms">I agree to be contacted regarding my enquiry.</label>
                </div>
                <button className="theme-btn bg-theme" type="submit">
                  <span className="link-effect"><span className="btn-title">Send Message</span></span>
                  <i className="fa-regular fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

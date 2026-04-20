import React from 'react';

const items = [
  'European Pet Food',
  'Scientific Supplements',
  'Veterinary Credibility',
  'Retail Partnerships',
  'Market Development',
  'Singapore Distribution',
];

export default function MarqueeSection() {
  return (
    <div className="marquee-section style-3">
      <div className="bg image">
        <img alt="marquee background" src="/assets/images/marquee/hm5-bg01.jpg" />
      </div>
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee clearfix marquee-wrap">
          <ul className="marquee_mode marquee__group">
            {items.concat(items).map((item, index) => (
              <li className="item m-item" key={`${item}-${index}`}>
                <img alt="star" className="icon" src="/assets/images/marquee/hm5-star01.png" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

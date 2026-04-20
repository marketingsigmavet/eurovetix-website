import React from 'react';

export default function Preloader({ onClose }) {
  return (
    <div className="loading-screen" id="loading-screen">
      <button className="preloader-close" type="button" onClick={onClose}>x</button>
      <div className="animation-preloader">
        <div className="txt-loading">
          {['E', 'U', 'R', 'O', 'V', 'E', 'T', 'I', 'X'].map((letter, index) => (
            <span className="letters-loading" data-text-preloader={letter} key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

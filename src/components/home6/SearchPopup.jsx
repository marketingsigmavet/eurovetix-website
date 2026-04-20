import React from 'react';

export default function SearchPopup({ onClose }) {
  return (
    <div className="search-popup">
      <button className="close-search" type="button" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
      <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <input id="search" name="search" placeholder="Search sections or services..." required type="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
      </form>
    </div>
  );
}

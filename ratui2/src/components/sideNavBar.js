import React from 'react';

const SideNavbar = () => {
  return (
    <div className="bg-light border-right" id="sidebar">
      <div className="list-group list-group-flush">
        <div className='mb-5'>
            <p>Recruiting Activity Tracker</p>
        </div>
        <a href="#" className="list-group-item list-group-item-action bg-light p-3">Link 1</a>
        <a href="#" className="list-group-item list-group-item-action bg-light p-3">Link 2</a>
        <a href="#" className="list-group-item list-group-item-action bg-light p-3">Link 3</a>
        <a href="#" className="list-group-item list-group-item-action bg-light p-3">Link 4</a>
        <a href="#" className="list-group-item list-group-item-action bg-light p-3">Link 5</a>
        <a href="#" className="list-group-item list-group-item-action bg-light p-3">Link 6</a>
      </div>
    </div>
  );
};

export default SideNavbar;

import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const TopBanner = ({title}) => {
  return (
    <div className="top-banner">
      <div className="container">
        <h1 className="display-4">{title ? `${title}` : "..."}  </h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      </div>
    </div>
  );
};

export default TopBanner;
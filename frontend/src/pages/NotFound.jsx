import React from 'react';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404: Not Found</h1>
        <p className="not-found-text">
          Oops! It looks like the page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;

import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-light p-3">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
        <p>
          This site is built by <a href="https://github.com/Ascension23" target="_blank">Adrian</a>, <a href="https://github.com/sourslaw" target="_blank">Scott</a>, <a href="https://github.com/benjimosso" target="_blank">Daniel</a>, <a href="https://github.com/heparish"
              target="_blank">Haley</a>.
          </p>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;

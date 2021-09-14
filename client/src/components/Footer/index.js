import React from 'react';
import Donate  from "../Donate/donate";


const Footer = () => {

  return (
    <footer className="w-100 mt-auto bg-light pt-4">
      <div className="container text-center mb-5" >
        <h4>
        <p>
          This site was built by <a href="https://github.com/Ascension23" target="_blank">Adrian</a>, <a href="https://github.com/sourslaw" target="_blank">Scott</a>, <a href="https://github.com/benjimosso" target="_blank">Daniel</a>, <a href="https://github.com/heparish"
              target="_blank">Haley</a>.
          </p>
        </h4>
        <Donate/>
     
      </div>
    </footer>
  );
};

export default Footer;

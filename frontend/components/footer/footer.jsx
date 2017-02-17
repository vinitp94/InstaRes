import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-text">
          <p>Developed and designed by Vinit Parikh.</p>
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <a href="https://github.com/vinitp94" target="_blank">
                <img src="https://res.cloudinary.com/dlhshbg79/image/upload/v1484785761/Logomakr_0gmJzG_orzjyt.png"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vinit-parikh-67b7a27b" target="_blank">
                <img src="https://res.cloudinary.com/dlhshbg79/image/upload/v1484785988/Logomakr_2oAfUw_arivhn.png"/>
              </a>
            </li>
            <li>
              <a href="http://www.vinitparikh.com/" target="_blank">
                <img src="https://res.cloudinary.com/dlhshbg79/image/upload/v1487290091/Logomakr_7Z8deU_aa7jus.png"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;

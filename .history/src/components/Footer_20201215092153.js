import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer id="footer">
  <div className="container">
      <div className="row">
        <div className="col-md-12 m-auto">
          <div className="footer-logo">
            {/* <a href="#"><img src alt="scanfcode"></a> */}
          </div>
          <ul className="footer-follow">
            <li><a href="."><i className="fa fa-facebook"></i></a></li>
            <li><a href="."><i className="fa fa-twitter"></i></a></li>
            <li><a href="."><i className="fa fa-google-plus"></i></a></li>
            <li><a href="."><i className="fa fa-instagram"></i></a></li>
            <li><a href="."><i className="fa fa-linkedin"></i></a></li>
            <li><a href="."><i className="fa fa-youtube"></i></a></li>
          </ul>
          <div className="footer-copyright">
            <p>Copyright © 2020. All Rights Reserved. <a href="." target="_blank">Peeps</a> Made by <a href="https://femiakin.com/">Femi</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}

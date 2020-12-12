import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer id="footer">
  <div classNAM="container">
      <div classNAM="row">
        <div classNAM="col-md-12 m-auto">
          <div classNAM="footer-logo">
            {/* <a href="#"><img src alt="scanfcode"></a> */}
          </div>
          <ul classNAM="footer-follow">
            <li><a href="."><i classNAM="fa fa-facebook"></i></a></li>
            <li><a href="."><i classNAM="fa fa-twitter"></i></a></li>
            <li><a href="."><i classNAM="fa fa-google-plus"></i></a></li>
            <li><a href="."><i classNAM="fa fa-instagram"></i></a></li>
            <li><a href="."><i classNAM="fa fa-linkedin"></i></a></li>
            <li><a href="."><i classNAM="fa fa-youtube"></i></a></li>
          </ul>
          <div classNAM="footer-copyright">
            <p>Copyright © 2020. All Rights Reserved. <a href="." target="_blank">Peeps</a> Made by <a href=".">Femi</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}

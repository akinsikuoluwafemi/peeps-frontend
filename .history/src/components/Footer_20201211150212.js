import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer id="footer">
  <div class="container">
      <div class="row">
        <div class="col-md-12 m-auto">
          <div class="footer-logo">
            {/* <a href="#"><img src alt="scanfcode"></a> */}
          </div>
          <ul class="footer-follow">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
          </ul>
          <div class="footer-copyright">
            <p>Copyright © 2020. All Rights Reserved. <a href="#" target="_blank">Peeps</a> Made by <a href="#">Femi</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}

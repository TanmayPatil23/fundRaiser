import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faInstagram, faYoutube, faTwitter, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

const Footer = () => {
  return (

    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify"> A platform where multiple business owners can register their companies and can ask for funding. Investors willing to invest in some startups will have multiple options as per their choices.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><a href="about/about.html">About Us</a></li>
            <li><a href="contact/contact.html">Contact Us</a></li>
            <li><a href="eligibility/eligibility.html">Check Eligibility</a></li>
            <li><a href="apply/apply.html">Apply</a></li>
            <li><a href="contact/contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by Owners</p>
        </div>

        
      </div>
    </div>
  </footer>


  )
}

export default Footer
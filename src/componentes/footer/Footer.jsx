import React from 'react';
import "./footer.css"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import {logo } from "../../../media/logo.png"

export function Footer () {
  return (
    <div>
      <div className='footer'>
        <div className='footer-izq'>
          <div className='footer-izq-contact'>
              <div className='footer-izq-nav'>
                <button className='btn-nav'> Trends</button>
                <button className='btn-nav'> Collections</button>
                <button className='btn-nav'> Tips & guides</button>
                <button className='btn-nav'> Finda a store</button>
                <button className='btn-nav'> Carrers</button>
              </div>
              <div  className='footer-datos'>
                <div className='footer-izq-datos'>
                  <strong><p>darik95@hotmail.com</p></strong>
                  <p>dariomarcuzzi2@gmail.com</p>
                  <p>Tel: (+54) 2323 329434</p>
                </div>
                <div className='footer-der-datos'>
                  <p>Argentina</p>
                  <p>Santa Cruz</p>
                  <p>Pico Truncado</p>
                </div>
                <div></div>

              </div>
              <div className='footer-logo'>
                <img src='https://conceptslife.com/wp-content/uploads/2020/05/cropped-logo_concepts-life_home.png' alt='logo-concepts' width="384px" height="102px" />
                  
              </div>
              <p>
                Todos los derechos reservados 2022 Dario Marcuzzi
              </p>

          </div>
        </div>
        <div className='footer-der'>
          <div className='follow'>
              <label> Follow 
              <li className="wrapper">
                  <li className="icon facebook">
                      <span className="tooltip">Facebook</span>
                      <span><i className="fab fa-facebook-f"><FaFacebookF/></i></span>
                  </li>
                  <li className="icon twitter">
                      <span className="tooltip">Twitter</span>
                      <span><i className="fab fa-twitter"><FaTwitter/></i></span>
                  </li>
                  <li className="icon instagram">
                      <span className="tooltip">Instagram</span>
                      <span><i className="fab fa-instagram"> <FaInstagram/></i></span>
                  </li>
              </li>
              
              </label>
          </div>
          <p>Created By Dario Marcuzzi</p>
        </div>
        
      </div>
      
    </div>
  );
};


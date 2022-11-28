import React from 'react';
import "./parallax3.css"
import { FaArrowRight } from "react-icons/fa";

export function Parallax3  () {
  return (
    <div>
        <div className='bgimg-3'>
          <div className='garden'>
            <div className='pond'>
              <div className='pondImg'>.</div>
              <div className='btnPond'>
              <h1>Discover your true style </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <div className='btn-arrow'>
                <button className='btn-nav'><strong> lear More</strong> <FaArrowRight/> </button>
              </div>
              </div>
            </div>
            <div className='parasol'>
              <div className='parasolImg'>.</div>
              <div className='btnParasol'>
              <h1>Discover your true style </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <div className='btn-arrow'>
                <button className='btn-nav'><strong> lear More</strong> <FaArrowRight/> </button>
              </div>
              </div>
            </div>
            <div className='stove'>
              <div className='stoveImg'>.</div>
              <div className='btnStove'>
              <h1>Discover your true style </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <div className='btn-arrow'>
                <button className='btn-nav'><strong> lear More</strong> <FaArrowRight/> </button>
              </div>
              </div>
            </div>
          
          </div>
        </div>
        <div className='section'>
          <h3 className='border'>Found in over XXXX stores</h3>
          <button className='btn-nav'><strong> lear More</strong> <FaArrowRight/> </button>
        </div>
    </div>
  );
};

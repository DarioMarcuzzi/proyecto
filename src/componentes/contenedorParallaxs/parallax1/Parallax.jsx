import React from 'react';
import "./parallax.css"
import { FaArrowRight } from "react-icons/fa";

export function Parallax () {
  return (
    <div>
        <div className='bgimg-1'>
          <div className='caption'>
            <div className='caption1'>  
              <h1>Discover your true style </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <div className='btn-arrow'>
                <button className='btn-nav'>lear More <FaArrowRight/> </button>
              </div>
            </div>
            <div className='caption2'></div>
            <div className='caption3'></div>
            <div className='caption4'></div>
            <div className='caption5'></div>
            <div className='caption6'></div>
            <div className='caption7'></div>
            <div className='caption8'></div>
          </div>
        </div>

        <div className='section'>
          <h3 className='border'>separador</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
        
 

    </div>
  );
};


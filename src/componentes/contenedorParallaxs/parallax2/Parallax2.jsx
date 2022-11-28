import React from 'react';
import "./parallax2.css"
import { FaArrowRight } from "react-icons/fa";

export function Parallax2  () {
  return (
    <div>
        <div className='bgimg-2'>
          <div className='furniture'>
            <div className='furnitureImg'></div>
            <div className='furnitureBtn'>
            <h1>Discover your true style </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <div className='btn-arrow'>
                <button className='btn-nav'>lear More <FaArrowRight/> </button>
              </div>
            </div>
            
          </div>
        </div>
        <div className='section'>
          <h3 className='border'>separador</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
    </div>
  );
};


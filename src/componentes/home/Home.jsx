import React from 'react';
import { Parallax } from "../contenedorParallaxs/parallax1/Parallax.jsx"
import { Parallax2 } from "../contenedorParallaxs/parallax2/Parallax2.jsx"
import { Parallax3 } from "../contenedorParallaxs/parallax3/Parallax3.jsx"
import Nav from '../nav/Nav';
import "./home.css"
import { FaArrowRight } from "react-icons/fa";

const home = () => {
  return (
    <div className="contenedor-principal">
      <div className="div-nav">
        <Nav/>
      </div>
      
      <div className="div-header">
        <div className='div-header1'></div>
        <div className='div-header2'></div>
        <div className='div-header3'>
            <h1>Retro: Old is New Again</h1>  
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' Lorem Ipsum is simply dummy text of the printing and </p>
          <div className='btn-arrow'>
            <button className='btn-nav'>discover this trend</button>
            <FaArrowRight/>
          </div>
        </div>
      </div>
      
      <div>
        <Parallax />
      </div>
      <div> 
        <Parallax2 />
      </div>
      <div> 
        <Parallax3 />
      </div>


    </div>
  );
};

export default home;
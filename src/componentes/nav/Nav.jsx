import React from 'react';
import "./nav.css"
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='contenedor-principal-nav'>
        <div className='contenedor-nav'>
          <div className='contenedor-nav-izq'>
            <img src='https://res.cloudinary.com/dmpqjroj5/image/upload/v1669213201/prueba/concepts_o8l2eh.webp' alt='logo concepts' width="300px"/>
            <button className='btn-nav'> Trends</button>
            <button className='btn-nav'> Collections</button>
            <button className='btn-nav'> Tips & guides</button>
          </div>
          <div className='contenedor-nav-der'>
            <button className='btn-nav'> Finda a store</button>
            <button className='btn-nav'> Contact us</button>
            <div>
             <FaSearch /> <input type="text"/>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default Nav;
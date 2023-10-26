import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {IoMenu} from 'react-icons/io5'


export default function Navbar() {
  function toggleMenu(){
     
  }
  return (
    <div className=" fixed top-0 w-full bg-white shadow">
      <div className='flex items-center justify-between mx-auto w-[90%] max-w-6xl'>
        <div>
          <img className="h-16"src="../src/images/fissa_logo.png" alt="FISSA BD" />
        </div>
        <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[4.9%] md:w-auto w-full flex items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-[8vw] text-text-color'>
                <li> <Link className='hover:text-green' smooth to ="#"> Home </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#section-1"> Services </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#section-4"> Packages </Link></li>
                <li> <a className="hover:text-green" href="">Bill Payments</a></li>
                <li> <a className="hover:text-green" href="">About Us</a></li>
                <li> <a className="hover:text-green" href="">Contact Us</a></li>
                <IoMenu className='text-3xl cursor pointer md:hidden' onClick={toggleMenu}/>
                
          
            </ul>
        </div>   
      </div>
    </div>
  )
}

import {React, useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {FaBars, FaTimes} from 'react-icons/fa'

// function NavLinks() {
//   return (
//     <>  
//       <li> <Link className='hover:text-green' smooth to ="#"> Home </Link></li>
//       <li> <Link className='hover:text-green' smooth to ="/#section-1"> Services </Link></li>
//       <li> <Link className='hover:text-green' smooth to ="/#section-4"> Packages </Link></li>
//       <li> <Link className='hover:text-green' smooth to ="/#"> Bill Payments </Link></li>
//       <li> <Link className='hover:text-green' smooth to ="/#"> About Us </Link></li>
//       <li> <Link className='hover:text-green' smooth to ="/#"> Contact Us </Link></li>      
//     </>
//   );
// };
//<div className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[4.9%] md:w-auto w-full flex items-center px-5 ${showLinks ? '':'hidden'}`}>

function Navlinks() {
  return (
    <div className='' >
            <ul className='md:hidden flex flex-col gap-[8vw] text-text-color p-8 text-center'>
                <li> <Link className='hover:text-green' smooth to ="#"> Home </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#section-1"> Services </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#section-4"> Packages </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#"> Bill Payments </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#"> About Us </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#"> Contact Us </Link></li>      
            </ul>
    </div>
  )
}


export default function Navbar() {
  
  const [showLinks, setShowLinks] = useState(false);
  
  return (
    <div className="z-[20] fixed top-0 w-full bg-white shadow ">
      <div className='flex items-center justify-between mx-auto max-w-6xl overflow-hidden md:px-0 px-8'>
        <div className=''>
          <img className="h-16"src="/images/fissa_logo.png" alt="FISSA BD" />
        </div>
        <div className='' >
            <ul className='hidden md:flex md:flex-row md:items-center gap-[3vw] text-text-color'>
                <li> <Link className='hover:text-green' smooth to ="#"> Home </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#section-1"> Services </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#section-4"> Packages </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#"> Bill Payments </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#"> About Us </Link></li>
                <li> <Link className='hover:text-green' smooth to ="/#"> Contact Us </Link></li>      
            </ul>
        </div>   
      
        <div className='text-3xl fixed right-7 top-4 cursor-pointer md:hidden' onClick={()=>setShowLinks(!showLinks)}>
              {showLinks ? <FaTimes/> : <FaBars/>}
        </div>        
      </div>
      {showLinks ? <Navlinks/> : ''}
    </div>
    
  )
}

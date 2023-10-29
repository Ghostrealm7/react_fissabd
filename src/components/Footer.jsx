import React from 'react'
import {FaSquareFacebook} from 'react-icons/fa6'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaSquareTwitter} from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='border-t-2 border-grey md:px-0 px-8' id='footer'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex flex-wrap md:flex-row flex-col md:justify-between py-8 gap-7'>
                <div>
                    <h4 className='mb-2 text-lg font-bold'>FissaBD</h4>
                    <h4 className='text-sm'> 4th Floor, Manru Shopping City, Chowhatta, Sylhet 3100, Bangladesh.</h4>
                </div>
                
                <div>
                    <h4 className='mb-2 text-lg font-bold'>Company</h4>
                    <ul>
                        <li className='text-sm leading-loose'><a href="">About Us</a></li>
                        <li className='text-sm leading-loose'><a href="">Our Team</a></li>
                        <li className='text-sm leading-loose'><a href="">Privacy Policy</a></li>
                        <li className='text-sm leading-loose'><a href="">Terms & conditions</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='mb-2 text-lg font-bold'>Resources</h4>
                    <ul>
                        <li className='text-sm leading-loose'><a href="">CCTV Cameras</a></li>
                        <li className='text-sm leading-loose'><a href="">Wireless Routers</a></li>
                        <li className='text-sm leading-loose'><a href="">Port Switches</a></li>
                        <li className='text-sm leading-loose'><a href="">Network Admin Tools</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='mb-2 text-lg font-bold'>Contact</h4>
                    <ul>
                    <li className='text-sm leading-loose'>24/7 Support</li>
                        <li className='text-sm leading-loose'><a href="">hello@example.com</a></li>
                        <li className='text-sm leading-loose'>+88 01711-111111</li>
                        <li className='text-sm leading-loose'>+88 01700-000000</li>
                    </ul>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:justify-between pb-8'>
                <div className='flex gap-4'>
                        <FaSquareFacebook className='text-4xl'/>
                        <FaYoutube className='text-4xl'/>
                        <FaLinkedin className='text-4xl'/>
                        <FaSquareTwitter className='text-4xl'/>
                </div>
                <div>
                    <p className='text-sm'>Copyright by © Company Name</p>
                </div>
            </div>
        </div>
    </div>
  )
}

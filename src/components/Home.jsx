import React from 'react'

import {FaBuilding} from 'react-icons/fa6'
import { IoHome } from "react-icons/io5";
import {IoWifi} from 'react-icons/io5'
import {IoVideocam} from 'react-icons/io5'
import {IoTv} from 'react-icons/io5'
import {FaPhoneAlt} from 'react-icons/fa'
import {FcCheckmark} from 'react-icons/fc'
import {FaHandPointUp} from 'react-icons/fa'
import {SiGoogleforms} from 'react-icons/si'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import {GrConnect} from 'react-icons/gr'
import {BsBoxFill} from 'react-icons/bs'

import Footer from './Footer'

export default function Home() {
  return (
  <>
    <div className="bg-gradient-to-r from-gOne to-gTwo w-full text-text-color h-screen">
      <div className='flex justify-between max-w-6xl mx-auto pt-40'>
        <div className=''>
          <p>Starting at ৳900/month</p>
          <h1 className= 'text-6xl font-bold pt-10 leading-tight'>Ultra-Fast & Reliable Internet Service In Sylhet With 24/7 Quick Support</h1>
          <p className='py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem explicabo, repudiandae vel veritatis magnam!</p>
          <button className='bg-green text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>SEE OUR PLANS</button>
        </div>
        <div>
          <img className="pt-12 "src="../src/images/rocket.png" alt="FISSA BD" />
        </div>
      </div>
    </div>

      <div id="section-1" className='max-w-6xl mx-auto text-center py-20'>
        <div className='flex items-center flex-col gap-3 pt-4'>
          <h1 className='text-4xl font-bold leading-tight'> Our Services</h1>
          <div className="w-36 h-1.5 rounded-lg bg-green"></div>
        </div>

        <p className='pt-12'>leo leo leo leo leo leo caprio caprio caprio need more text here im sleepy Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae rem quaerat, magnam nulla doloribus reiciendis temporibus! Ut deserunt dolores nihil illo rem repellendus, ad incidunt doloremque eligendi magnam autem earum.</p>
        <div className='flex flex-wrap justify-center pt-12 gap-10'>
          <div className='w-80  h-80 p-7 bg-white border-2 rounded-xl border-grey hover:border-green shadow-lg'> 
            <FaBuilding className='text-6xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>Corporate Internet</h3>
            <p className='pt-5'>In addition to broadband internet services, we help our clients build, connect, operate and maintain their own SOHO or office network.</p>
          </div>

          <div className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg'>
            <IoHome className='text-6xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>Home Internet</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet?</p>
          </div>

          <div className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg'>
            <IoWifi className='text-6xl mx-auto'/>
          <h3 className='text-xl font-bold pt-7'>Wifi Hotspot</h3>
          <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet?</p>
          </div>

          <div className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg'>
            <IoVideocam className='text-6xl mx-auto'/>
          <h3 className='text-xl font-bold pt-7'>Video Surveillance</h3>
          <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet?</p>
          </div>

          <div className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg'>
            <IoTv className='text-6xl mx-auto'/>
          <h3 className='text-xl font-bold pt-7'>IPTV Services</h3>
          <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet?</p>
          </div>

          <div className='w-80 h-80 p-7 rounded-xl bg-white border-2 border-grey hover:border-green shadow-lg'>
            <FaPhoneAlt className='text-6xl mx-auto'/>
          <h3 className='text-xl font-bold pt-7'>IP Telephony</h3>
          <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet?</p>
          </div>

        </div>
      </div>
                             
      <div className='max-w-6xl mx-auto flex py-20'>
        <div className='w-2/4 pt-6'>
          <img src="../src/images/card_one.png" alt="IMAGE" />
        </div>
        <div className='w-2/4 pt-12 pr-4'>
          <h1 className='text-4xl font-bold leading-tight'>Benefits of using our home and corporate internet services</h1>
              <p className='pt-8'>The following facilities will be provided in all of our home and corporate internet connections</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto py-20 text-center'> 
        <div className='flex items-center flex-col gap-3 pt-4'>
          <h1 className='text-4xl font-bold leading-tight'> How to apply for connection?</h1>
          <div className="w-48 h-1.5 rounded-lg bg-green"></div>
        </div>
        <p className='pt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita.</p>
      
        <div className='flex flex-wrap justify-center pt-12 gap-10'>
          <div className='w-64  h-80 py-7 px-5 bg-white border-2 border-grey hover:border-green rounded-xl'> 
            <FaHandPointUp className='text-6xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>Select a package</h3>
            <p className='pt-5'>Select a package from our packages list which is most suitable for your daily use.</p>
          </div>

          <div className='w-64 h-80 py-7 px-5 bg-white border-2 border-grey hover:border-green rounded-xl'>
            <SiGoogleforms className='text-6xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>Fill the form</h3>
            <p className='pt-4'>Fill the application form correctly with all your details which we need to provide the connection.</p>
          </div>

          <div className='w-64 h-80 py-7 px-5 bg-white border-2 border-grey hover:border-green rounded-xl'>
            <BsFillCreditCard2BackFill className='text-6xl mx-auto'/>
          <h3 className='text-xl font-bold pt-7'>Make Payment</h3>
          <p className='pt-4'>Pay the fees for your connection. You will only charge for the package you choose. No hidden fees.</p>
          </div>

          <div className='w-64 h-80 py-7 px-5 bg-white border-2 border-grey hover:border-green rounded-xl'>
            <GrConnect className='text-6xl mx-auto'/>
          <h3 className='text-xl font-bold pt-7'>Get the Connection</h3>
          <p className='pt-4'>Our technical team will be contact with you and  provide you the connection as soon possible.</p>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto text-center py-20' id="section-4">
        <div className='flex items-center flex-col gap-3 pt-4'>
          <h1 className='text-4xl font-bold leading-tight'> Our Packages</h1>
          <div className="w-40 h-1.5 rounded-lg bg-green"></div>
        </div>
        <p className='pt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita.</p>
        
        <div className='flex flex-wrap justify-center pt-12 gap-10'>
          <div className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
            <BsBoxFill className='text-5xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>SILVER</h3>
            <p className=' text-3xl text-green'>৳3,000</p>
            <p >12 Mbps Internet Speed</p>
            <p > 35 Mbps Facebook Speed</p>
            <p > 35 Mbps YouTube Speed</p>
            <p >BDIX Speed Unlimited</p>
            <p >Movies, IPTV & Torrent Unlimited</p>
            <p >24/7 Support</p>
            <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
          </div>

          <div className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
            <BsBoxFill className='text-5xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>GOLD</h3>
            <p className=' text-3xl text-green'>৳5,000</p>
            <p > 20 Mbps Internet Speed</p>
            <p > 35 Mbps Facebook Speed</p>
            <p > 35 Mbps YouTube Speed</p>
            <p >BDIX Speed Unlimited</p>
            <p >Movies, IPTV & Torrent Unlimited</p>
            <p >24/7 Support</p>
            <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
          </div>

          <div className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
            <BsBoxFill className='text-5xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>PLATINUM</h3>
            <p className=' text-3xl text-green'>৳8,000</p>
            <p > 30 Mbps Internet Speed</p>
            <p > 35 Mbps Facebook Speed</p>
            <p > 35 Mbps YouTube Speed</p>
            <p >BDIX Speed Unlimited</p>
            <p >Movies, IPTV & Torrent Unlimited</p>
            <p >24/7 Support</p>
            <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
          </div>

          <div className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
            <BsBoxFill className='text-5xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>DIAMOND</h3>
            <p className=' text-3xl text-green'>৳10,000</p>
            <p > 40 Mbps Internet Speed</p>
            <p > 35 Mbps Facebook Speed</p>
            <p > 35 Mbps YouTube Speed</p>
            <p >BDIX Speed Unlimited</p>
            <p >Movies, IPTV & Torrent Unlimited</p>
            <p >24/7 Support</p>
            <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='SECTION-5 max-w-6xl mx-auto flex gap-4 py-20'>
        <div className='w-2/4 pt-12 pl-4'>
          <h1 className='text-4xl font-bold leading-tight'>Leading nationwide internet service provider since 2003</h1>
              <p className='pt-8'>Sylnet has been one of the leading internet service providers in Sylhet, Bangladesh. At Sylnet we are committed to providing the highest quality services to you. we provide faster internet connection for home and corporate users according to the need of customer’s aspiration.We have 17 years experienced and expert team to provide any solutions about broadband internet connectivity within a short time. we are currently serving more than 155 Corporate and more than 7,000 Home users.</p>
              <p className='pt-8'>John Doe</p>
              <p className=''>CEO</p>
        </div>
        <div className='w-2/4 pt-6'>
          <img className='h-3/4'src="../src/images/card_two.png" alt="IMAGE" />
        </div>
      </div>

   <div className='bg-text-color'>
    <div className='max-w-6xl mx-auto text-center pt-20 pb-40'> 
        <div className='flex items-center flex-col gap-3'>
          <h1 className='text-4xl font-bold leading-tight text-white'> Pay your bills through Mobile banking</h1>
          <div className="w-40 h-1.5 rounded-lg bg-green"></div>
        </div>

        <div className='flex flex-wrap justify-center pt-16 gap-10'>
          <div className='w-80  h-80 p-7 bg-white border-2 rounded-xl border-grey hover:border-green'> 
            <img src="../src/images/bkash.png" alt="FISSA BD" />
            <h3 className='text-xl font-bold'>Bkash</h3>
            <p className=''>Merchant: 101-202-303</p>
          </div>

          <div className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl'>
            <div>
                <img src="../src/images/rocketpay.png" alt="FISSA BD" />
            </div>
            <h3 className='text-xl font-bold'>Rocket</h3>
            <p className=''>Merchant: 101-202-303</p>
          </div>
        </div>
    </div>
    </div>

    <Footer />

  </>
  )
}

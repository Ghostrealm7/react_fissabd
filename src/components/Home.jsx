import React from 'react'
import AOS from 'aos';
import { useNavigate} from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

import {FaBuilding, FaEarthAmericas} from 'react-icons/fa6'
import { IoHome, IoWifi, IoVideocam, IoTv } from "react-icons/io5";
import {FaPhoneAlt, FaHandPointUp} from 'react-icons/fa'
import {FcCheckmark} from 'react-icons/fc'
import {SiGoogleforms} from 'react-icons/si'
import {BsFillCreditCard2BackFill, BsBoxFill} from 'react-icons/bs'
import {GrConnect} from 'react-icons/gr'

import Footer from './Footer'

export default function Home() {

    const navigate = useNavigate();

    const navigateHomeInternet = () => {
                navigate('/home-internet');
                };
    const navigateCorporateInternet = () => {
                navigate('/corporate-internet');
                };
    const navigateBandwidthReseller = () => {
                  navigate('/bandwidth-reseller');
                };
              
    useEffect(() => {
        AOS.init();
      }, [])

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
    
    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
          console.log('slide changed');
      });
    }, []);
    
    
  return (
  <>
    <div className="bg-gradient-to-r from-gOne to-gTwo w-full text-text-color ">

      <div className='max-w-6xl mx-auto md:pt-30 pt-24'>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
          >
            <swiper-slide>
            <div className='flex justify-center items-center sm:text-left text-center px-14 bg-bottom bg-no-repeat bg-[url("/images/cloud.png")]'>
              <div className='w-3/4'> 
                <p>Starting at ৳800/month</p>
                <h1 className= 'xl:text-5xl text-3xl font-bold pt-10 leading-8'>Lightning-Fast Connectivity & The Future of Reliable 24/7 Internet Performance</h1>
                <p className='py-12'>Recognized as Dhaka city's most dependable local internet service provider, FISSA has been bridging digital divides since July 2001. Our mission? Delivering high-speed broadband at affordable rates, right to the doorsteps of our cherished local community.</p>
                <button className='bg-green text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>SEE OUR PLANS</button>
              </div>
              <div className='md:inline hidden w-1/4 p-3'>
                <img className="pt-12"src="/images/rocket.png" alt="FISSA BD" />
              </div>
            </div>
            </swiper-slide>
                
            <swiper-slide>
            <div className='sm:text-left text-center px-14 pb-12 bg-text-color'>
              <div className='' data-aos="fade-down" data-aos-duration="1500"> 
                <p>Starting at ৳900/month</p>
                <h1 className= 'xl:text-6xl text-3xl font-bold pt-10 md:leading-tight'>Fastest Internet in DHAKA</h1>
                <p className='py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem explicabo, repudiandae vel veritatis magnam!</p>
                <p className='py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem explicabo, repudiandae vel veritatis magnam!</p>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem explicabo, repudiandae vel veritatis magnam!</p>
                <button className='bg-green text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>SEE OUR PLANS</button>
              </div>
            </div>
            </swiper-slide>

            <swiper-slide>Slide 3
              <img className="h-16"src="/images/fissa_logo.png" alt="FISSA BD" />
            </swiper-slide>
          </swiper-container>
        
      </div>
    </div>
    
    <div className=''>
    <div id="section-1" className='max-w-6xl mx-auto text-center py-20 xl:px-0 px-8'>
        <div data-aos="zoom-in" className='flex items-center flex-col gap-3 pt-4'> 
          <h1 className='text-4xl font-bold leading-tight'> Our Services</h1>
          <div className="w-36 h-1.5 rounded-lg bg-green"></div>
        </div>

        <p data-aos="zoom-in" className='pt-12'>leo leo leo leo leo leo caprio caprio caprio need more text here im sleepy Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae rem quaerat, magnam nulla doloribus reiciendis temporibus! Ut deserunt dolores nihil illo rem repellendus, ad incidunt doloremque eligendi magnam autem earum.</p>
        <div className='flex flex-wrap justify-center pt-12 gap-10'>

          <div data-aos="zoom-in" data-aos-duration="1500" className='w-80  h-80 p-7 bg-white border-2 rounded-xl border-grey hover:border-green shadow-lg hover:cursor-pointer' onClick={navigateCorporateInternet}> 
            <FaBuilding className='text-6xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7 '>Corporate Internet</h3>
            <p className='pt-5'>In addition to broadband internet services, we help our clients build, connect, operate and maintain their own SOHO or office network.</p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg hover:cursor-pointer' onClick={navigateHomeInternet}>
            <IoHome className='text-6xl mx-auto'/>
            <h3 className='text-xl font-bold pt-7'>Home Internet</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet?</p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl shadow-lg hover:cursor-pointer' onClick={navigateBandwidthReseller}>
            <IoWifi className='text-6xl mx-auto'/>
          <h3 className='text-xl font-bold pt-7'>Bandwidth Reseller</h3>
          <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eveniet?</p>
          </div>
        </div>
    </div>
    </div>

    <div className='max-w-6xl mx-auto text-center py-20 xl:px-0 px-8' id="section-4">
        <div data-aos="fade-up" className='flex items-center flex-col gap-3 pt-4'>
          <h1 className='text-4xl font-bold leading-tight'> Our Packages</h1>
          <div className="w-40 h-1.5 rounded-lg bg-green"></div>
        </div>
        <p data-aos="zoom-in"className='pt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita.</p>
          {/* flex flex-wrap justify-center */}
        <div className='pt-12 gap-10'>
        <swiper-container
            ref={swiperElRef}
            slides-per-view="3"
            navigation="true"
            pagination="false"

          >
             <swiper-slide>Slide 1
              <div data-aos="zoom-in-right" data-aos-duration="1500" className='package mx-auto w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
                <BsBoxFill className='text-5xl mx-auto'/>
                <h3 className='text-xl font-bold pt-7'>SILVER</h3>
                <p className=' text-3xl text-green'>৳3,000</p>
                <p >12 Mbps Internet Speed</p>
                <p >35 Mbps Facebook Speed</p>
                <p >35 Mbps YouTube Speed</p>
                <p >BDIX Speed Unlimited</p>
                <p >Movies, IPTV & Torrent Unlimited</p>
                <p >24/7 Support</p>
                <button className=' mt-5 bg-text-color text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>Get Started</button>
              </div>
             </swiper-slide>

             <swiper-slide>Slide 2
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='mx-auto w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
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
             </swiper-slide>

             <swiper-slide>Slide 3
              <div data-aos="zoom-in-up" data-aos-duration="1500" className='mx-auto w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
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
             </swiper-slide>

             <swiper-slide>Slide 4
              <div data-aos="zoom-in-left" data-aos-duration="1500" className='mx-auto w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
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
             </swiper-slide>

             <swiper-slide>Slide 5</swiper-slide>
             <swiper-slide>Slide 6</swiper-slide>
             <swiper-slide>Slide 7</swiper-slide>
             <swiper-slide>Slide 8</swiper-slide>

          </swiper-container>
        </div>
    </div>

    <div className='max-w-6xl mx-auto flex md:flex-row flex-col py-20 xl:px-0 px-8'>
        <div className='md:w-2/4 pt-6'>
          <img src="/images/card_one.png" alt="IMAGE" />
        </div>
        <div className='md:w-2/4 pt-12 pr-4'>
          <h1 className='text-4xl font-bold leading-tight'>Benefits of using our home and corporate internet services</h1>
              <p className='pt-8'>The following facilities will be provided in all of our home and corporate internet connections</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
              <p className='flex pt-8'> <FcCheckmark className='text-2xl pr-1'/>100% Connection Uptime</p>
        </div>
    </div>

   <div className='bg-text-color' id='bill-payments'>
    <div className='max-w-6xl mx-auto text-center pt-20 pb-40 xl:px-0 px-8'> 
        <div className='flex items-center flex-col gap-3' data-aos="zoom-in">
          <h1 className='text-4xl font-bold leading-tight text-white'> Pay your bills through Mobile banking</h1>
          <div className="w-40 h-1.5 rounded-lg bg-green"></div>
        </div>

        <div className='flex flex-wrap justify-center pt-16 gap-10'>
          <div className='w-80  h-80 p-7 bg-white border-2 rounded-xl border-grey hover:border-green' data-aos="zoom-in-right" data-aos-duration="1500"> 
            <img src="/images/bkash.png" alt="FISSA BD" />
            <h3 className='text-xl font-bold'>Bkash</h3>
            <p className=''>Merchant: 101-202-303</p>
          </div>

          <div className='w-80 h-80 p-7 bg-white border-2 border-grey hover:border-green rounded-xl' data-aos="zoom-in-left" data-aos-duration="1500">
            <div>
                <img src="/images/rocketpay.png" alt="FISSA BD" />
            </div>
            <h3 className='text-xl font-bold'>Rocket</h3>
            <p className=''>Merchant: 101-202-303</p>
          </div>
        </div>
    </div>
    </div>

    {/* PAYMENT WEB */}

    <div className='py-12 grid grid-cols-5 grid-rows-2 max-w-5xl mx-auto' id='payment'>
      <div className=''>1
        <div className=''>
          
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='border-2 rounded-full w-28 h-28 overflow-hidden '>
        <img src="/images/bkash.png" alt="FISSA BD" />
        </div>
      </div>
      <div className=''>3
        <div className='border-2 rounded-full w-28 h-28'>
          
        </div>
      </div>
      <div className=''>4
        <div className=''>
          
        </div>
      </div>
      <div>5</div>
      <div>6</div>
      <div className=''>7
        <div className='border-2 rounded-full w-28 h-28'>
          
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-28 h-28 justify-self-center'>
            <FaEarthAmericas className="text-6xl mx-auto"/>
        </div>
      </div>
      <div className=''>1
        <div className='border-2 rounded-full w-28 h-28'>
          
        </div>
      </div>
      <div className=''>10
        <div className=''>
          
        </div>
      </div>

    </div>

    <Footer/>

  </>
  )
}

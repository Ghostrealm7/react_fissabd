import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import { useNavigate} from 'react-router-dom';
import {FaBuilding, FaEarthAmericas} from 'react-icons/fa6'
import { IoHome, IoWifi} from "react-icons/io5";
import {FcCheckmark} from 'react-icons/fc'
import {BsBoxFill} from 'react-icons/bs'


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
    const navigateBkash = () => {
                  navigate('/bkash');
                };
    const navigateRocket = () => {
                  navigate('/rocket');
                };
    const navigateNagad = () => {
                  navigate('/nagad');
                };
    const navigateUpay = () => {
                  navigate('/upay');
                };
              
    useEffect(() => {
        AOS.init();
      }, [])

  return (
  <>
    <div className="w-full">
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
                <img className='w-full h-560' src="/images/banner1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-full h-560' src="/images/banner2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-full h-560' src="/images/banner3.jpg" />
            </SwiperSlide>
          </Swiper>
    </div>
    
    <div className='bg-gradient-to-r from-gOne to-gTwo w-full '>
    <div className='bg-cover bg-no-repeat bg-[url("/images/cloud.png")] h-auto'> 
            <div className='flex justify-center items-center xl:text-left text-center max-w-6xl mx-auto xl:px-0 px-8'>
              <div className='w-3/4'> 
                <p data-aos="fade-right" data-aos-duration="2000" className='mt-8'>Starting at ৳800/month</p>
                <h1 data-aos="zoom-in-right" data-aos-duration="1500" className='sm:text-4xl text-2xl font-bold mt-8'>Lightning-Fast Connectivity & The Future of Reliable 24/7 Internet Performance</h1>
                <p data-aos="fade-right" data-aos-duration="2000" className=''>Recognized as Dhaka city's most dependable local internet service provider, FISSA has been bridging digital divides since July 2001. Our mission? Delivering high-speed broadband at affordable rates, right to the doorsteps of our cherished local community.</p>
                <div className='mt-8'>
                  <button data-aos="fade-up" data-aos-duration="1500"className='bg-green text-white font-bold px-8 py-4 rounded-md hover:opacity-80'>SEE OUR PLANS</button>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000"className='md:flex hidden items-center justify-center w-1/4 h-2/5 py-8'>
                <img className=""src="/images/rocket.png" alt="FISSA BD" />
              </div>
            </div>         
      </div>
    </div>
    
    <div className=''>
    <div id="section-1" className='max-w-6xl mx-auto text-center py-20 xl:px-0 px-8'>
        <div data-aos="fade-up" className='flex items-center flex-col gap-3 pt-4'> 
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

        <div className='pt-12 gap-10'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
            <div data-aos="zoom-in-right" data-aos-duration="1500" className='w-64 py-7 px-5 bg-white border-2 border-grey rounded-xl shadow-lg'> 
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
             </SwiperSlide>

             <SwiperSlide>
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
             </SwiperSlide> 
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
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
    <div className='max-w-6xl mx-auto text-center pt-20 pb-12 xl:px-0 px-8'> 
        <div className='flex items-center flex-col gap-3' data-aos="zoom-in">
          <h1 className='text-4xl font-bold leading-tight text-white'> Pay your bills through Mobile banking</h1>
          <div className="w-40 h-1.5 rounded-lg bg-green"></div>
        </div>

        <div className='block sm:hidden py-12'>
          <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
            <SwiperSlide>
              <div className='w-70 h-70 p-7 bg-white border-2 rounded-xl border-grey hover:border-green mx-auto hover:cursor-pointer' onClick={navigateBkash}> 
                <img src="/images/bkash2.png" alt="FISSA BD" />   
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-70 h-70 p-7 bg-white border-2 border-grey hover:border-green rounded-xl mx-auto hover:cursor-pointer' onClick={navigateRocket}>
                <img src="/images/rocketpay.png" alt="FISSA BD" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-70 h-70 p-7 bg-white border-2 border-grey hover:border-green rounded-xl mx-auto hover:cursor-pointer' onClick={navigateBkash}>
                <img src="/images/nagad.png" alt="FISSA BD" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-70 h-70 p-7 bg-white border-2 border-grey hover:border-green rounded-xl mx-auto hover:cursor-pointer' onClick={navigateUpay}>
                <img className="mx-auto" src="/images/upay.png" alt="FISSA BD" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
    </div>

    {/* PAYMENT WEB */}

    <div className='bg-text-color sm:block hidden pb-20'>
    <div className='py-12 grid grid-cols-5 grid-rows-2 max-w-5xl mx-auto xl:px-0 px-8' id='payment'>
      <div data-aos="zoom-in-right" data-aos-duration="1500" className='flex justify-center items-center'>
        <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-green hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateBkash}>
        <img src="/images/bkash2.png" alt="FISSA BD" />
        </div>
      </div>
      <div className=''>
        <div className=''>
        </div>
      </div>
      <div data-aos="zoom-in" className='flex justify-center items-center'>
        <div className=''>
        <FaEarthAmericas className="text-9xl mx-auto text-white"/>
        </div>
      </div>
      <div>5</div>
      <div data-aos="zoom-in-left" data-aos-duration="1500" className='flex justify-center items-center'>
        <div className='rounded-full w-36 h-36 overflow-hidden hover:border-green hover:border-4 hover:cursor-pointer bg-white flex items-center' onClick={navigateRocket}>
          <img src="/images/rocketpay.png" alt="FISSA BD" />    
        </div>
      </div>
      <div>6</div>
      <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center'>
        <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-green hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateNagad}>
          <img src="/images/nagad.png" alt="FISSA BD" />
        </div>
      </div>
      <div className=''>
        <div className=''>
            
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center'>
        <div className='rounded-full w-36 h-36 overflow-hidden bg-white hover:border-green hover:border-4 hover:cursor-pointer flex items-center' onClick={navigateUpay}>
          <img src="/images/upay.png" alt="FISSA BD" />
        </div>
      </div>
      <div className=''>
        <div className=''>
          
        </div>
      </div>

    </div>
    </div>

    

    <Footer/>

  </>
  )
}

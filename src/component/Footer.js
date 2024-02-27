import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaPhoneAlt  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-red-500  py-12 mx-auto items-center '>
        <div className='flex flex-wrap justify-between text-white px-8'>
            <a href='#' className='flex px-10'><FaPhoneAlt className=' h-9 w-9 pr-2 rounded-xl'/> <p className='pt-3' >Toll free 1800 200 1234</p></a>
            <a href='#' className='flex px-6'><FaFacebook className='h-10 w-10 pr-2' /><p className='pt-3' >www.facebook.com/cripumps</p></a>
            <a href='#' className='flex px-10'><TfiWorld  className='h-10 w-10 pr-2' /><p className='pt-3' >www.crigroups.com</p></a>
        </div>
    </div>
  )
}

export default Footer;
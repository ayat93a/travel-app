import React, {useState} from 'react'
import {BsPerson , BsHeart} from 'react-icons/bs'
import {HiOutlineMenu} from 'react-icons/hi'
import {FaFacebook } from 'react-icons/fa'
import {AiOutlineTwitter , AiFillYoutube , AiOutlineClose} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {IoLogoInstagram} from 'react-icons/io'
import Link from 'next/link'

const Nav = () => {
  const [nav , setNav] = useState(false)
  const [logo , setLogo] = useState(false)
  const handelNav= () =>{
    setNav(!nav)
    setLogo(!logo)
  }
  
  return (
    <div className='absolute z-10 flex items-center justify-between w-full h-20 px-4 text-white'>
      <div>
      <h1 onClick={handelNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>
      <ul className='hidden md:flex'>
      <Link  href='/'>
      <li className='duration-150 ease-in hover:scale-110'>Home</li>
      </Link>
      <Link  href='/#Destination'>
      <li className='duration-150 ease-in hover:scale-110'>Destination</li>
      </Link>
      <Link  href='/#search'>
      <li className='duration-150 ease-in hover:scale-110'>Travel</li>
      </Link>
      <Link  href='/#search'>
      <li className='duration-150 ease-in hover:scale-110'>Book</li>
      </Link>
      
      </ul>
      <div className='hidden md:flex'>
        <BsHeart size={20} className = 'mr-4 hover:scale-125' />
        <BsPerson  size={20} className = 'mr-4 hover:scale-125' />
       
      </div> 
      {/* small devices */}
      <div className='z-20 md:hidden' onClick={handelNav} >
        {/* Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the z-{index} utilities. */}
        {nav? <AiOutlineClose size={20} className='text-black cursor-pointer ' /> : <HiOutlineMenu size={20} className='cursor-pointer'  />}
       
      </div>
      <div onClick={handelNav} className={nav ? 'absolute top-0 left-0 flex flex-col w-full px-4 text-black bg-gray-100/90 py-7 md:hidden z-10 ' : 'text-black z-10 md:hidden absolute left-[-100%] '}>
        
      <ul>
        
        <h1 className='border-b'>BEACHES.</h1>
        <Link  href='/'>
        <li className='border-b'>Home</li>
        </Link>
        <Link  href='/#Destination'>
          <li className='border-b'> Destination </li>
        </Link>
        <Link  href='/#search'>
        <li className='border-b'>Travel</li>
        </Link>
        <Link  href='/#search'>
        <li className='border-b'>Book</li>
        </Link>
        
        <div className='flex flex-col ease-in duration-50 '>
          <button className='my-6 hover:scale-105 '>Search</button>
          <button className='mb-6 hover:scale-105'>Account</button>
        </div>
        <div className='flex justify-between pb-0 mb-0 cursor-pointer' >
          <FaFacebook  className='duration-150 ease-in rounded-full shadow-lg cursor-pointer hover:scale-150 icon shadow-gray-500 ' size={25} />
          <AiOutlineTwitter  className='duration-150 ease-in rounded-full shadow-lg cursor-pointer icon shadow-gray-500 hover:scale-150 'size={25} />
          <IoLogoInstagram className='duration-150 ease-in rounded-full shadow-lg cursor-pointer icon shadow-gray-500 hover:scale-150 ' size={25} />
          <BsWhatsapp className='duration-150 ease-in rounded-full shadow-lg cursor-pointer icon shadow-gray-500 hover:scale-150 ' size={25} />
          <AiFillYoutube className='duration-150 ease-in rounded-full shadow-lg cursor-pointer icon shadow-gray-500 hover:scale-150 ' size={25} />
        </div>
      </ul>
      </div>
      
    </div>
    
    
  )
}

export default Nav
import React from 'react'
import {RiSearchLine} from 'react-icons/ri'

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <video className="object-cover w-full h-full" autoPlay loop muted>
            <source src={require('/home/ayat/travel-app/assests/beachVid.mp4')} type="video/mp4" />
        </video>
       {/* https://github.com/jeremybarbet/next-videos    How to add video to next */}
       <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
       {/* modify the lighting  */}


       <div className='absolute top-0 left-0 flex flex-col justify-center w-full h-full p-4 text-center text-white'>
        <h1> First Class Travel </h1>
        <h2> Top 1% Locations Worldwide</h2>
        <form className='flex justify-between max-w-[700px] items-center mx-auto w-full p-2 border rounded-md mt-2 bg-gray-100/90 text-black'>
            <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' type='text' placeholder='Search Destination'></input>
            </div>
            <div>
                <button>
                    <RiSearchLine className='icons' size={20} />
                </button>
            </div>
        </form>
       </div>
    </div>
  )
}


export default Hero
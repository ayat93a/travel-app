import React from 'react'
import borabora from '/home/ayat/travel-app/assests/borabora.jpg'
import borabora2 from '/home/ayat/travel-app/assests/borabora2.jpg'
import keywest from '/home/ayat/travel-app/assests/keywest.jpg'
import maldives from '/home/ayat/travel-app/assests/maldives.jpg'
import maldives2 from '/home/ayat/travel-app/assests/maldives2.jpg'
import Image
 from 'next/image'
const Destination = () => {
  return (
    <div className='max-w-[1240px] h-screen mx-auto py-16 px-4 text-center' id='Destination'> 
    <div>
        <h1 className='my-2'>All-Inclusive Restore</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className='max-w-[1240px] h-full mx-auto my-0 py-4 px-4 text-center '> 
        <div className='grid gap-2 max- md:grid-rows-none md:grid-cols-5 md:gap-4'>
            <div className='col-span-2 -mb-2 md:col-span-3 md:row-span-2'>
                <Image className = 'object-cover w-full rounded-md' src= {borabora} alt='/'/>
            </div>
         
            <Image src= {borabora2}  className = 'object-cover w-full rounded-md' alt='/'/>
            <Image src= {maldives} className = 'object-cover w-full rounded-md' alt='/' />
            <Image src= {maldives2}  className = 'object-cover w-full rounded-md' alt='/'/>
            <Image src= {keywest}  className = 'object-cover w-full rounded-md ' alt='/'/>
         
            
                
                
          
        </div>
            
        </div>
     </div>
    

    </div>
  )
}

export default Destination
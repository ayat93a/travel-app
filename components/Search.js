import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdTravelExplore} from 'react-icons/md'



const Search = () => {
  return (

    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16 px-4 h-screen items-center'>
      
      <div className='flex flex-col lg:col-span-2 justify-evenly'>
        
        <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
        <p className='py-4 max-w-[85%]'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
          <div className='grid gap-8 py-4 sm:grid-cols-2'>
            <div className='flex flex-col items-center px-6 text-center lg:flex-row'>
              <button className='duration-150 ease-in hover:scale-110'><RiCustomerService2Fill size={40}  /></button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>
            <div className='flex flex-col items-center px-6 text-center lg:flex-row'>
              <button  className='duration-150 ease-in hover:scale-110'><MdTravelExplore size={40}  /></button>
              <div>
                <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>
            
          </div>
      </div>
      <div>
        <div className='text-center uppercase border '>
          <p className='p-2'>get an additional 10%</p>
          <p className='py-2'>12 Hours left</p>
          <p className='py-2 text-white bg-gray-800'>Book now and save</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-6'>
            <label>Destination</label>
            <select className='p-2 border rounded-md' >
              <option value='none' selected disabled hidden>Caribbean's Best Beaches</option>
              <option >Grande Antigua</option>
              <option >Key West</option>
              <option >Maldives</option>
              <option >Cozumel</option>
            </select>
          </div>
          <div className='flex flex-col my-6'>
            <label>Check-In</label>
            <input className='p-2 border rounded-md' type='date'></input>
          </div>
          <div className='flex flex-col my-6'>
            <label>Check-Out</label>
            <input className='p-2 border rounded-md' type='date'></input>
          </div>
          <button className='w-full py-2 mb-5 hover:scale-105'>Check Availability</button>
        </form>
      </div>
    </div>
   
  )
}

export default Search
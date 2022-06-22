import React from 'react'
import Destination from '../components/Destination'
import Hero from '../components/Hero'

import Nav from '../components/Nav'
import Search from '../components/Search'
import Slider from '../components/Slider'


const index = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Destination />
      <Search />
      <Slider />
    </div>
  )
}

export default index
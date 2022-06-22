import React from 'react'
import Destination from '../components/Destination'
import Hero from '../components/Hero'

import Nav from '../components/Nav'
import Search from '../components/Search'


const index = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Destination />
      <Search />
    </div>
  )
}

export default index
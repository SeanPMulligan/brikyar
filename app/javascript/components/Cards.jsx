import React from 'react'

import CardTypeList from './Cards/CardTypeList'
import Navigation from './Cards/Navigation'

const Cards = () => {
  console.log('rednering cards')
  return (
    <div>
      <h1>Card list</h1>
      <Navigation />
      <CardTypeList />
    </div>
  )
}

export default Cards

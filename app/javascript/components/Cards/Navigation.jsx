import React from 'react'

const cardTypes = [
  'character',
  'archetype',
  'skill',
  'armor',
  'weapon',
]

const Navigation = () => {
  return (
    <select>
      {cardTypes.map(type => <option>{type}</option>)}
    </select>
  )
}

export default Navigation

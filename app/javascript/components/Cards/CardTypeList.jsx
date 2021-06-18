import React from 'react'

const cardType = [
  'character',
  'archetype',
  'skill',
  'armor',
  'weapon',
]

const CardTypeList = () => {
  const items = cardType.map(type => <li>{type}</li>)
  return (
    <div>{items}</div>
  )
}

export default CardTypeList

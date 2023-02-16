import React from 'react'

const HelloWorld = ({title, name, profession}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{name}</h2>
        <h2>{profession}</h2>
    </div>
  )
}

export default HelloWorld
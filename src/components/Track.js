import React from 'react'

const Track = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.artist}, {props.album}</p>
    </div>
  )
}

export default Track
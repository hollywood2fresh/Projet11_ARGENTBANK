import React from 'react'
import './feature.scss'

export default function Feature(props) {
  return (
    <div className="feature--item">
        <img
            src={props.image}
            alt="Chat Icon"
            className="feature--icon"
        />
        <h3 className="feature--item--title">{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

import React from 'react'
import './Cursor.css'
import PropTypes from 'prop-types'

export default function Cursor({ id, x, y }) {
  return (
    <div className="cursor" style={{ left: x, top: y }}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 28 28"
        enableBackground="new 0 0 28 28"
        xmlSpace="preserve"
      >
        <polygon
          fill="#FFFFFF"
          points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
        />
        <polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 " />
        <rect
          x="12.5"
          y="13.6"
          transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
          width="2"
          height="8"
        />
        <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 " />
      </svg>
      <div className="cursor-id">{id}</div>
    </div>
  )
}

Cursor.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}

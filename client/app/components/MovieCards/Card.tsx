import React from 'react'
import './card.scss'

export default function Card() {
  return (
    <div className='card-wrapper'>
      <div className='card-head'>
        {/* Card Images */}
      </div>
      <div className='card-body'>
        <div className='card-title'>{/* Card Title */}</div>
        <div className='card-content'>
          <div className='card-description'>
            {/* Card Description */}
          </div>
          <div className='card-rating'>
            {/* Card Rating */}
          </div>
          <div className='card-buttons'>
            {/* Card Buttons */}
          </div>
        </div>
      </div>
      <div className='card-footer'>
        {/* Card Footer */}
      </div>
    </div>
  )
}
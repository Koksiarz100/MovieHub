import React from 'react'
import './card.scss'

/* 
  Card Component:
    This is the component that will be used to display the movie cards on the home page.

  TODO:
    * Add images to the card
    * Add title to the card
    * Add description to the card
    * Add rating to the card
    * Add buttons to the card
    ! Load data from the database
    ? Need more documentation
*/

export default function Card() {
  return (
    <div className='card-wrapper'>
      <div className='card-head'> {/* Card Images */}
        
      </div>
      <div className='card-body'>
        <div className='card-title'> {/* Card Title */}
        
        </div>
        <div className='card-content'>
          <div className='card-description'> {/* Card Description */}
            
          </div>
          <div className='card-rating'> {/* Card Rating */}
            
          </div>
          <div className='card-buttons'> {/* Card Buttons */}
            
          </div>
        </div>
      </div>
      <div className='card-footer'> {/* Card Footer */}
        
      </div>
    </div>
  )
}
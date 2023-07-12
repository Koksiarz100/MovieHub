import React from 'react'
import './card.scss'

import Image from 'next/image'
import add from './assets/add.png'
import play from './assets/play.png'

/* 
  Card Component:
    This is the component that will be used to display the movie cards on the home page.

  TODO:
    * Add images to the card
    * Add rating to the card
    * Add functions to the buttons
    ! Find new icons for the buttons (so it fits)
    ! Load data from the database
    ? Need more documentation
*/

export default function Card(props: any) {
  return (
    <div className='card-wrapper'>
      <div className='card-head'> {/* Card Images */}
        
      </div>
      <div className='card-body'>
        <div className='card-title'> {/* Card Title */}
          {props.title}
        </div>
        <div className='card-content'>
          <div className='card-description'> {/* Card Description */}
            {props.description}
          </div>
          <div className='card-rating'> {/* Card Rating */}
            Rating: {props.rating}
          </div>
          <div className='card-buttons'> {/* Card Buttons */}
            <button className='card-button'>
              <Image src={play} alt='Play button' className='button-play'/> {/* Play button, get from assets */}
            </button>
            <button className='card-button'>
              <Image src={add} alt='Play button' className='button-add'/> {/* Add button, get from assets */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
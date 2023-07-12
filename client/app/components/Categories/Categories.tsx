import React from 'react'
import './categories.scss'

import Card from '../MovieCards/Card'

function MakingCards(props: any) {

  const category = props.category

  return (
    <>
      { // This will loop through the array and create a card for each item in the array, still need to add images and functions to buttons.
        category.map((info: any, index: number) => {
          return (
            <Card key={index} title={info.title} description={info.description} rating={info.rating} />
          )
        })
      }
    </>
  )
}

export default function Category(props: any) {

  const movies = props.category.movies
  const title = props.category.title
  const description = props.category.description

  return (
    <div className='category-wrapper'>
        <div className='category-title'>{title}</div> {/* Category title */}
        <div className='category-description'>{description}</div> {/* Category description */}
        <div className='category-cards'>
          <MakingCards category={movies}/>
        </div>
    </div>
  )
}
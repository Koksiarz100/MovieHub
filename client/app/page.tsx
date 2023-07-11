import React from 'react'
import Card from './components/MovieCards/Card'
import './page.scss'

/* 
  Home Page:
    This is the home page of the website, there will be a list of movies you can watch.

  TODO:
    * Add a list of movies
    * Add a search bar
    * Add a filter
    * Add a sort
    ! Load data from the database
    ! Need to find a way to randomize the movies and categories
*/

export default function Home() {
  return (
    <div className='main-wrapper'>
      <div className='category-wrapper'>
        <div className='category-title'>Brand New</div> {/* Category title */}
        <div className='category-description'> {/* Category description */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </div>
        <div className='category-cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
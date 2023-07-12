import React from 'react'
import Card from './components/MovieCards/Card'
import './page.scss'
import { title } from 'process';

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

interface Info {
  title: string;
  description: string;
  rating: string;
}

const New : Array<Info> = [
  {title: 'Movie 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '5'},
  {title: 'Movie 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '5'},
  {title: 'Movie 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '5'},
  {title: 'Movie 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '5'},
  {title: 'Movie 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '5'},
  {title: 'Movie 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '5'},
]

const SciFi : Array<Info> = [
  {title: 'Movie 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '4'},
  {title: 'Movie 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '4'},
  {title: 'Movie 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '4'},
  {title: 'Movie 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '4'},
  {title: 'Movie 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '4'},
  {title: 'Movie 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: '4'},
]

function MakingCards(props: any) {

  const category = props.category

  return (
    <>
      {
        category.map((info: any, index: number) => {
          return (
            <Card key={index} title={info.title} description={info.description} rating={info.rating} />
          )
        }
      )
      }
    </>
  )
}

export default function Home() {
  return (
    <div className='main-wrapper'>
      <div className='category-wrapper'>
        <div className='category-title'>Brand New</div> {/* Category title */}
        <div className='category-description'> {/* Category description */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </div>
        <div className='category-cards'>
          <MakingCards category={New}/>
        </div>
      </div>
      <div className='category-wrapper'>
        <div className='category-title'>Sci-Fi</div> {/* Category title */}
        <div className='category-description'> {/* Category description */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </div>
        <div className='category-cards'>
          <MakingCards category={SciFi}/>
        </div>
      </div>
    </div>
  )
}
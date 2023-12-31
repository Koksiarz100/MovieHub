'use client'

import React from 'react'
import { redirect } from 'next/navigation';
import './page.scss'

import Category from './components/Categories/Categories'
import Banner from './components/Banner/Banner'

/* 
  Home Page:
    This is the home page of the website, there will be a list of movies you can watch.

  TODO:
    * Add a list of movies
    * Add a search bar
    * Add a carousel
    * Add a filter
    ! Load data from the database
*/

interface Info { // Interface for the movie info
  title: string;
  description: string;
  rating: number;
}

interface Category { // Interface for the category
  title: string;
  description: string;
  movies?: Array<Info>;
}

//! Just for now, this will be replaced with data from the database
const New : Array<Info> = [
  {title: 'Movie 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 5},
  {title: 'Movie 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 5},
  {title: 'Movie 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 5},
  {title: 'Movie 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 5},
  {title: 'Movie 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 5},
  {title: 'Movie 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 5},
]

const SciFi : Array<Info> = [
  {title: 'Movie 7', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 4},
  {title: 'Movie 8', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 4},
  {title: 'Movie 9', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 4},
  {title: 'Movie 10', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 4},
  {title: 'Movie 11', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 4},
  {title: 'Movie 12', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', rating: 4},
]

const Categories : Array<Category> = [ // Array of categories
  {title: 'Brand New', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Sci-Fi', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: SciFi},
  {title: 'Action', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Comedy', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Horror', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Romance', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Drama', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Thriller', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Fantasy', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Mystery', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Crime', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Animation', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
  {title: 'Adventure', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam', movies: New},
]

export default function Home() {
  // Redirect to login page if token is not present

  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    if (!token) {
      redirect('/login');
    }
  }

  return (
    <div className='main-wrapper'>
      <Category category={Categories[0]}/> {/* This is the new movies category, so it will always be there */}
      <Category category={Categories[1]}/>
      <Banner /> {/* Banner */}
      <Category category={Categories[2]}/>
      <Category category={Categories[3]}/>
      <Banner /> {/* Banner */}
      <Category category={Categories[4]}/>
      <Category category={Categories[5]}/>
    </div>
  )
}
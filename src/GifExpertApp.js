import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['']);

  return (
    <>
      <h2>GIF App</h2>
      <h3>Search for a GIF</h3>
      <AddCategory setCategories={ setCategories } />
      <hr />


      <ol>
        {
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}
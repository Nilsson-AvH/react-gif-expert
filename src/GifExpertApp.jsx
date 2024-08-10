import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
            // categories.push('Valorant');
            // setCategories( cat => [...cat, 'Valorant'])

            if ( categories.includes( newCategory ) ) return

            setCategories([ newCategory, ...categories  ])

    }

    // console.log(categories);

  return (
    <>
        {/* Titulo*/}
        <h1>GifExpertApp</h1>

        {/* Inputs */}
        <AddCategory 
            onNewCategory = { (event) => onAddCategory(event)}
        />

        {/* Listado de Gif */}
        { 
            categories.map( (category) => (
                    <GifGrid 
                        key ={category}
                        category={category}
                    />
                ))
        }

    </>
  )
}
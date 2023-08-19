import React, {useState} from 'react';
import './MovieLists.css';
import {moviesList} from '../movieData';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
const MovieLists = ()=>
{
    const results = moviesList.results;
    console.log("results", results);

    return(
        <div className='container'> 
           {
                results.map(result =>
                    {
                        console.log('result is: ', result);
                        return(
                                <MovieCard movieResults={ result }/>
                        )
                    })
           }
        </div>
    )
}
export default MovieLists;
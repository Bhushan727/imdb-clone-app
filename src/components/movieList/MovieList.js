import React, { useEffect, useState } from 'react'
import './MovieList.css'
import { useParams } from 'react-router-dom'
import Card from '../card/Card';

const MovieList = () => {

    const [movieList , setMovieList ] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    },[])

    useEffect(() => {
        getData();
    },[type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=83bc1ac49da602b72f4a3140351d22a2`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

  return (
    <div className='movie__list'>
        <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieList.map(movie => (
                    <Card movie={movie} />
                ))
            }
        </div>

    </div>
  )
}

export default MovieList
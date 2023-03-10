import React, { useEffect, useState } from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

const Movie = () => {

    const [currentMovieDetail, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=83bc1ac49da602b72f4a3140351d22a2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovie(data)
            })
        window.scrollTo(0,0)
    },[id])

   

  return (
    <div className='movie'>
        <div className="movie__intro">
            <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""  />
        </div>
        <div className="movie__detail">
            <div className="movie__detailLeft">
                <div className="movie__posterBox">
                    <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="" />
                </div>
            </div>
            <div className="movie__detailRight">
                <div className="movie__detailRightTop">
                    <div className="movie__name">{currentMovieDetail ? currentMovieDetail.orginal_title : ""}</div>
                    <div className="movie_tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                    <div className="movie__rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i className='fas fa-star' />
                        <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                    </div>
                    <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + "mins" : ""}</div>
                    <div className="movie__releaseDate">{currentMovieDetail ? "Release data : " + currentMovieDetail.release_date : ""}</div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                            ?
                            currentMovieDetail.genres.map(genre => (
                                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                            ))
                            :
                            ""
                        }
                    </div>
                </div>
                <div className="movie__detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                </div>
            </div>

        </div>


        
        <div className="movie__links">
            <div className="movie__heading">useful Links</div>
            {
                currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="blank" style={{textDecoration : "none"}}><p><span className="movie__homeButton movie__Button">HomePage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
            }
              {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`} target='blank' style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
        </div>




        <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="" />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>

    </div>
  )
}

export default Movie
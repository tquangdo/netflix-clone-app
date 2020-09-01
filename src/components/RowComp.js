import React, { useState, useEffect } from 'react'
import instanceAxios from '../utils/api/axios'
import { BASE_URL_IMG } from '../utils/api/requests'
import { OPTS } from '../utils/common/constant'
import './RowComp.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function RowComp({ propsTitle, propsFetchUrl, isLargeRow }) {
    const [stateMovies, setStateMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    useEffect(() => {
        async function fetchData() {
            const req = await instanceAxios.get(propsFetchUrl)
            setStateMovies(req.data.results)
            return req
        }
        fetchData()
    }, [propsFetchUrl])
    const onClickMovie = movie => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
                .then(url => { //url="https://www.youtube.com/watch?v=XtMThy8QKqU"
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch(() => alert('Phim này chưa có trailer!!!'))
        }
    }

    return (
        <div className="row" >
            <h2>{propsTitle}</h2>

            <div className="row__posters">
                {stateMovies.map((movie_item, chiso) => {
                    const { poster_path, name, backdrop_path } = movie_item
                    return backdrop_path && <img key={chiso}
                        onClick={() => onClickMovie(movie_item)}
                        src={`${BASE_URL_IMG}${isLargeRow ? poster_path : backdrop_path}`}
                        className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                        alt={name} />
                }
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={OPTS} />}
        </div>
    )
}

export default RowComp

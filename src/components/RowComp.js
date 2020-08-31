import React, { useState, useEffect } from 'react'
import instanceAxios from '../utils/api/axios'
import { BASE_URL_IMG } from '../utils/api/requests'
import './RowComp.css'

function RowComp({ propsTitle, propsFetchUrl, isLargeRow }) {
    const [stateMovies, setStateMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const req = await instanceAxios.get(propsFetchUrl)
            setStateMovies(req.data.results)
            return req
        }
        fetchData()
    }, [propsFetchUrl])
    return (
        <div className="row" >
            <h2>{propsTitle}</h2>

            <div className="row__posters">
                {stateMovies.map((movie_item, chiso) => {
                    const { poster_path, name, backdrop_path } = movie_item
                    return backdrop_path && <img key={chiso}
                        src={`${BASE_URL_IMG}${isLargeRow ? poster_path : backdrop_path}`}
                        className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                        alt={name} />
                }
                )}
            </div>
        </div>
    )
}

export default RowComp

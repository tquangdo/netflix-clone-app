import React, { useState, useEffect } from 'react'
import instanceAxios from '../utils/api/axios'
import requests, { BASE_URL_IMG } from '../utils/api/requests'
import './BannerComp.css'
import { truncateFunc } from '../utils/common/commonfunc'

function BannerComp() {
    const [stateMovie, setStateMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const req = await instanceAxios.get(requests.fetchNetflixOriginals)
            const req_result = req.data.results
            setStateMovie(req_result[
                Math.floor(Math.random() * req_result.length)
            ])
            return req
        }
        fetchData()
    }, [])
    return (
        <header className='banner'
            style={stateMovie.backdrop_path
                ? {
                    backgroundSize: 'cover',
                    backgroundImage: `url(${BASE_URL_IMG}${stateMovie?.backdrop_path})`,
                    backgroundPosition: 'center center'
                }
                : {
                    backgroundSize: 'cover',
                    backgroundImage: '',
                    backgroundPosition: 'center center'
                }
            }>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {stateMovie?.title || stateMovie?.name || stateMovie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Xem phim</button>
                    <button className='banner__button'>Danh sách của tôi</button>
                </div>
                <h1 className='banner_description'>
                    {truncateFunc(stateMovie?.overview, 150)}
                </h1>
            </div>
            <div className='banner__fadeBottom' />
        </header>
    )
}

export default BannerComp

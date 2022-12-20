import React, { useState, useEffect } from 'react'
import instance from '../instance'
import request from '../request'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])

    const fetchData = async () => {
        const Data = await instance.get(request.fetchNetflixOriginals)
        setMovie(Data.data.results[Math.floor(Math.random() * Data.data.results.length - 1)])
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log("dataaaaa", movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (

        <header className='Banner' style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>
            <div className='banner_content'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.orginal_name}
                </h1>
                <div className='contents'>
                    <h6 className='date'>{movie.first_air_date}</h6>
                    <h6 className='vote'>{movie.vote_average}</h6>
                </div>
                <h1 className='description'>
                    {truncate(movie.overview, 150)}
                </h1>
            </div>


        </header>
    )
}

export default Banner

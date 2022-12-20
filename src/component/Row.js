import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLarge }) {
  const [movie, setMovie] = useState([])

  const fetchData = async () => {
    const Data = await instance.get(fetchUrl)
    setMovie(Data.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log("daataa", movie)

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_poster' >
        {
          movie.map((item) => (
            <>
              <img src={`${base_url}${isLarge ? item.poster_path : item.backdrop_path}`} className='poster'/>
            </>

          ))
        }

      </div>
    </div>
  )
}

export default Row

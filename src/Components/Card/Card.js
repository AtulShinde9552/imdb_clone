import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Card/Card.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Card = ({ movie }) => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1500)
  }, [])


  return (
    <>
      {
        loading ?

          <div className='cards'>
            <SkeletonTheme color="#202020" highlightColor="#444">
              <Skeleton height={300} duration={2} />
            </SkeletonTheme>
          </div>:
          <Link to={`movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
          <div className='card_image'>
            <img src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path:""}`} alt="" />
          </div>
          <div className='card_overlay'>
            <div className='card_title'>{movie? movie.original_title:""}</div>
            <div className='card_runtime'>
            {movie?movie.release_date:""}
            <span className='card_rating'>{movie ? movie.vote_average:""} <i className='fas fa-star'/></span>
            </div>
            <div className='card__description'>{movie ? movie.overview.slice(0 , 118)+'...': ""}</div>
          </div>
          </Link>
   }
    </>
  )
}

export default Card
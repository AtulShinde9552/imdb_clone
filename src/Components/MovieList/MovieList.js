import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../MovieList/MovieList.css'
import Card from '../Card/Card'

const MovieList = () => {
  const [MovieList, setMovieList]=useState([])
  const {type} = useParams()

useEffect(() => {
  getdata()
}, [])

useEffect(() => {
  getdata()
}, [type])

const getdata= ()=>{
 fetch(`https://api.themoviedb.org/3/movie/${type? type:'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
 .then(res=>res.json())
 .then(data => setMovieList(data.results))
}


  return (
    <div className='movie_list'>
      <h1 className='list_title'>{(type? type:'POPULAR').toLowerCase()}</h1>
      <div className='list_card'>
      {
      MovieList.map((movie)=>{
      <Card movie={movie} />
      })
      }
      </div>
    </div>
  )
}

export default MovieList
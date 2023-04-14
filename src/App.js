import React from 'react'
import Header from './Components/header/Header'
import Home from "./Pages/home/Home"
import MovieList from './Components/MovieList/MovieList'
import Movie from './Pages/movieDetail/movieDetail'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='movie/:id' element={<Movie/>}/>
      <Route path='movies/:type' element={<MovieList/>} />
      <Route path='/*' element={<h1>Error Page</h1>} />
    </Routes>
    </Router>
    </>
  )
}

export default App
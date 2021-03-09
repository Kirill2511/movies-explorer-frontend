import React from 'react'
import PropTypes from 'prop-types'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesList from '../MoviesList/MoviesList'
import Preloader from '../Preloader/Preloader'

function Movies({ movies, isSaved, handleMovieBtnClick }) {
  const [isShortFilm, setIsShortFilm] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])
  function handleCheckBox() {
    setIsShortFilm(!isShortFilm)
  }
  return (
    <main className="movies">
      <SearchForm isShortFilm={isShortFilm} handleCheckBox={handleCheckBox} />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesList
            moviesList={movies}
            isSaved={isSaved}
            handleMovieBtnClick={handleMovieBtnClick}
          />
          <button className="movies__show-more">Еще</button>
        </>
      )}
    </main>
  )
}

Movies.propTypes = {
  movies: PropTypes.array,
  isSaved: PropTypes.bool,
  handleMovieBtnClick: PropTypes.func,
}

export default Movies

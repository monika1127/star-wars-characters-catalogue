import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const CharacterMovies = (props) => {

    const {moviesUrl} = props
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        moviesUrl.map(movieUrl => fetch(movieUrl)
        .then(res => res.json())
        .then(res => setMoviesList(movie=>[...movie, res]))
        )
        }, [moviesUrl])

    return (
        <div>
            <div className='movies__header'>Movies</div>
            {moviesList.map((movie, index)=>
            <div key={index} className="movie__container">
                <div>{movie.title}
                <span className='movie__additionall-info'> - Episode {movie.episode_id}</span>
                </div>
                <div className='movie__year'>({movie.release_date.slice(0,4)})</div>
            </div>)
            }
        </div>
    )
}

CharacterMovies.propTypes = {
    moviesUrl: PropTypes.array.isRequired,
}

export default CharacterMovies


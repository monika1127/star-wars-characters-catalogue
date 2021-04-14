import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import CharacterDetail from './CharacterDetail'
import CharacterMovies from './CharacterMovies'

const CharacterItem = (props) => {
    const { name, gender, birth_year, height, films, mass} = props.character
    const {setDetailsPanel, showDetails}= props

    return (
        <Fragment>
        <div className="character__container" onClick={setDetailsPanel}>
            <div className="character__header">{name}</div>
            <CharacterDetail title="Gender:" value={gender}/>
            <CharacterDetail title="Birth year:" value={birth_year}/>
        {showDetails && <Fragment>
            <CharacterDetail title="Height:" value={height}/>
            <CharacterDetail title="Mass:" value={mass}/>
        </Fragment>}
        {showDetails && <CharacterMovies moviesUrl={films}/> }
        </div>
        </Fragment>
    )
}

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired
}

export default CharacterItem

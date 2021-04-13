import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import CharacterDetails from './CharacterDetails'

const CharacterItem = (props) => {
    const { name, gender, birth_year} = props.character
    const {setDetailsPanel, showDetails}= props

    return (
        <Fragment>
        <div className="character__container" onClick={setDetailsPanel}>
            <div className="character__header">{name}</div>
            <div className="character__info">
                <div className="character__info-title">Gender:</div>
                <div className="character__info-value">{gender}</div>
            </div>
            <div className="character__info">
                <div className="character__info-title">Birth year:</div>
                <div className="character__info-value">{birth_year}</div>
            </div>
        {showDetails && <CharacterDetails /> }
        </div>
        </Fragment>
    )
}

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired
}

export default CharacterItem

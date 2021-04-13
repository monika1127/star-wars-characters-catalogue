import React from 'react'
import PropTypes from 'prop-types'

const CharacterItem = (props) => {
    const { name, gender, birth_year } = props.character
    return (
        <div className="character__container">
            <div className="character__header">{name}</div>
            <div className="character__info">
                <div className="character__info-title">Gender:</div>
                <div className="character__info-value">{gender}</div>
            </div>
            <div className="character__info">
                <div className="character__info-title">Birth year:</div>
                <div className="character__info-value">{birth_year}</div>
            </div>

        </div>
    )
}

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired
}

export default CharacterItem

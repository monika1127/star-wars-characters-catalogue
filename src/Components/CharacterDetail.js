import React from 'react'
import PropTypes from 'prop-types'

const CharacterDetail = (props) => {

   const {title, value } = props

    return (
        <div>
            <div className="character__info">
                <div className="character__info-title">{title}</div>
                <div className="character__info-value">{value}</div>
            </div>
        </div>
    )
}
 CharacterDetail.propTypes = {
     title: PropTypes.string.isRequired,
     value: PropTypes.string.isRequired,
 }

export default CharacterDetail

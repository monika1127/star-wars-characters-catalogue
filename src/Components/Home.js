import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacters} from '../Redux/characters/actions'
import {charactersSelector} from '../Redux/characters/selectors'

const Home = () => {
    const dispatch = useDispatch()
    const characters = useSelector(charactersSelector())
    useEffect(() => {
       dispatch(getCharacters())
    }, [dispatch])

    return (
        <div>
            {characters.map(character => <div key={character.created}>{character.name}</div>)}
        </div>
    )
}

export default Home

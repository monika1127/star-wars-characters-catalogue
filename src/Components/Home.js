import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacters} from '../Redux/characters/actions'
import {charactersSelector, loadingSelector} from '../Redux/characters/selectors'

const Home = () => {
    const dispatch = useDispatch()
    const characters = useSelector(charactersSelector)
    const isLoading = useSelector(loadingSelector)

    useEffect(() => {
       dispatch(getCharacters())
    }, [dispatch])
    console.log(characters)
    return (
        <div>
            {!isLoading && characters.map((character, index) => <div key={index}>{character.name}</div>)}
        </div>
    )
}

export default Home

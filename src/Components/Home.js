import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacters, getMoreCharacters} from '../Redux/characters/actions'
import {charactersSelector, loadingSelector, moreCharactersURLSelector} from '../Redux/characters/selectors'
import CharacterItem from './CharacterItem'
import Button from './Button'

const Home = () => {

    const [filter, setFilter] = useState(false)

    const dispatch = useDispatch()

    const characters = useSelector(charactersSelector)
    const isLoading = useSelector(loadingSelector)
    const moreCharactersURL = useSelector(moreCharactersURLSelector)

    useEffect(() => {
       dispatch(getCharacters())
    }, [dispatch])

    const displayMoreCharacters = ()=> filter ? setFilter(false) : dispatch(getMoreCharacters(moreCharactersURL, ()=> setFilter(true)))

    return (
        <div className='characters-list__container'>
            <div >
            {!isLoading && characters.map((character, index) => ((filter && index < characters.length -5) || !filter) && <CharacterItem key={index} character={character}/> )}
            </div>
            <Button size='full' variant='primary' type='button' onClick={displayMoreCharacters}>
                Add more characters (+5)
            </Button>
        </div>
    )
}

export default Home

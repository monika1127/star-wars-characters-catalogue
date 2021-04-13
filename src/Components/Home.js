import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacters} from '../Redux/characters/actions'
import {charactersSelector, loadingSelector} from '../Redux/characters/selectors'
import CharacterItem from './CharacterItem'
import Button from './Button'

const Home = () => {
    const dispatch = useDispatch()
    const characters = useSelector(charactersSelector)
    const isLoading = useSelector(loadingSelector)

    useEffect(() => {
       dispatch(getCharacters())
    }, [dispatch])

    const getMoreCharacters = ()=> console.log('add more')

    return (
        <div>
            <div className='characters-list__container'>
            {!isLoading && characters.map((character, index) => <CharacterItem key={index} character={character}/>)}
            </div>
            <Button size='full' variant='primary' type='button' onClick={getMoreCharacters}>
                ADD MORE CHARACTERS
            </Button>
        </div>
    )
}

export default Home

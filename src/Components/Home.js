import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacters, getMoreCharacters} from '../Redux/characters/actions'
import {loadingSelector, moreCharactersURLSelector} from '../Redux/characters/selectors'
import Button from './Button'
import CharactersList from './CharactersList'

const Home = () => {

    const [filter, setFilter] = useState(false)
    const dispatch = useDispatch()

    const isLoading = useSelector(loadingSelector)
    const moreCharactersURL = useSelector(moreCharactersURLSelector)

    useEffect(() => {
       dispatch(getCharacters())
    }, [dispatch])

    const displayMoreCharacters = ()=> filter ? setFilter(false) : dispatch(getMoreCharacters(moreCharactersURL, ()=> setFilter(true)))

    return (
        <div className='page__container'>
            <div >
            {!isLoading && <CharactersList filter={filter}/>}
            </div>
            <Button size='full' variant='primary' type='button' onClick={displayMoreCharacters}>
                Add more characters (+5)
            </Button>
        </div>
    )
}

export default Home

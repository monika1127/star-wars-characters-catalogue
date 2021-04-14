import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {charactersSelector, loadingSelector} from '../Redux/characters/selectors'
import {searchByName, searchByMovie} from '../Redux/characters/actions'
import Button from './Button'

const Search = () => {

    const [searchType, setSearchType] = useState('byName')
    const [searchValue, setSearchValue]= useState('')
    const [charctersList, setCharactersList] = useState(false)
    const dispatch = useDispatch()

    const characters = useSelector(charactersSelector)

    const searchForCharacters = ()=>{
        searchType==="byName" && dispatch(searchByName(searchValue, searchCallback))
        searchType==="byMovie" && searchByMovie(searchValue)
    }

    const searchCallback = ()=> {
        setCharactersList(true)
        setSearchValue("")
    }

    return (
        <div className='page__container'>
            <div className="search__title">Search for characters</div>
            <div className="search__container">
                <div
                    className={`search__option ${searchType==='byName' ? "--active" : "--inactive"}`}
                    onClick={()=>setSearchType("byName")} >by name
                </div>
                <div
                    className={`search__option ${searchType==='byMovie' ? "--active" : "--inactive"}`}
                    onClick={()=>setSearchType("byMovie")} >by movie
                </div>
                <input
                    className='search__input'
                    type="text"
                    id="character"
                    placeholder="search for character..."
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}>
                </input>
            </div>

            <Button
                size='full'
                variant='primary'
                onClick={searchForCharacters}>
                Search
            </Button>
        {charctersList && characters.length===0 && <div className='search__alert'>No matches found<div>Search for another character.</div></div>}
        {charctersList && characters.length>0 && <div>chracters</div>}

        </div>
    )
}

export default Search

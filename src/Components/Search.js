import React, {useState} from 'react'
import Button from './Button'
const Search = () => {

    const [searchType, setSearchType] = useState('byName')
    const [searchValue, setSearchValue]= useState('')

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
                onClick={() => console.log('serach for character')}>
                Search
            </Button>

        </div>
    )
}

export default Search

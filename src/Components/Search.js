import React, {useState} from 'react'
import Button from './Button'
const Search = () => {

    const [searchType, setSearchType] = useState('byName')
    const [searchValue, setSearchValue]= useState('')

    return (
        <div>
            <div>Search for characters</div>
            <input
                type="text"
                id="character"
                placeholder="search for character..."
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}>
            </input>

            <div>
                <input
                    type="radio"
                    id="byName"
                    checked={searchType==="byName"}
                    onChange={()=>setSearchType("byName")} >
                </input>
                <label>by name</label>

                <input
                    type="radio"
                    id="byMovie"
                    checked={searchType==="byMovie"}
                    onChange={()=>setSearchType("byMovie")}>
                </input>
                <label>by movie</label>
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

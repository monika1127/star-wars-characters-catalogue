import {
    GET_CHARACTERS,
    SET_LOADING,
    SET_ERROR,
} from './types'

export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}

export const getCharacters =()=> async (dispatch)=>{
    setLoading();
    fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_CHARACTERS,
                payload: data.results
            })
        })
        .catch((error) => {
            dispatch({
                type: SET_ERROR
            })
        })
}

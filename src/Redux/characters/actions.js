import {
    GET_CHARACTERS,
    SET_LOADING,
    SET_ERROR,
    GET_MORE_CHARACTERS
} from './types'

export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}

export const getCharacters =()=> async (dispatch)=>{
    setLoading();
    fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_CHARACTERS,
                payload: res
            })
        })
        .catch((error) => {
            dispatch({
                type: SET_ERROR
            })
        })
}

export const getMoreCharacters =(url, callback)=> async (dispatch)=>{
    fetch(url)
        .then(res => res.json())
        .then(res => {
            callback()
            dispatch({
                type: GET_MORE_CHARACTERS,
                payload: res
            })
        })
        .catch((error) => {
            dispatch({
                type: SET_ERROR
            })
        })
}
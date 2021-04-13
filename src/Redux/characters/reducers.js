import {
    GET_CHARACTERS,
    SET_LOADING,
    SET_ERROR,
} from './types'

const initialState = {
    charcters: [],
    isLoading: true
}

const reducer = (state=initialState, action)=> {
    switch (action.type){
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_CHARACTERS:
            return {
                ...state,
                isLoading: false,
                charcters: action.payload
            }
        case SET_ERROR:
            return {
                isLoading: false
            }
        default:
            return state

    }
}

export default reducer

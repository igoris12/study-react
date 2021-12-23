import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from '../actionsType';

export const FETCHING_DATA = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA })

    }
}

export const FETCHING_SUCCESS = (data) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_SUCCESS,
            deploy: data
        })

    }
}


export const FETCHING_ERROR = (data) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_ERROR,
            deploy: data
        })

    }
}
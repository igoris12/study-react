import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from '../actionsType';

const initionState = {
    loding: false,
    data: [],
    error: ''
}

const fetchReducer = (state = initionState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                loding: true,
                data: [],
                error: ''
            }

        case FETCH_SUCCESS:
            return {
                loding: false,
                data: [...action.deploy],
                error: ''
            }

        case FETCH_ERROR:
            return {
                loding: false,
                data: [],
                error: action.deploy
            }

        default:
            return state;
    }
}

export default fetchReducer;
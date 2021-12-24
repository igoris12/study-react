import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from '../actionsType';

const initionState = {
    loding: false,
    users: [],
    error: ''
}

const fetchReducer = (state = initionState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                loding: true,
                users: [],
                error: ''
            }

        case FETCH_SUCCESS:
            return {
                loding: false,
                users: [...action.deploy],
                error: ''
            }

        case FETCH_ERROR:
            return {
                loding: false,
                users: [],
                error: action.deploy
            }

        default:
            return state;
    }
}

export default fetchReducer;
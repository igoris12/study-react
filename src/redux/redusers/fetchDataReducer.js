import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from '../actionsType';

const initionState = {
    loading: false,
    users: [],
    error: ''
}

const fetchReducer = (state = initionState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                loading: true,
                users: [],
                error: ''
            }

        case FETCH_SUCCESS:
            return {

                loading: false,
                users: [...action.deploy],
                error: ''
            }

        case FETCH_ERROR:
            return {

                loading: false,
                users: [],
                error: action.deploy
            }

        default:
            return state;
    }
}

export default fetchReducer;
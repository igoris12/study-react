import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from '../actionsType';

const fetch_data = () => {

    return { type: FETCH_DATA }

}


const fetching_success = (users) => {
    return {
        type: FETCH_SUCCESS,
        deploy: [...users]
    }

}



const fetching_error = (error) => {
    return {
        type: FETCH_ERROR,
        deploy: error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetch_data);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();

            }).then(
                data => {

                    dispatch(fetching_success(data));
                }
            ).catch(error => {
                const errorMas = error.message;
                dispatch(fetching_error(errorMas));
            })
    }
}

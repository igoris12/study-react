export const addOne = () => {
    return (dispatch) => {
        dispatch({ type: "ADD" })
    }
}

export const subOne = () => {
    return (dispatch) => {
        dispatch({ type: "SUB" })
    }
}

export const ASYNC = () => {
    return (dispatch) => {
        setTimeout(() => {

            dispatch({ type: "ASYNC" })
        }, 1000);
    }
}
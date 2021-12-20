export const addOne2 = () => {
    return (dispatch) => {
        dispatch({ type: 'ADD2' })
    }
}

export const subOne2 = () => {
    return (dispatch) => {
        dispatch({ type: 'SUB2' })
    }
}

export const async2 = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'ASYNC2' })
        }, 1000);
    }
}
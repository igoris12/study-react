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
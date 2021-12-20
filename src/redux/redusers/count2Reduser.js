const count2Reducer = (state = 5, action) => {
    switch (action.type) {
        case "ADD2":
            return state + 1;
        case "SUB2":
            return state - 1;
        case "ASYNC2":
            return state + 5;
        default:
            return state;
    }
}

export default count2Reducer
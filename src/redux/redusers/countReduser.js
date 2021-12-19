const countReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case 'SUB':
            return state - 1;
        case 'ASYNC':

            return state + 10;

        default:
            return state;
    }
}

export default countReducer
const initialState = {
    category: 0,
    sortBy: 'popular'
};

const filters = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: payload
            };
        case 'SET_CATEGORY':
            return {
                ...state,
                category: payload
            };
        default:
            return state;
    }
};

export default filters;
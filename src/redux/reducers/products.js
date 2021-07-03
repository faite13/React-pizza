const initialState = {
    items: [],
    isLoaded: false
    //Свойство isLoaded в положении false означает, что данные
    //с сервера ещё не загрузились. После загрузки оно переключится на true.
};

const products = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: payload
            };
        default:
            return state;
    }
};

export default products;
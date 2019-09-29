const initialState = [];

export default (state = initialState, action) => {
    if (action.type === 'ExchangeRates') {
        return action.payload;
    }
    return state;
};

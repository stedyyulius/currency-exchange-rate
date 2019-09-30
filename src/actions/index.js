import axios from 'axios';

export const getRates = (base = 'USD') => {
    return (dispatch) => {
        axios.get(`https://api.ratesapi.io/api/latest?base=${base}`)
            .then((rates) => {
                console.log(rates.data)
                dispatch({
                    type: 'ExchangeRates',
                    payload: rates.data
                })
            })
    };
}
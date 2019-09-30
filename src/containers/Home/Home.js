import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import styles from './Home.module.css'

import ExchangeRatesBox from '../../components/ExchangeRatesBox/ExchangeRatesBox';

import objectToArray from '../../helpers/objectToArray';

import { getRates } from '../../actions'

const Home = props => {
    const [isAddCurrency, setIsAddCurrency] = useState(false);
    const [defaultRateValue] = useState(10000);
    const [defaultBase] = useState('USD');
    const [displayedRates, setDisplayedRates] = useState(['IDR', 'EUR', 'GBP', 'SGD']);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [, updateState] = useState();

    const forceUpdate = useCallback(() => updateState({}), []);
    const { getLatestRates } = props;

    useEffect(() => {
        getLatestRates(defaultBase);
    }, [defaultBase, getLatestRates])

    const rates = () => {
        if (Object.keys(props.exchangeRates).length > 0) {

            const rateList = [];
            let rateNames = Object.keys(props.exchangeRates.rates);

            for (const rate of rateNames) {
                if (displayedRates.includes(rate)) {
                    rateList.push({
                        name: rate,
                        value: props.exchangeRates.rates[rate]
                    });
                }
            }
            return rateList.map((rate, index) =>
                <ExchangeRatesBox
                    key={index}
                    rate={rate}
                    rateValue={defaultRateValue}
                    base={defaultBase}
                    removeCurrency={removeCurrency}
                />)
        }
        return null;
    }

    const addCurrencyButton = () => {
        if (isAddCurrency) {
            const fullRates = objectToArray(props.exchangeRates.rates);
            const fileteredRates = fullRates.filter((fr) => !displayedRates.includes(fr.name));

            if (!selectedCurrency) {
                setSelectedCurrency(fileteredRates[0].name);
            }

            return (
                <div className={styles.addCurrencyButton} onClick={() => setIsAddCurrency(true)}>
                    <select onChange={(e) => setSelectedCurrency(e.target.value)}>
                        {fileteredRates.map((rate, index) => <option key={index}>{rate.name}</option>)}
                    </select>
                    <button onClick={() => addCurrency()}>Submit</button>
                </div>
            )
        }

        return (
            <div className={styles.addCurrencyButton} onClick={() => setIsAddCurrency(true)}>
                <p>(+)</p>
                <p>Add More Currencies</p>
            </div >
        )
    }

    const addCurrency = () => {
        let newDisplayedRates = displayedRates;
        newDisplayedRates.push(selectedCurrency);
        setDisplayedRates(newDisplayedRates);
        forceUpdate()
    }

    const removeCurrency = (currency) => {
        let newDisplayedRates = displayedRates;
        newDisplayedRates = newDisplayedRates.filter((rate) => rate !== currency)
        setDisplayedRates(newDisplayedRates);
        forceUpdate()
    }

    return (
        <div className={styles.container}>
            <div className={styles.rateBox}>
                <div className={styles.rateBoxTitle}>
                    <i>USD - United States Dollars</i>
                    <br />
                    <div className={styles.rateTitle}>
                        <b>USD</b>
                        <b>10.0000</b>
                    </div>
                </div>
                <div className={styles.rateBoxBody}>
                    {rates()}
                </div>
                <div className={styles.addCurrencyContainer}>
                    {addCurrencyButton()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        exchangeRates: state.exchangeRates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLatestRates: (base) => dispatch(getRates(base))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
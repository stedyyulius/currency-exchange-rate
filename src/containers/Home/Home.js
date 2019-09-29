import React, { useState } from 'react';
import { connect } from 'react-redux';

import styles from './Home.module.css'

import ExchangeRatesBox from '../../components/ExchangeRatesBox/ExchangeRatesBox';

const Home = props => {
    const [isAddCurrency, setIsAddCurrency] = useState(false);

    const addCurrency = () => {
        setIsAddCurrency(true);
    }

    const addCurrencyButton = () => {
        if (isAddCurrency) {
            return (
                <div className={styles.addCurrencyButton} onClick={() => addCurrency()}>
                    <input type="text" />
                    <button>Submit</button>
                </div>
            )
        }

        return (
            <div className={styles.addCurrencyButton} onClick={() => addCurrency()}>
                <p>(+)</p>
                <p>Add More Currencies</p>
            </div>
        )
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
                    <ExchangeRatesBox />
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

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
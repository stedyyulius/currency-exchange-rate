import React from 'react';
import { connect } from 'react-redux';

import styles from './ExchangeRatesBox.module.css'

const ExchangeRatesBox = props => {
    return (
        <div className={styles.container}>
            <div className={styles.rateDetails}>
                <div className={styles.rate}>
                    <p>IDR</p>
                    <p>144 1,104.50</p>
                </div>
                <div className={styles.rateName}>
                    <i>IDR - Indonesian Rupiah</i>
                </div>
                <i>1 USD - IDR 14.410.45</i>
            </div>
            <div className={styles.deleteButton}>
                <p>(-)</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRatesBox);
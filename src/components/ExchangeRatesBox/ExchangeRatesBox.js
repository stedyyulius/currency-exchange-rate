import React from 'react';
import { connect } from 'react-redux';

import styles from './ExchangeRatesBox.module.css'

const ExchangeRatesBox = props => {
    return (
        <div className={styles.container}>
            <div className={styles.rateDetails}>
                <div className={styles.rate}>
                    <p>{props.rate.name}</p>
                    <p>{props.rate.value * props.rateValue}</p>
                </div>
                <div className={styles.rateName}>
                    <i>{props.rate.name}</i>
                </div>
                <i>1 {props.base} - {props.rate.name} {props.rate.value}</i>
            </div>
            <div className={styles.deleteButton}>
                <p onClick={() => props.removeCurrency(props.rate.name)}>(-)</p>
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
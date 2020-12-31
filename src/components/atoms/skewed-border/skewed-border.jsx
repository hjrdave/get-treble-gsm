import React from 'react';
import styles from './skewedBorder.module.scss';

export default function SkewedBorder({ gradient, white, dark, left, style }) {

    return (
        <>
            <div style={style} className={`${styles.skewedBorder} ${(left) ? styles.skewLeft : styles.skewRight} ${(dark) ? styles.dark : styles.white}`}></div>
        </>
    )
}
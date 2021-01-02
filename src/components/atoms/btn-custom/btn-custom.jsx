import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './btnCustom.module.scss';

export default function ButtonCustom({ children, gradient, dark, outline }) {

    return (
        <>
            <Button variant={(outline) ? 'outline-primary' : ''} className={`${styles.btnCustom} ${(gradient) ? `${styles.gradient} bk-gradient` : (dark) ? styles.btnDark : ''} px-4 py-2`}>
                {children}
            </Button>
        </>
    )
}
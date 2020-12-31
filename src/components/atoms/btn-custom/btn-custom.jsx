import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './btnCustom.module.scss';

export default function ButtonCustom({ children, gradient }) {

    return (
        <>
            <Button className={`${styles.btnCustom} ${(gradient) ? 'bk-gradient' : ''} px-4 py-2`}>
                {children}
            </Button>
        </>
    )
}
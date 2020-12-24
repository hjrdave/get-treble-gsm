import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function CustomToggle({ section }) {

    const [menuState, setMenuState] = React.useState(false);

    return (
        <Accordion.Toggle as={Button} variant="link" onClick={() => setMenuState((menuState) ? false : true)} eventKey="0" className={`${styles.btnLink} p-0 w-100`}>
            <p className='mb-3 d-flex justify-content-between align-items-center w-100'>
                <strong>{section}</strong> <i className={`mb-0 fas fa-caret-${(menuState) ? 'down' : 'right'} pl-3`}></i>
            </p>
        </Accordion.Toggle>
    );
}
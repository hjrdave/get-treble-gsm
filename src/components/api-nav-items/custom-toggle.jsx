import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function CustomToggle({ section }) {

    const [menuState, setMenuState] = React.useState(false);

    return (
        <Accordion.Toggle as={Button} variant="link" onClick={() => setMenuState((menuState) ? false : true)} eventKey="0" className={`${styles.btnLink} p-0`}>
            <p className='text-left mb-3'>
                <strong>{section} <i className={`fas fa-caret-${(menuState) ? 'down' : 'right'} pl-3`}></i></strong>
            </p>
        </Accordion.Toggle>
    );
}
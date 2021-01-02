import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import styles from './sectionToggle.module.scss';

export default function SectionToggle({ children, onClick }) {

    return (
        <Accordion.Toggle as={Button} variant="link" onClick={onClick} eventKey="0" className={`${styles.btnLink} p-0 w-100`}>
            {children}
        </Accordion.Toggle>
    );
}
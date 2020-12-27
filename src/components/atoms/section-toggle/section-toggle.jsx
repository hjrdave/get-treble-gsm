import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

export default function SectionToggle({ children, onClick }) {

    return (
        <Accordion.Toggle as={Button} variant="link" onClick={onClick} eventKey="0" className={` p-0 w-100`}>
            {children}
        </Accordion.Toggle>
    );
}
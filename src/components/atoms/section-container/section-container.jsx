import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function SectionContainer({ children, className }) {

    return (
        <>
            <Accordion className={className}>
                {children}
            </Accordion>
        </>
    )
}
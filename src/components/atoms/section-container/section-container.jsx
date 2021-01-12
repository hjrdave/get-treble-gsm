import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useTreble } from 'treble-gsm';

export default function SectionContainer({ children, className, section }) {

    const [{ activeAPINavSections }, Store] = useTreble();

    return (
        <>
            <Accordion className={className} activeKey={(activeAPINavSections.includes(section)) ? '0' : '1'}>
                {children}
            </Accordion>
        </>
    )
}
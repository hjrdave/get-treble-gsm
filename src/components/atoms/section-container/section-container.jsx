import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function SectionContainer({ children, className, section, open }) {

    React.useEffect(() => {
        console.log(open)
    }, []);

    return (
        <>
            <Accordion className={className} defaultActiveKey={open}>
                {children}
            </Accordion>
        </>
    )
}
import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function SectionCollapse({ children }) {

    return (
        <>
            <Accordion.Collapse eventKey="0">

                <>
                    <div className={`pb-3`}>
                        {children}
                    </div>
                </>

            </Accordion.Collapse>
        </>
    )
}
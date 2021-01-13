import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useTreble } from 'treble-gsm';
import { useNonInitialEffect } from '../../../hooks';

export default function SectionContainer({ children, className, section }) {

    const sectionRef = React.useRef(null);

    const [{ activeAPINavSections }, Store] = useTreble();

    React.useEffect(() => {
        if (sectionRef) {
            const sectionItems = sectionRef?.current?.childNodes[1]?.childNodes[0]?.childNodes;
            sectionItems.forEach((item) => {
                if (item[`childNodes`][0]['ariaCurrent'] === 'page') {
                    //Store.update('setActiveAPINavSections', [section])
                }
            });
        }
    }, []);

    return (
        <>
            <Accordion ref={sectionRef} className={className} activeKey={(activeAPINavSections.includes(section)) ? '0' : '1'} >
                {children}
            </Accordion>
        </>
    )
}
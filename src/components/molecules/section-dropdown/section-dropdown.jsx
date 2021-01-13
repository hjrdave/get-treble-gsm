import React from 'react';
import SectionToggle from '../../atoms/section-toggle';
import SectionTitle from '../../atoms/section-title';
import { useTreble } from 'treble-gsm';

export default function SectionDropdown({ section }) {

    const [{ activeAPINavSections: activeSections }, Store] = useTreble();

    const handleSectionToggle = () => {
        if (activeSections.includes(section)) {
            const removeActiveSections = activeSections.filter((item) => item !== section);
            Store.update('setActiveAPINavSections', removeActiveSections);
        } else {
            Store.update('setActiveAPINavSections', [...activeSections, section]);
        }
    }

    return (
        <>
            <SectionToggle onClick={() => handleSectionToggle()}>
                <SectionTitle section={section} />
            </SectionToggle>
        </>
    )
}
import React from 'react';
import SectionToggle from '../../atoms/section-toggle';
import SectionTitle from '../../atoms/section-title';

export default function SectionDropdown({ section }) {

    const [toggleState, setToggleState] = React.useState(false);
    return (
        <>
            <SectionToggle onClick={() => setToggleState((toggleState) ? false : true)}>
                <SectionTitle section={section} sectionState={toggleState} />
            </SectionToggle>
        </>
    )
}
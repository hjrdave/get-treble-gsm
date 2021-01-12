import React from 'react';
import SectionToggle from '../../atoms/section-toggle';
import SectionTitle from '../../atoms/section-title';
import { useTreble } from 'treble-gsm';
import { useNonInitialEffect } from '../../../hooks';
import { Store } from '../../organisms/api-search/Store';

export default function SectionDropdown({ section, menuItems }) {

    const [{ apiNavItemState }, Store] = useTreble();

    const [toggleState, setToggleState] = React.useState((apiNavItemState.activeSection === section) ? true : false);

    useNonInitialEffect(() => {
        Store.update('updateAPINavItemState', {
            activeSection: section,
            activeItem: menuItems[0]
        });
    }, [toggleState]);

    return (
        <>
            <SectionToggle>
                <SectionTitle section={section} onClick={() => {
                    setToggleState((toggleState) ? setToggleState(false) : setToggleState(true));
                    Store.update('updateAPINavItemState', {
                        activeSection: section,
                        activeItem: menuItems[0]
                    });
                }} />
            </SectionToggle>
        </>
    )
}
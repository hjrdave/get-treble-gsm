import React from 'react';
import styles from './sectionTitle.module.scss';
import { useTreble } from 'treble-gsm';

export default function SectionTitle({ section, onClick }) {
    const [{ activeAPINavSections }] = useTreble();
    const isActiveSection = (activeAPINavSections.includes(section)) ? true : false;
    return (
        <>
            <p onClick={onClick} className={`${(isActiveSection) ? styles.active : ''} mb-3 d-flex justify-content-between align-items-center w-100`}>
                <strong>{section}</strong> <i className={`mb-0 fas fa-caret-${(isActiveSection) ? 'down' : 'right'} pl-3 pr-3`}></i>
            </p>
        </>
    )
}
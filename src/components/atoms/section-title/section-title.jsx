import React from 'react';

export default function SectionTitle({ section, sectionState }) {

    return (
        <>
            <p className='mb-3 d-flex justify-content-between align-items-center w-100'>
                <strong>{section}</strong> <i className={`mb-0 fas fa-caret-${(sectionState) ? 'down' : 'right'} pl-3 pr-3`}></i>
            </p>
        </>
    )
}
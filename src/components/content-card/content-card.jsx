import React from 'react';
import Card from 'react-bootstrap/Card';
import './_content-card.scss';

export default function ContentCard({children}) {
    return (
        <>
            <div className='content-card col'>
                <Card className='info-card p-3'>
                    <Card.Body>
                        <Card.Text>
                            {children}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
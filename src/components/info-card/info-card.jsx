import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from '../../images/register';
import './_info-card.scss';

export default function InfoCard({title, bodyText, iconName}){
    return (
        <>
            <Card className='info-card p-3'>
                <Card.Body>
                    <div className='d-flex justify-content-center'>
                        <Image name={iconName} />
                    </div>
                    <Card.Title className='text-center pt-4'>{title}</Card.Title>
                    <Card.Text>
                        {bodyText}
                  </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../../../images/register';
import infoCard from './infocard.module.scss';

export default function InfoCard({ title, bodyText, iconName }) {
    return (
        <>
            <Card className={`${infoCard.card} p-3`}>
                <Card.Body className={infoCard.body}>
                    <div className='d-flex justify-content-center'>
                        <Image name={iconName} />
                    </div>
                    <Card.Title className={`${infoCard.title} text-center pt-4`}>{title}</Card.Title>
                    <Card.Text>
                        {bodyText}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
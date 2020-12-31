import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../../../images/register';
import styles from './infocard.module.scss';

export default function InfoCard({ title, bodyText, iconName }) {
    return (
        <>
            <Card className={`${styles.card} p-3`}>
                <Card.Body className={styles.body}>
                    <div className='d-flex justify-content-center'>
                        <Image name={iconName} className={styles.gatsbyImageWrapper} />
                    </div>
                    <Card.Title className={`${styles.title} text-center pt-4`}>{title}</Card.Title>
                    <Card.Text>
                        {bodyText}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
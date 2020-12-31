import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import Image from '../../../images/register';
import styles from './supportRow.module.scss';
import ButtonCustom from '../../atoms/btn-custom';

export default function SupportRow() {

    return (
        <>
            <Row className='pt-4 mt-4 mb-4 d-flex justify-content-center'>
                <Col sm='8' lg='12' className='pt-4'>
                    <div className='d-flex justify-content-center'>
                        <Image name={'logoGithub'} className={styles.homeLogoGithub} />
                    </div>
                    <h5 className='pt-3 text-center'>Want to Support this Project?</h5>
                    <div className='d-flex justify-content-center'>
                        {/* <Button className='px-4 py-2 mt-3' style={{ backgroundColor: '#20222A', borderColor: '#20222A', borderRadius: '25px', }}><a href='https://github.com/hjrdave/treble-gsm' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Contribute</a></Button> */}
                        <a href={'https://github.com/hjrdave/treble-gsm'} target={'_blank'} style={{ color: 'white', textDecoration: 'none' }}>
                            <ButtonCustom dark>Contribute</ButtonCustom>
                        </a>
                    </div>
                </Col>
            </Row>
        </>
    )
}
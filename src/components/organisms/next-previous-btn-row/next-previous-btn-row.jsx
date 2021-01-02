import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from '@reach/router';
import ButtonCustom from '../../atoms/btn-custom';

export default function NextPrevBtnRow() {

    const location = useLocation();

    React.useEffect(() => {

    }, []);

    return (
        <>
            <Row className='pt-4'>
                <Col className='d-flex justify-content-between'>
                    <ButtonCustom outline>
                        Previous
                    </ButtonCustom>
                    <ButtonCustom outline>
                        Next
                    </ButtonCustom>
                </Col>
            </Row>
        </>
    )
}
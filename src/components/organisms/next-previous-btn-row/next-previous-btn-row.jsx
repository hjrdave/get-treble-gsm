import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from '@reach/router';
import ButtonCustom from '../../atoms/btn-custom';
import { useTreble } from 'treble-gsm';

export default function NextPrevBtnRow() {

    const [{ apiNavPostData }] = useTreble();

    const location = useLocation();

    // React.useEffect(() => {
    //     console.log(apiNavPostData);
    // }, [apiNavPostData]);

    return (
        <>
            <Row className='pt-4'>
                <Col className='d-flex justify-content-between'>
                    <ButtonCustom outline>
                        <p className='mb-0'>
                            {/* <i className="fas fa-chevron-double-left pr-3 text-primary"></i> */}
                            {apiNavPostData[0]?.text}
                        </p>
                    </ButtonCustom>
                    <ButtonCustom outline>
                        <p className='mb-0'>
                            {apiNavPostData[1]?.text}
                            {/* <i className="fas fa-chevron-double-right pl-3 text-primary"></i> */}
                        </p>
                    </ButtonCustom>
                </Col>
            </Row>
        </>
    )
}
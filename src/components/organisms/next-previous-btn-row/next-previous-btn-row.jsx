import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation, Link } from '@reach/router';
import ButtonCustom from '../../atoms/btn-custom';
import { useTreble } from 'treble-gsm';

export default function NextPrevBtnRow({ path, text }) {

    const [{ navItemList }] = useTreble();

    const location = useLocation();

    const apiDocPages = navItemList.map((section) => section.menuItems).map((menuItem) => menuItem).reduce((a, b) => a.concat(b), []);
    const currentPageIndex = apiDocPages.findIndex((item) => { if (item.path === location.pathname) { return true } });


    return (
        <>
            <Row className='pt-4'>
                <Col className='d-flex justify-content-between'>
                    {
                        (currentPageIndex !== 0) ?
                            <ButtonCustom outline>
                                <p className='mb-0'>
                                    <a href={apiDocPages[currentPageIndex - 1]?.path || ''}>&lt;&lt;&nbsp; {apiDocPages[currentPageIndex - 1]?.text}</a>
                                </p>
                            </ButtonCustom> : <div></div>
                    }
                    {
                        (currentPageIndex !== (apiDocPages.length - 1)) ?
                            <ButtonCustom outline>
                                <p className='mb-0'>
                                    <a href={apiDocPages[currentPageIndex + 1]?.path || ''}>{apiDocPages[currentPageIndex + 1]?.text} &nbsp;&gt;&gt;</a>
                                </p>
                            </ButtonCustom> : <div></div>
                    }


                </Col>
            </Row>
        </>
    )
}
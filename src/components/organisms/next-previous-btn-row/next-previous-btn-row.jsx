import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import ButtonCustom from '../../atoms/btn-custom';

export default function NextPrevBtnRow({ menuData, location }) {

    const normalizeMenuItems = (data) => {
        let items = {};
        data.forEach((section) => {
            section.menuItems.map((item) => {
                items = { ...items, [item.path]: item };
            })
        });
        return items;
    }
    const allMenuItems = normalizeMenuItems(menuData);
    const currentIndex = allMenuItems[location.pathname].id;
    const getPrevPostData = () => {
        const data = Object.values(allMenuItems).find((item) => {
            if (item.id === (currentIndex - 1)) {
                return item
            }
        });
        return data;
    }
    const getNextPostData = () => {
        const data = Object.values(allMenuItems).find((item) => {
            if (item.id === (currentIndex + 1)) {
                return item
            }
        });
        return data;
    }
    const prevPost = (currentIndex > 0) ? getPrevPostData() : false;
    const nextPost = ((Object.values(allMenuItems).length - 1) > currentIndex) ? getNextPostData() : false;

    React.useEffect(() => {
        console.log(allMenuItems.length);
    }, []);


    return (
        <>
            <Row className='pt-4'>
                <Col className='d-flex justify-content-between'>
                    {
                        (prevPost) ?
                            <ButtonCustom outline>
                                <p className='mb-0'>
                                    <Link to={prevPost.path}>&lt;&lt;&nbsp; {prevPost.text}</Link>
                                </p>
                            </ButtonCustom>
                            : <div></div>
                    }
                    {
                        (nextPost) ?
                            <ButtonCustom outline>
                                <p className='mb-0'>
                                    <Link to={nextPost.path}>{nextPost.text} &nbsp;&gt;&gt;</Link>
                                </p>
                            </ButtonCustom>
                            : <div></div>
                    }
                </Col>
            </Row>
        </>
    )
}
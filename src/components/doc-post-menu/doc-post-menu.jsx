import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ListGroup } from 'react-bootstrap';
import { Link } from "gatsby";
import uniqid from 'uniqid';
import './_doc-post-menu.scss';

export default function DocPostMenu({ subMenu, path }) {
    return (
        <>
            <div className='doc-post-menu pl-lg-4 d-none d-lg-flex'>
                <ListGroup className='py-4'>
                    <Sticky enabled={true} top={40}>
                        {
                            subMenu.map((item) => {
                                return (
                                    <Fragment key={uniqid()}>
                                        <ListGroup.Item><Link to={`${path}${item.path}`}>{item.text}</Link></ListGroup.Item>
                                    </Fragment>
                                )
                            })
                        }
                    </Sticky>
                </ListGroup>
            </div>
        </>
    )

}
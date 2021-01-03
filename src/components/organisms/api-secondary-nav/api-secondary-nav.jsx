import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ListGroup } from 'react-bootstrap';
import { Link } from "gatsby";
import uniqid from 'uniqid';
import apiSecondaryNav from './apiSecondaryNav.module.scss';

export default function APISecondaryNav({ subMenu, path }) {
    return (
        <>
            <div className={`${apiSecondaryNav.menuItems} d-none d-lg-flex`}>
                <ListGroup className={`${apiSecondaryNav.listGroup} py-4`}>
                    <Sticky enabled={true} top={40}>
                        <ListGroup.Item className={apiSecondaryNav.listGroup}>
                            <h6>Table of Contents</h6>
                        </ListGroup.Item>
                        {
                            subMenu?.map((item) => {
                                return (
                                    <Fragment key={uniqid()}>
                                        <ListGroup.Item className={apiSecondaryNav.listGroup} >
                                            <Link to={`${path}${item.path}`}>{item.text}</Link>
                                        </ListGroup.Item>
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
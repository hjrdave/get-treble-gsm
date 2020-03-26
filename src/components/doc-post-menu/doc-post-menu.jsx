import React from 'react';
import Sticky from 'react-stickynode';
import { ListGroup } from 'react-bootstrap';
import { Link } from "gatsby";
import './_doc-post-menu.scss';

export default function DocPostMenu() {
    return(
        <>
        <div className='doc-post-menu pl-lg-4'>
            <ListGroup className='py-4'>
                <Sticky enabled={true} top={40}>
                    <ListGroup.Item><Link to={'/docs/scoped-global-state#updating-multiple-stores'}>Cras justo odio</Link></ListGroup.Item>
                </Sticky>
            </ListGroup>
        </div>
    </>
    )

}
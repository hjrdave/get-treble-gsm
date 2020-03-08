import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';
import './_doc-nav.scss';
import Sticky from 'react-stickynode';

export default function DocNav() {
    return (
        <>
            <div className='doc-nav mr-4'>
                <Sticky enabled={true} top={0}>
                    <Nav className="flex-column pl-4 pt-4">
                        <Link to={'/docs/getting-started'} className='doc-nav-section font-weight-bold pt-3 mb-0'>Getting Started</Link>
                        <Link to={'/docs/setup-treble'} className='pt-1'>Setup Treble</Link>
                        <Link to={'/docs/subscribe-and-update'} className='pt-1'>Subscribe and Update</Link>

                        <Link to={'/docs/advanced'} className='doc-nav-section font-weight-bold pt-3 mb-0'>Advanced</Link>
                        <Link to={'/docs/scoped-global-state'} className='pt-1'>Scoped Global State</Link>
                        <Link to={'/docs/history'} className='pt-1'>History</Link>
                        <Link to={'/docs/state-persistence'} className='pt-1'>State Persistence</Link>

                        <Link to={'/docs/support'} className='doc-nav-section font-weight-bold pt-3 mb-0'>Support</Link>
                    </Nav>
                </Sticky>
            </div>
        </>
    )
}
import React, {useEffect, Fragment} from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';
import './_api-nav-items.scss';
import Sticky from 'react-stickynode';
import { updateStore, useTreble } from 'treble-gsm';
import uniqid from 'uniqid';

export default function APINavItems({navItems}) {

    const [{ mobileDocNavState, activeNavPath }, dispatch] = useTreble();

    //if page changes mobilenav will be closed
    useEffect(() => {
        updateStore('updateMobileDocNavState', false, dispatch);
    }, [activeNavPath]);

    return (
        <>
            <div className='api-nav-items mr-4 pb-4'>
                <Sticky enabled={true} top={0}>
                <Nav className="flex-column pl-4 pt-4">
                    {
                        navItems.map(({path, text, section}) => {
                            return(
                                <Fragment key={uniqid()}>
                                    {
                                        (section) ?
                                        (path) ? <Link to={path} className='api-nav-items-section font-weight-bold pt-3 mb-0'>{text}</Link>
                                        : <div className='api-nav-items-section font-weight-bold pt-3 mb-0'>{text}</div>
                                        : <Link to={path} className='pt-1'>{text}</Link>
                                    }
                                </Fragment>
                            )
                        })
                    }
                    </Nav>
                    
                    <div className='api-nav-items-mobile-icon-container d-flex justify-content-between d-lg-none'>
                        <div></div>
                        <div className='api-nav-items-mobile-icon px-4 d-flex align-items-center'>
                            <i className="fas fa-bars" onClick={() => updateStore('updateMobileDocNavState', true, dispatch)}></i>
                        </div>
                    </div>
                </Sticky>
                <div className={`api-nav-items-mobile-menu ${(mobileDocNavState) ? 'api-nav-items-mobile-menu-open' : ''}`}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='pt-4 pl-4'>Treble Docs</h4>
                        <i className="fas fa-times pt-4 pr-4" onClick={() => updateStore('updateMobileDocNavState', false, dispatch)}></i>
                    </div>
                    <Nav className="flex-column pl-4 pt-4">
                    {
                        navItems.map(({path, text, section}) => {
                            return(
                                <Fragment key={uniqid()}>
                                    {
                                        (section) ?
                                        (path) ? <Link to={path} className='api-nav-items-section font-weight-bold pt-3 mb-0'>{text}</Link>
                                        : <div className='api-nav-items-section font-weight-bold pt-3 mb-0'>{text}</div>
                                        : <Link to={path} className='pt-1'>{text}</Link>
                                    }
                                </Fragment>
                            )
                        })
                    }
                    </Nav>
                </div>
            </div>

        </>
    )
}
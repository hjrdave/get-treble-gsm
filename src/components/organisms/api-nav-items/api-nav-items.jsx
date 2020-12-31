import React, { useEffect, Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import SectionDropdown from '../../molecules/section-dropdown';
import SectionCollapse from '../../atoms/section-collapse';
import SectionContainer from '../../atoms/section-container';
import { Link } from 'gatsby';
import Sticky from 'react-stickynode';
import styles from './styles.module.scss';
import { useTreble } from 'treble-gsm';
import APISearch from '../api-search';
import uniqid from 'uniqid';

export default function APINavItems({ navItems }) {

    const [{ mobileDocNavState, activeNavPath }, Store] = useTreble();

    //if page changes mobilenav will be closed
    useEffect(() => {
        Store.update('updateMobileDocNavState', false);
    }, [activeNavPath]);

    return (
        <>
            <div className={`${styles.apiNavItemsContainer} mr-4 pb-4`}>
                <Sticky enabled={true} top={0} bottomBoundary={'#api-docs-skewed-row'}>
                    <Nav className="flex-column pl-4 pt-4">
                        <APISearch size={'sm'} />
                        {
                            navItems.map(({ section, menuItems }) => {
                                return (
                                    <Fragment key={uniqid()}>
                                        <SectionContainer className={styles.apiNavItems}>
                                            <SectionDropdown section={section} />
                                            <SectionCollapse>
                                                {
                                                    menuItems?.map((item) => {
                                                        return (
                                                            <>
                                                                <p className={`${styles.apiListItem} text-left mb-2`}>{item.text}</p>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </SectionCollapse>
                                        </SectionContainer>
                                    </Fragment>
                                )
                            })
                        }
                    </Nav>

                    <div className='api-nav-items-mobile-icon-container d-flex justify-content-between d-lg-none'>
                        <div></div>
                        <div className='api-nav-items-mobile-icon px-4 d-flex align-items-center'>
                            <i className="fas fa-bars" onClick={() => Store.update('updateMobileDocNavState', true)}></i>
                        </div>
                    </div>
                </Sticky>
                {/* <div className={`api-nav-items-mobile-menu ${(mobileDocNavState) ? 'api-nav-items-mobile-menu-open' : ''}`}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='pt-4 pl-4'>Treble Docs</h4>
                        <i className="fas fa-times pt-4 pr-4" onClick={() => Store.update('updateMobileDocNavState', false)}></i>
                    </div>
                    <Nav className="flex-column pl-4 pt-4">
                        {
                            navItems.map(({ path, text, section }) => {
                                return (
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
                </div> */}
            </div>

        </>
    )
}
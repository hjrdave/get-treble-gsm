import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { Nav } from 'react-bootstrap';
import SectionDropdown from '../../molecules/section-dropdown';
import SectionCollapse from '../../atoms/section-collapse';
import SectionContainer from '../../atoms/section-container';
import SectionNavItem from '../../atoms/section-nav-item';
import Sticky from 'react-stickynode';
import styles from './apiNavItems.module.scss';
import APISearch from '../api-search';

export default function APINav({ menuData }) {


    return (
        <>
            <div className={`${styles.apiNavItemsContainer} pb-4`}>
                <Sticky enabled={true} top={0} bottomBoundary={'#api-docs-skewed-row'}>
                    <Nav className="flex-column pl-4 pt-4">
                        {
                            menuData.map(({ section, menuItems, id }) => {
                                return (
                                    <React.Fragment key={id}>
                                        <SectionContainer className={styles.apiNavItems} section={section} open={'1'}>
                                            <SectionDropdown section={section} />
                                            <SectionCollapse>
                                                {
                                                    menuItems?.map((item) => {
                                                        return (
                                                            <React.Fragment key={item.id}>
                                                                <SectionNavItem path={item.path} section={section}>
                                                                    {item.text}
                                                                </SectionNavItem>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </SectionCollapse>
                                        </SectionContainer>
                                    </React.Fragment>
                                )
                            })
                        }
                    </Nav>
                </Sticky>
            </div>
        </>
    )
}
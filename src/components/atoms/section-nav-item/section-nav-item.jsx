import React from 'react';
import { Link } from 'gatsby';
import styles from './sectionNavItem.module.scss';
import { useTreble } from 'treble-gsm';

export default function SectionNavItem({ children, path, currentPage, section }) {
    const navItemRef = React.useRef(null);

    const [{ activeAPINavSections: activeSections }, Store] = useTreble();

    const getPageName = () => {
        const pageArray = path.split('/');
        return pageArray[pageArray.length - 1]
    }

    React.useEffect(() => {
        const thisPage = getPageName();
        if (currentPage === thisPage) {
            navItemRef.current.ariaCurrent = 'page';
        }
    }, []);



    return (
        <>
            <p className={`${styles.apiListItem} text-left mb-2 ml-3`}>
                <Link innerRef={navItemRef} to={path} activeClassName={styles.active}>
                    {children}
                </Link>
            </p>
        </>
    )
}
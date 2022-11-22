import React from 'react';
import styles from './footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <div className={`${styles.content} d-flex justify-content-center align-items-center`}>
          <div className={`${styles.socialMedia} d-flex`}>
            <a href='https://www.linkedin.com/in/hjrdave/' target='_blank'><i className="fab fa-linkedin px-2"></i></a>
            <a href='https://twitter.com/hjr_dave' target='_blank'><i className="fab fa-twitter-square px-2"></i></a>
            <a href='https://github.com/hjrdave' target='_blank'><i className="fab fa-github-square px-2"></i></a>
          </div>
        </div>
        <div className={`${styles.copyright} px-4 py-2 d-flex justify-content-between`}>
          <p className='mb-0 mt-0' style={{ opacity: '0' }}><small>mediafish.io</small></p>
          <p className='mb-0 mt-0'><small>© Copyright {new Date().getFullYear()}, David A. Sanders</small></p>
          <p className='mb-0 mt-0'><small><a href='https://hjrdave.github.io/portfolio/' target='_blank'>mediafish.io</a></small></p>
        </div>
      </footer>
    </>
  )
}

export default Footer;




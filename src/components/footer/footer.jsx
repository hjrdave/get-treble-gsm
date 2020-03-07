import React from 'react';
import './_footer.scss';

function Footer(props) {
  return (
    <>
      <footer>
        <div className='footer-content d-flex justify-content-center align-items-center'>
            <div className='footer-social-media d-flex'>
             <a href='https://www.linkedin.com/in/hjrdave/' target='_blank'><i class="fab fa-linkedin px-2"></i></a>
             <a href='https://twitter.com/hjr_dave' target='_blank'><i class="fab fa-twitter-square px-2"></i></a>
             <a href='https://github.com/hjrdave' target='_blank'><i class="fab fa-github-square px-2"></i></a>
            </div>
        </div>
        <div className='footer-copyright px-4 py-2 d-flex justify-content-between'>
          <p className='mb-0 mt-0' style={{opacity: '0'}}><small>mediafish.io</small></p>
          <p className='mb-0 mt-0'><small>© Copyright {new Date().getFullYear()}, David A. Sanders</small></p>
          <p className='mb-0 mt-0'><small><a href='https://mediafish.io' target='_blank'>mediafish.io</a></small></p>
        </div>
      </footer>
    </>
  )
}

export default Footer;




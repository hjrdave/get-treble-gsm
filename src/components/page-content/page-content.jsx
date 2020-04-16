import React from 'react';

function PageContent({ children, docs }) {
  return (
    <>
      <div className='container-fluid pt-4 pb-4'>
        <div className={`row d-flex ${(docs) ? 'justify-content-center justify-content-lg-start pl-0 pl-lg-4' : 'justify-content-center'}`}>
          <div className={`${(docs) ? 'col-12' : 'col-12 col-lg-8'}`}>
            <>
              {children}
            </>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageContent;
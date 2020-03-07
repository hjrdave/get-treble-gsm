import React from 'react';

function PageContent({ children, docs }) {
  return (
    <>
      <div className='container-fluid pt-4 pb-4'>
        <div className={`row d-flex ${(docs) ? 'justify-content-start pl-4' : 'justify-content-center'}`}>
          <div className={`${(docs) ? 'col-9' : 'col-8'}`}>
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
import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[]
}

function PageContent({ children }: Props) {
  return (
    <>
      <div className='container-fluid pt-4'>
        <div className='row d-flex justify-content-center'>
          <div className='col-8'>
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
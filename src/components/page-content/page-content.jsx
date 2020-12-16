import React from 'react';

function PageContent({ children, docs, bkGradient, bkDark, style, className }) {
  return (
    <>
      <div className={`container-fluid ${className} ${(bkGradient) ? 'bk-gradient' : (bkDark) ? 'bk-dark' : ''} pt-4 pb-4`} style={style}>
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
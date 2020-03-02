import React from "react";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';

interface Props {

}


function SearchTemplate({ }: Props) {

  return (
    <>
      <PageContainer title={'Search'}>
        <PageContent>
          <h1>
            Search Website
          </h1>
          <div className='pt-4'>

          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}

export default SearchTemplate
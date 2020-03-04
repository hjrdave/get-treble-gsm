import React from "react";
import { Link } from "gatsby";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';


const DocsPage = () => (

  <>
    <PageContainer title={'Docs'}>
      <div className='d-flex'>
        <div className='doc-nav' style={{backgroundColor: 'light-grey', width: 400}}>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>
        <PageContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper consectetur ligula sit amet pretium. Etiam ornare justo dui. Curabitur pharetra tellus quam, sit amet tincidunt erat tempus ac. In hac habitasse platea dictumst. Integer scelerisque eros quis est mattis, in viverra purus posuere. Mauris fermentum ante eu est aliquam, non fermentum turpis lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer placerat varius est, eget dignissim purus rhoncus eget. Nulla pellentesque, nisi imperdiet fringilla placerat, lacus elit cursus nisl, a varius urna augue eu justo. Fusce ultricies arcu vel velit blandit porta.</p>
        </PageContent>
      </div>
    </PageContainer>
  </>
)

export default DocsPage

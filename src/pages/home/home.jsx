import React from "react";
import PageContainer from '../../components/page-container';
import PageContent from '../../components/page-content';
import Image from '../../images/register';
import Button from 'react-bootstrap/Button';
import InfoCard from '../../components/info-card';
import CodeBlock from '../../components/code-block';
import './_home.scss';

function HomePage() {

  return (
    <>
      <PageContainer title={'Home'}>
        <div className='home-banner d-flex align-items-center'>
          <div className='col-12'>
            <div className='row d-flex justify-content-center'>
              <div className='col-2'>
                <div className='home-banner-logo'>
                  <Image name={'logoTrebleGsm'} />
                  <h1 className='text-center'>Treble</h1>
                </div>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-4'>
                <p className='text-center'>Simple Global State for React.js Apps</p>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>

              <div className='pt-3'>
                <Button style={{backgroundColor: '#175b9d', borderColor: '#175b9d'}}>Getting Started</Button>
              </div>
            </div>
          </div>
        </div>
        <PageContent>
          <div className='row py-4'>
            <div className='col-4'>
              <InfoCard 
                iconName={'iconSetup'}
                title={'Easy Setup'} 
                bodyText={'Quickly setup global state inside your App in just a few simple steps.'} 
              />
            </div>
            <div className='col-4'>
              <InfoCard 
                iconName={'iconApi'}
                title={'Simple API'} 
                bodyText={"An easy to learn, and robust API to start managing your App's state with confidence."} 
              />
            </div>
            <div className='col-4'>
              <InfoCard 
                iconName={'iconGlobal'}
                title={'Powerful Global State'} 
                bodyText={'Manage state with powerful utilties like scoped global state, data persistence, and state history.'} 
              />
            </div>
          </div>
          {/* <div className='row my-4' style={{border: '1px solid grey'}}></div> */}
          <div className='row pt-4'>
            <div className='col-6'>
              <h3>Create Store</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu est, fermentum id placerat eu, semper vitae velit. Aenean id luctus enim, eu tempus eros. In sollicitudin bibendum orci, vel semper orci mattis in. Proin eu accumsan orci. Pellentesque congue tortor sed magna luctus facilisis. Praesent id augue mi. Donec id vehicula sapien.</p>
            </div>
            <div className='col-6'>
            <CodeBlock type='Javascript' toolBar={false}>
              {`
import { createStore } from 'treble-gsm';

export default const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Mewtwo' }
    }
],);
              `}
            </CodeBlock>
            </div>
          </div>
          <div className='row pt-4'>
            
            <div className='col-6'>
              <h3>Treble Container Component</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu est, fermentum id placerat eu, semper vitae velit. Aenean id luctus enim, eu tempus eros. In sollicitudin bibendum orci, vel semper orci mattis in. Proin eu accumsan orci. Pellentesque congue tortor sed magna luctus facilisis. Praesent id augue mi. Donec id vehicula sapien.</p>
            </div>
            <div className='col-6'>
            <CodeBlock type='Javascript' toolBar={false}>
              {`
import  Treble  from  'treble-gsm';
import  Store  from  './Store';

export default const App = () => {
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}
              `}
            </CodeBlock>
            </div>
          </div>

          <div className='row pt-4'>
          <div className='col-6'>
              <h3>Subscribe and Update</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu est, fermentum id placerat eu, semper vitae velit. Aenean id luctus enim, eu tempus eros. In sollicitudin bibendum orci, vel semper orci mattis in. Proin eu accumsan orci. Pellentesque congue tortor sed magna luctus facilisis. Praesent id augue mi. Donec id vehicula sapien.</p>
            </div>
            <div className='col-6'>
            <CodeBlock type='Javascript' toolBar={false}>
              {`
import  Treble  from  'treble-gsm';
import  Store  from  './Store';

export default const App = () => {
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}
              `}
            </CodeBlock>
            </div>
            
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}


export default HomePage;

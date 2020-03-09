import React, {useEffect} from "react";
import PageContainer from '../../components/page-container';
import PageContent from '../../components/page-content';
import Image from '../../images/register';
import Button from 'react-bootstrap/Button';
import InfoCard from '../../components/info-card';
import ContentCard from '../../components/content-card';
import Prism from "prismjs";
import './_home.scss';

function HomePage() {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  },[])
  return (
    <>
      <PageContainer title={'Home'}>
        <div className='home-banner d-flex align-items-center'>
          <div className='col-12'>
            <div className='row d-flex justify-content-center'>
              <div className='col-2'>
                <div className='home-banner-logo'>
                  <Image name={'logoTrebleGsm'} />
                  <h1 className='text-center' style={{ opacity: '.7' }}>Treble</h1>
                </div>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-4'>
                <p className='text-center' style={{ opacity: '.7' }}>Simple Global State for React.js Apps</p>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>

              <div className='pt-3'>
                <Button className='px-4 py-2' style={{ backgroundColor: '#175b9d', borderColor: '#175b9d', borderRadius: '25px' }}>Getting Started</Button>
              </div>
            </div>
          </div>
        </div>
        <PageContent>
          <div className='row py-4 home-card-row'>
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

          <div className='row pt-4 mt-4'>
            <div className='col-6'>
              <h3>Create Store</h3>
              <p>Create a file in your folder structure called <code>Store.js</code>. Import <code>createStore</code> from treble-gsm and assign it to a variable called Store. The Store variable will store an array of objects. Each object will have an action and state property.  The <code>action</code> property will be a string that is used to tell Treble which state to update.  The <code>state</code> property will hold the global state.</p>
            </div>
            <div className='col-6'>
              <div className='language-javascript'>
              <pre>
                  <code>
                    {`
import { createStore } from 'treble-gsm';
const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Mewtwo' }
    }
],);
                  `}

                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className='row pt-4 mt-4'>
            <div className='col-6'>
            <div className='language-javascript'>
              <pre>
                <code>
                  {`
import  Treble  from  'treble-gsm';
import  Store  from  './Store';

const App = () => {
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}
                    `}
                </code>
              </pre>
              </div>
            </div>
            <div className='col-6'>
              <h3>Treble Container</h3>
              <p>Import the <code>Treble</code> container and <code>Store</code> components into your App.js or Index.js.  The <code>Treble</code> container provides access to the Store for all children components.  The container has a <code>store</code> prop that consumes the <code>Store</code> component. Your app now has Global state. Easy as Sugar Creme Pie!</p>
            </div>

          </div>

          <div className='row pt-4 mt-4'>
            <div className='col-6'>
              <h3>Subscribe and Update</h3>
              <p>Import the <code>useTreble</code> hook into your component and get access to the Store state variables.  Import <code>updateStore</code> and use where ever you want to update global state.  The <code>updateStore</code> function takes an action that tells Treble which state you want to update, a value that Treble will replace the targeted state with, and a dispatch function that is provided by the <code>useTreble</code> hook so Treble knows which Store to update.</p>
            </div>
            <div className='col-6'>
            <div className='language-javascript'>
              <pre>
                <code>
                  {`
const [{ pokemon, pokemonGame }, dispatch] = useTreble();

updateStore(action, value, dispatch);

<p>{ pokemon } is my favorite Pokemon!</p>
//render: Mewtwo is my favorite Pokemon!

updateStore('updatePokemon', 'Pikachu', dispatch)
//render: Pikachu is my favorite Pokemon!
                  `}
                </code>
              </pre>
              </div>
            </div>

          </div>
          <div className='row pt-4 mt-4 mb-4 d-flex justify-content-center'>
            <div className='col-12'>
              {/* <ContentCard> */}
              <div className='home-logo-github d-flex justify-content-center'>
                <Image name={'logoGithub'} />
              </div>
              <h5 className='pt-3 text-center'>Want to Support this Project?</h5>
              <div className='d-flex justify-content-center'>
                <Button className='px-4 py-2 mt-3' style={{ backgroundColor: '#175b9d', borderColor: '#175b9d', borderRadius: '25px' }}>Contribute</Button>
              </div>
              {/* </ContentCard> */}
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}


export default HomePage;

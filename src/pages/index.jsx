import React, { useEffect } from "react";
import { Link } from 'gatsby';
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';
import Image from '../images/register';
import Button from 'react-bootstrap/Button';
import InfoCard from '../components/info-card';
import SEO from '../components/seo';
import Prism from "prismjs";
import './_styles.scss';

function HomePage() {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])
  return (
    <>
      <SEO
        title={'Simple global state for React.js apps'}
        homePage={true}
      />
      <PageContainer>
        <div className='home-banner d-flex align-items-center'>
          <div className='col-12'>
            <div className='row d-flex justify-content-center'>
              <div className='col-6 col-md-4 col-lg-2'>
                <div className='home-banner-logo'>
                  <Image name={'logoTrebleGsm'} />
                  <h1 className='text-center' style={{ opacity: '.7' }}>Treble</h1>
                </div>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-12 col-lg-4'>
                <p className='text-center' style={{ opacity: '.7' }}>Simple Global State for React.js Apps</p>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>

              <div className='pt-3'>
                <Link to={'./api/introduction'}><Button className='px-4 py-2 bk-gradient' style={{ borderColor: '#175b9d', borderRadius: '25px' }}>Getting Started</Button></Link>
              </div>
            </div>
          </div>
        </div>

        <PageContent>
          <div className='row py-4 home-card-row'>
            <div className='col-12 col-lg-4'>
              <InfoCard
                iconName={'iconApi'}
                title={'Simple API'}
                bodyText={"An easy to learn, and robust API to start managing your App's state with confidence."}
              />
            </div>
            <div className='col-12 col-lg-4 pt-4 pt-lg-0'>

              <InfoCard
                iconName={'iconOptimized'}
                title={'Optimized'}
                bodyText={'Compares state agianst the previous state to prevent unnessary re-renders.'}
              />
            </div>
            <div className='col-12 col-lg-4 pt-4 pt-lg-0'>
              <InfoCard
                iconName={'iconScalable'}
                title={'Scalable'}
                bodyText={"Organize your state into multiple Stores and subscribe as if they were one."}
              />

            </div>
          </div>
          <div className='row mt-0 home-card-row'>
            <div className='col-12 col-lg-4'>
              <InfoCard
                iconName={'iconGlobal'}
                title={'Middleware'}
                bodyText={'Automate tasks and pre process state before it reaches the Store.'}
              />

            </div>
            <div className='col-12 col-lg-4 pt-4 pt-lg-0'>
              <InfoCard
                iconName={'iconScoped'}
                title={'Scoped State'}
                bodyText={"Create high powered components with their own private global state."}
              />
            </div>
            <div className='col-12 col-lg-4 pt-4 pt-lg-0'>
              <InfoCard
                iconName={'iconExtendable'}
                title={'Extendable'}
                bodyText={'Extend TrebleGSM functionility with Treble Modules or create your own.'}
              />
            </div>
          </div>
          {/* <div className='row my-4' style={{border: '1px solid grey'}}></div> */}
        </PageContent>
        <PageContent style={{ marginTop: '-75px' }}>
          <div className='three-steps-row row pt-4 mt-4'>
            <div className='col-12 col-lg-6 pt-4'>
              <h3 className='text-center text-lg-left'>Create Store</h3>
              <p className='pt-3 pt-lg-0'>Create a file in your folder structure called <code>Store.js</code>. Import <code>createStore</code> from treble-gsm and assign it to a variable called Store. The Store variable will store an array of objects. Each object will have an action and state property.  The <code>action</code> property will be a string that is used to tell Treble which state to update.  The <code>state</code> property will hold the global state.</p>
            </div>
            <div className='col-12 col-lg-6 pt-lg-4'>
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
          <div className='row pt-4 mt-4 flex-column-reverse flex-lg-row'>
            <div className='col-12 col-lg-6'>
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
            <div className='col-12 col-lg-6'>
              <h3 className='text-center text-lg-left'>Treble Container</h3>
              <p className='pt-3 pt-lg-0'>Import the <code>Treble</code> provider component and <code>Store</code> components into your App.js or Index.js.  The <code>Treble</code> provider gives access to the Store for all children components.  The provider component has a <code>store</code> prop that consumes the <code>Store</code> component. Your app now has Global state. Easy as Sugar Creme Pie!</p>
            </div>

          </div>
          <div className='row pt-4 mt-4'>
            <div className='col-12 col-lg-6'>
              <h3 className='text-center text-lg-left'>Subscribe and Update</h3>
              <p className='pt-3 pt-lg-0'>Import the <code>useTreble</code> hook into your component and get access to Store state objects and Store subscribe methods.  Destructure both from the <code>useTreble</code> hook. Use <code>Store.update</code> to target the desired state in the Store by its action and dispatch the new value to the Store. Tada! That is it, you can now manage global state in your app like a boss!</p>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='language-javascript'>
                <pre>
                  <code>
                    {`
const [{ pokemon }, Store] = useTreble();

Store.update(action, dispatchValue);

<p>{ pokemon } is my favorite Pokemon!</p>
//render: Mewtwo is my favorite Pokemon!

Store.update('updatePokemon', 'Pikachu')
//render: Pikachu is my favorite Pokemon!
                  `}
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </PageContent>
        <PageContent bkGradient>
          <div className='row pt-4 mt-4 mb-4 d-flex justify-content-center'>
            <div className='col-8 col-lg-12'>
              {/* <ContentCard> */}
              <div className='home-logo-github d-flex justify-content-center'>
                <Image name={'logoGithub'} />
              </div>
              <h5 className='pt-3 text-center'>Want to Support this Project?</h5>
              <div className='d-flex justify-content-center'>
                <Button className='px-4 py-2 mt-3' style={{ backgroundColor: '#20222A', borderColor: '#20222A', borderRadius: '25px', }}><a href='https://github.com/hjrdave/treble-gsm' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Contribute</a></Button>
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

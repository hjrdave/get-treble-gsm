import React from "react";
import { Link } from 'gatsby';
import PageContainer from '../components/organisms/page-container';
import PageContent from '../components/organisms/page-content';
import ButtonCustom from '../components/atoms/btn-custom';
import SkewedBorder from '../components/atoms/skewed-border';
import SupportRow from '../components/organisms/support-row';
import Image from '../images/register';
import { Button, Row, Col } from 'react-bootstrap';
import InfoCard from '../components/organisms/info-card';
import CodeBlock from '../components/atoms/code-block';
import SEO from '../components/atoms/seo';
// import Prism from "prismjs";
import styles from './home.module.scss';

export default function HomePage() {

  return (
    <>
      <SEO
        title={'Simple global state for React.js apps'}
        homePage={true}
      />
      <PageContainer>
        <div className={`${styles.homeBanner} d-flex align-items-center`}>
          <Col>
            <Row className='d-flex justify-content-center'>
              <Col sm='6' md='4' lg='2'>
                <div className={styles.homeBannerLogo}>
                  <Image name={'logoTrebleGsm'} />
                  <h1 className='text-center' style={{ opacity: '.7' }}>Treble</h1>
                </div>
              </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col lg='4' className='col-12 col-lg-4'>
                <p className='text-center' style={{ opacity: '.7' }}>Global State Management for React.js Apps</p>
              </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col className='d-flex justify-content-center pt-3'>
                <Link to={'./api/introduction'}>
                  <ButtonCustom gradient>Getting Started</ButtonCustom>
                </Link>
              </Col>
            </Row>
          </Col>
        </div>
        <SkewedBorder left dark style={{ marginTop: '-60px', marginBottom: '-50px' }} />
        <PageContent style={{ position: 'relative', zIndex: 1 }}>
          <Row className={`py-4 ${styles.homeCardRow}`}>
            <Col lg='4'>
              <InfoCard
                iconName={'iconApi'}
                title={'Simple API'}
                bodyText={"No reducers and complicated boilerplate. Subscribe and update state with a simple Hook."}
              />
            </Col>
            <Col lg='4' className='pt-4 pt-lg-0'>
              <InfoCard
                iconName={'iconOptimized'}
                title={'Optimized'}
                bodyText={'Compares state agianst the previous state to prevent unnessary re-renders.'}
              />
            </Col>
            <Col lg='4' className='pt-4 pt-lg-0'>
              <InfoCard
                iconName={'iconScalable'}
                title={'Scalable'}
                bodyText={"Organize your state into multiple Stores and subscribe as if they were one."}
              />
            </Col>
          </Row>
          <Row className={`mt-0 ${styles.homeCardRow}`}>
            <Col lg='4'>
              <InfoCard
                iconName={'iconGlobal'}
                title={'Middleware'}
                bodyText={'Automate tasks and centralize complex state logic before state is updated.'}
              />

            </Col>
            <Col lg='4' className='pt-4 pt-lg-0'>
              <InfoCard
                iconName={'iconScoped'}
                title={'Scoped State'}
                bodyText={"Create and maintain high powered components with private global state."}
              />
            </Col>
            <Col lg='4' className='pt-4 pt-lg-0'>
              <InfoCard
                iconName={'iconExtendable'}
                title={'Extendable'}
                bodyText={'Extend TrebleGSM functionality with Treble Modules or create your own modules.'}
              />
            </Col>
          </Row>
          {/* <div className='row my-4' style={{border: '1px solid grey'}}></div> */}
        </PageContent>
        <SkewedBorder left white style={{ marginTop: '-280px', marginBottom: '-130px', height: '200px' }} />
        <PageContent bkGradient style={{ marginTop: '-50px' }}>
          <Row className={`pt-4 mt-2`}>
            <Col className={`${styles.installRow} pt-4`}>
              <h3 className='text-center text-lg-left pt-4'>Install Package</h3>
              <CodeBlock>
                {`npm install treble-gsm`}
              </CodeBlock>
              <CodeBlock className='mt-4'>
                {`yarn add treble-gsm`}
              </CodeBlock>
            </Col>
          </Row>
        </PageContent>
        <SkewedBorder right dark style={{ height: '100px', marginTop: '-50px', marginBottom: '-50px' }} />
        <PageContent bkDark style={{ marginTop: '0px' }}>
          <Row className={`${styles.threeStepsRow} pt-4 mt-4`}>
            <Col lg='6' className='pt-4'>
              <h3 className='text-center text-lg-left text-white'>Create a Store</h3>
              <p className='pt-3 pt-lg-0 text-white'>Create a file in your folder structure called <code>Store.js</code>. Import <code>createStore</code> from treble-gsm and assign it to a variable called Store. The Store variable will store an array of objects. Each object will have an action and state property.  The <code>action</code> property will be a string that is used to tell Treble which state to update.  The <code>state</code> property will hold the global state.</p>
            </Col>
            <Col lg='6' className='pt-lg-4'>
              <CodeBlock>
                {`
const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Mewtwo' }
    }
],);
                  `}
              </CodeBlock>
            </Col>
          </Row>
          <Row className='pt-4 mt-4 flex-column-reverse flex-lg-row'>
            <Col lg='6'>
              <CodeBlock>
                {`
const App = () => {
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}
                    `}
              </CodeBlock>
            </Col>
            <Col lg='6'>
              <h3 className='text-center text-lg-left text-white'>Wrap Components with Provider</h3>
              <p className='pt-3 pt-lg-0 text-white'>Import the <code>Treble</code> provider component and <code>Store</code> components into your App.js or Index.js.  The <code>Treble</code> provider gives access to the Store for all children components.  The provider component has a <code>store</code> prop that consumes the <code>Store</code> component. Your app now has Global state. Easy as Sugar Creme Pie!</p>
            </Col>
          </Row>
          <Row className='pt-4 mt-4'>
            <Col lg='6'>
              <h3 className='text-center text-lg-left text-white'>Subscribe and Update</h3>
              <p className='pt-3 pt-lg-0 text-white'>Import the <code>useTreble</code> hook into your component and get access to Store state objects and Store subscribe methods.  Destructure both from the <code>useTreble</code> hook. Use <code>Store.update</code> to target the desired state in the Store by its action and dispatch the new value to the Store. Tada! That is it, you can now manage global state in your app like a boss!</p>
            </Col>
            <Col lg='6'>
              <CodeBlock>
                {`
const [{ pokemon }, Store] = useTreble();

Store.update(action, dispatchValue);

<p>{ pokemon } is my favorite Pokemon!</p>
//render: Mewtwo is my favorite Pokemon!

Store.update('updatePokemon', 'Pikachu')
//render: Pikachu is my favorite Pokemon!
                  `}
              </CodeBlock>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center pt-4'>
            <Col className='d-flex justify-content-center py-4'>
              <Link to={'./api/introduction'}><Button className='px-4 py-2 bk-gradient' style={{ borderColor: '#175b9d', borderRadius: '25px' }}>Learn More</Button></Link>
            </Col>
          </Row>
        </PageContent>
        <SkewedBorder left dark style={{ marginTop: '-100px', position: 'relative', zIndex: '-1' }} />
        <PageContent>
          <SupportRow />
        </PageContent>
      </PageContainer>
    </>
  )
};


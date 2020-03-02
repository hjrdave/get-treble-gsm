import React from "react";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';
import Image from '../images/register'
import './_home.scss';

function Home() {

  return (
    <>
      <PageContainer title={'Home'}>
        <div className='home-banner d-flex align-items-center'>
          <div className='col-12'>
          <div className='row d-flex justify-content-center'>
              <div className='col-2'>
                <div className='home-banner-logo'>
                  <Image name={'logoTrebleGsm'}/>
                  <h1 className='text-center'>Treble</h1>
                </div>
              </div>
          </div>
          <div className='row d-flex justify-content-center'>
              <div className='col-4'>
                <p className='text-center'>Simple Global State for React.js Apps</p>
              </div>
          </div>
          </div>
        </div>
        <PageContent>
          <h1 className='pt-4'>Home Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas.</p>
        </PageContent>
      </PageContainer>
    </>
  )
}


export default Home

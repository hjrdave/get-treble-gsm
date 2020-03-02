/*
  Home Slider
  
  Notes: Each object is a slide.  The first object is the default slide.
  Must register image before use.  The image property takes the name of the 
  registred image.
*/

import React from 'react';
import Slider from '../../components/slider';
import './_home-slider.scss';

function HomeSlider() {

  return (
    <>
      <div id='home-slider'>
        <Slider
          slides={[

            //slide 1
            {
              image: 'slide1',
              headline: 'Slide 1',
              lede: 'Foo Foo Foo'
            },

            //slide 2
            {
              image: 'slide2',
              headline: 'Slide 2',
              lede: 'Foo Foo Foo'
            },

            //slide 3
            {
              image: 'slide3',
              headline: 'Slide 3',
              lede: 'Foo Foo Foo'
            }
          ]}
        />
      </div>
    </>
  )
}

export default HomeSlider;

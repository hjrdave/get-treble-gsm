import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../images/register';
import './_slider.scss';
import uniqid from 'uniqid';

interface Props {
  slides: {
    image: string,
    headline: string,
    lede: string
  }[]
}

function Slider({ slides }: Props) {

  //state
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  //handlers
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };


  return (
    <>
      <Carousel activeIndex={index} direction={direction as any} onSelect={handleSelect}>
        {
          slides.map((item) => {
            return (

              <Carousel.Item>
                <Image name={item.image} />
                <Carousel.Caption className='d-flex align-items-center justify-content-center'>
                  <div>
                    <h3>{item.headline}</h3>
                    <p>{item.lede}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

            )
          })
        }
      </Carousel>
    </>
  )
}

export default Slider;
import React from 'react'
import { withRouteData } from 'react-static'
//
import Slider from 'react-slick'
import styled from 'styled-components'
const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    };
const Image = styled.img`
  width: 100%;
`
export default withRouteData(({sliderImgs}) => {
  return (
    <div>
      <h1>Health, Truth Contribution and Community</h1>
      <Slider {...settings}>
        {sliderImgs.map(img => (
          <Image src={img.data.thumbnail}/>
        ))}
      </Slider>
      <div>
        Featuring mixed martial arts programs with an emphasis on jiu jitsu, Greco-Roman and freestyle wrestling, judo, and submission grappling, boxing, and kickboxing
      </div>
    </div>
  )
})

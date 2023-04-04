import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive'
import style from '../../styles/Banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

type bannerMedia = {
  isSmall : boolean,
  isMedium : boolean,
  isLarge : boolean
}

const Banner : React.FC = () : JSX.Element => {
  const media : bannerMedia = {
    isSmall : useMediaQuery({query : '(max-width:425px) and (max-width:767px)'}),
    isMedium: useMediaQuery({query : '(max-width:768px)'}),
    isLarge: useMediaQuery({query : '(min-width:7689x)'})
  }

  const BANNER_PUBLIC_URL = media.isMedium ? '/assets/banner/small/' : '/assets/banner/large/';

  const bannerImagesList : string[] = media.isMedium 
  ? require.context(`/public/assets/banner/small`, true).keys()
  : require.context(`/public/assets/banner/large`, true).keys()

  
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={media.isMedium ? true : false}
        showArrows={media.isMedium ? false : true}
        showThumbs={false}
        interval={3000}
      >
        {
          bannerImagesList.map(imgURL => (
            <div>
              <img loading='lazy' src={BANNER_PUBLIC_URL + imgURL}
                alt='Banner Image'
                className={style.carousal_image}
                key={imgURL}
              />
            </div>
            ))
          }
      </Carousel>
    </div>
  )
}

export default Banner
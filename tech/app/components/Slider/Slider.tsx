'use client';

import { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { type ProductCarousel } from '@/sanity/sanity-tech-utils';
import './Slider.scss';
import LoadingImage from '../LoadingImage/LoadingImage';

const ImageSlider = ({ images }: { images: ProductCarousel[] }) => {
  let settings = {
    className: 'slider variable-width custom-slider',
    infinite: true,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
    ],
  };

  const [toggler, setToggler] = useState<boolean | undefined>(undefined);
  const [imageIndex, setImageIndex] = useState(1);

  return (
    <div className={'imageSlider'}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setToggler(!toggler);
              setImageIndex(index + 1);
            }}
          >
            <LoadingImage
              url={item.image}
              title={'Image slider'}
              width={600}
              height={600}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

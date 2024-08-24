'use client';

import { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { CourseCarousel } from '@/sanity/sanity-utils';

//import FsLightbox from 'fslightbox-react';

//import globalStyles from "@/app/assets/styles/global.module.scss";
import './Slider.scss';
import LoadingImage from '../LoadingImage/LoadingImage';

//import {IImageSlider} from "../../../../typesSection";

const ImageSlider = ({ images }: { images: CourseCarousel[] }) => {
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
      <div className={'gliderStyle'}>
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
                width={1000}
                height={600}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;

'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import './LoadingImage.scss';

interface ILoadingImage {
  url: string;
  title: string;
  className?: string;
  width?: number;
  height?: number;
}

const LoadingImage = (params: ILoadingImage) => {
  const { url, title, className, width, height } = params;

  const [blur, setBlur] = useState(true);
  const loadingImage = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loadingImage.current) {
      if (loadingImage.current.complete) {
        setBlur(false);
      }

      loadingImage.current.addEventListener('load', () => {
        setBlur(false);
      });
    }
  }, []);

  return (
    <div className={`${className} image-container ${blur ? 'blur' : 'unblur'}`}>
      {width && height && (
        <Image
          className="placeholder-image"
          src={`${url}?w=${width / 20}&h=${height / 20}&auto=format`}
          alt={title}
          fill
          sizes="(max-width: 450px) 100vw, 600px"
        />
      )}

      <Image
        className="real-image"
        ref={loadingImage}
        src={url}
        alt={title}
        fill
        sizes="(max-width: 450px) 100vw, 600px"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default LoadingImage;

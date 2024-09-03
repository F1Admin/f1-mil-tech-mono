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
    <div
      className={`${className} image-container ${blur ? 'blur' : 'unblur'}`}
      style={{
        background: '#eee',
      }}
    >
      {width && height && (
        <Image
          className="placeholder-image"
          src={`${url}?w=${width / 20}&h=${height / 20}&auto=format`}
          alt={title}
          width={width / 10}
          height={height / 10}
        />
      )}

      <Image
        className="real-image"
        ref={loadingImage}
        src={url}
        alt={title}
        width={width}
        height={height}
      />
    </div>
  );
};

export default LoadingImage;

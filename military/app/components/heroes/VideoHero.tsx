'use client';

import { SanityHotspot } from '@/sanity/sanity-military-utils';
import Image from 'next/image';
import MuxPlayer from '@mux/mux-player-react';
import { useState } from 'react';

interface VideoHeroProps {
  thumbnail: string;
  
  thumbnailHotspot?: SanityHotspot | null;
  muxPlaybackId?: string;
  alt?: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
}

export default function VideoHero({
  thumbnail,
  thumbnailHotspot = { x: 0.5, y: 0.5 },
  muxPlaybackId,
  alt = 'Video thumbnail',
  title,
  autoPlay = false,
  className = '',
}: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const effectiveHotspot = thumbnailHotspot ?? { x: 0.5, y: 0.5 };
  const backgroundPosition = `${effectiveHotspot.x * 100}% ${effectiveHotspot.y * 100}%`;

  const handlePlay = () => {
    if (!muxPlaybackId) return;
    setIsPlaying(true);
  };

  return (
    <div className={`bg-black ${className}`}>
      <div className="relative mx-auto aspect-video w-full overflow-hidden lg:max-h-[60vh] lg:max-w-[106.67vh]">

      {/* Thumbnail backdrop — always visible when autoPlay to prevent black flash */}
      {(!isPlaying || autoPlay) && (
        <div className="absolute inset-0 z-0">
          <Image
            src={thumbnail}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
            style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
          />
        </div>
      )}
      {!isPlaying && !autoPlay && (
        <>
          {muxPlaybackId && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
              aria-label="Play video"
            >
              <PlayIcon />
            </button>
          )}
          {title && (
            <div className="absolute bottom-0 left-0 z-10 p-4 md:p-10">
              <h2 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
                {title}
              </h2>
            </div>
          )}
        </>
      )}
      {isPlaying && muxPlaybackId && (
        <MuxPlayer
          playbackId={muxPlaybackId}
          autoPlay
          muted={autoPlay}
          className="relative z-10 aspect-video w-full"
          thumbnailTime={0}
        />
      )}
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      className="h-20 w-20 text-white drop-shadow-lg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

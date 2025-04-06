import { Video } from '@/sanity/sanity-tech-utils';

type YouTubeVideoProps = {
  video: Video;
};

export default function YouTubeVideo({ video }: YouTubeVideoProps) {
  return (
    <>
      {video.youtubeVideoId && (
        <div className="px-10 py-5 md:px-20">
          <div className="relative mx-auto w-full max-w-4xl pt-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={`https://www.youtube.com/embed/${video.youtubeVideoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

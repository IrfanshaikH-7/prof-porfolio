import React from 'react'
import Heading from './Heading';

export default function FeaturedVideo() {
  const videos = [
    { id: '1', url: 'https://www.youtube.com/watch?v=74aa9ea1-d424-43f7-b3d4-492767070ed2' },
    { id: '2', url: 'https://www.youtube.com/watch?v=74aa9ea1-d424-43f7-b3d4-492767070ed2' },
    { id: '3', url: 'https://www.youtube.com/watch?v=74aa9ea1-d424-43f7-b3d4-492767070ed2' },
    { id: '4', url: 'https://www.youtube.com/watch?v=74aa9ea1-d424-43f7-b3d4-492767070ed2' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        <div className='w-fit mx-auto pb-8'>
            <Heading title="Featured Videos" />
        </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {videos.map((video) => (
          <div key={video.id} className="aspect-video">
            <iframe
              src={video.url}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  )
}

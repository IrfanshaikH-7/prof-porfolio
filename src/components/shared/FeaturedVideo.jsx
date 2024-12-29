import React from 'react'
import Heading from './Heading';

export default function FeaturedVideo() {
  const videos = [
    { id: '1', url: 'https://www.youtube.com/embed/c0nkLDaBeI8?si=C1aSwO9FQkaw0uHK' },
    { id: '2', url: 'https://www.youtube.com/embed/bePAdeFdXDM?si=UZALQhemoQySbQLz' },
    { id: '3', url: 'https://www.youtube.com/embed/Z0i9PevyjSM?si=KzgGzghTLNrRSCUf' },
    { id: '4', url: 'https://www.youtube.com/embed/JMPCpf6hmoE?si=lrBpdcg4dat_zz1N' },
  ];

  return (
    <div className="w-full  mx-auto md:px-4 py-8">
        <div className='w-fit mx-auto pb-8'>
            <Heading title="Featured Videos" />
        </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 md:gap-3 ">
        {videos.map((video) => (
          <div key={video.id} className="h-52 w-full rounded-md overflow-hidden border">
           <iframe className=' h-full w-full'  src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}

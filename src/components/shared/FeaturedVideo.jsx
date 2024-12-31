import React from 'react'
import Heading from './Heading';

export default function FeaturedVideo({videos, title,isPage}) {

  return (
    <div className="w-full mx-auto md:px-4 py-8">
        <div className='w-fit mx-auto pb-8'>
            <Heading title={title || "Featured Videos"} />
        </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 md:gap-3 ${isPage ? "gap-6 md:gap-6" : "gap-6 md:gap-3"}`}>
        {videos.map((video) => (
          <div key={video.id} className="h-52 w-full rounded-md overflow-hidden border">
           <iframe className=' h-full w-full'  loading="lazy"  src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}

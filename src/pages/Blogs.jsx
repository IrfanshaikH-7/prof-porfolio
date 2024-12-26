import React from 'react'
import { blogs } from '../blogs/blogs'
export default function Blogs() {
  return (
    <main className="min-h-screen p-4 max-w-7xl mx-auto">
      <div className='flex w-full gap-4 items-center justify-center pt-12 pb-16'>
        <div className='h-1 w-full bg-black rounded-md'/>
    <p className=' text-2xl md:text-5xl font-bold break-keep min-w-fit'>BLOGS</p>
    <div className='h-1 w-full bg-black rounded-md'/>
    </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]  gap-6">
       {
        blogs.map((blog) => (
          <div className="tcard w-full aspect-video">
          <h3 className="tcard__title"> {blog.title} </h3>
          <p className="tcard__content line-clamp-4"> {blog.content[0].content} </p>
          <div className="tcard__date">
              April 15, 2022
          </div>
          <div className="tcard__arrow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                  <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
              </svg>
          </div>
      </div>
        ))
       }
      </div>
    </main>
  )
} 
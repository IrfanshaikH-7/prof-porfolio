import React from 'react'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs';
import Heading from '../components/shared/Heading';
export default function Blogs() {
  const formatDate = (dateString) => {
    // Try parsing with different formats
    const formats = ['DD-MM-YY', 'DD-MM-YYYY'];
    let parsedDate;
    
    for (const format of formats) {
      parsedDate = dayjs(dateString, format);
      if (parsedDate.isValid()) {
        return parsedDate.format('DD MMM YYYY');
      }
    }
    
    // If no format matches, return original string
    return dateString;
  };

  return (
    <main className="min-h-screen px-4 py-12 max-w-7xl mx-auto">
      <div className="w-fit mx-auto pb-8">
        <Heading title="Blogs" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]  gap-6">
       {
        blogs.map((blog) => (
          <Link to={`/blogs/${blog.slug}`} className="tcard w-full aspect-video">
          <div className="tcard__title line-clamp-2"> {blog.title} </div>
          <div className="tcard__content line-clamp-4 space-y-1"> 
            <p>{blog.content[0]?.content}</p>
            <p>{blog.content[1]?.content}</p>
            
            </div>
          <div className="tcard__date">
          {formatDate(blog.date)}
          </div>
          {/* <div  className="tcard__arrow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                  <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
              </svg>
          </div> */}
      </Link>
        ))
       }
      </div>
    </main>
  )
} 
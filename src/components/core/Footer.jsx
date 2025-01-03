import React from 'react'
import { vinay_nangia, x_twitter } from '../../assets'
import { Facebook, LinkedinIcon, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogs } from '../../data/blogs'

export default function Footer() {
  return (
    <main className='flex flex-col m-4 gap-4'>
      <footer className='bg-neutral-800 h-full md:h-fit py-8 flex-col md:flex-row flex items-start md:items-center justify-between md:px-4 lg:px-12 px-4 rounded-xl'>
        {/* logo */}
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-white text-4xl flex items-center flex-row'>
            <div className='text-white flex items-center justify-center gap-4 mt-2 mr-1 bg-white rounded-md px-2 py-2'>
              <img src={vinay_nangia} alt='vinay nangia' className='w-16 h-16 rounded-md object-fill' />
              <span className='text-black'>Vinay K Nangia</span>
            </div>
          </h1>
          <p className='text-neutral-300 text-sm font-semibold max-w-sm mt-2'>
            Professor Nangia is a leader, mentor, motivator, educator, trainer, coach and guide to students, scholars, teachers and business executives in academia, industry and government with his rich experience of industry, education, consulting and start-up world.
          </p>
          <a href="https://vinaynangia.com/wp-content/uploads/2020/06/CV-Prof.-V.K-Nangia-04022020.pdf" className='text-neutral-300 border border-neutral-300 rounded-md px-6 py-2 text-xl font-bold max-w-sm mt-2 hover:bg-neutral-100 hover:text-black'>VIEW CV</a>
        </div>
        {/* quick links */}
        <div className=' flex gap-8 md:gap-4 xl:gap-28 md:px-4 xl:px-24 flex-row flex-wrap md:flex-nowrap items-start py-8 md:py-0'>


          <div className='flex flex-col items-start justify-center w-fit min-w-fit '>
            <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
              <div className='text-white break-keep'>Discover</div>
            </h1>
            <Link to='/awards' className='text-neutral-300 text-sm font-bold max-w-sm hover:underline'>Awards</Link>
            <Link to='/gallery' className='text-neutral-300 text-sm font-bold max-w-sm hover:underline'>Gallery</Link>
            <Link to='/recommendations/academic-leaders' className='text-neutral-300 text-sm font-bold max-w-sm hover:underline'>Recommendations</Link>
            <Link to='/blogs' className='text-neutral-300 text-sm font-bold max-w-sm hover:underline'>Blogs</Link>
            <Link to='/youtube' className='text-neutral-300 text-sm font-bold max-w-sm hover:underline'>Youtube</Link>

          </div>
          {/* another */}
          <div className='flex flex-col items-start justify-center w-fit min-w-fit'>
            <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
              <div className='text-white'>Recent Blogs</div>
            </h1>
            <div className='flex flex-col gap-0.5 items-start justify-center md:max-w-[260px]'>
              {
                blogs.slice(0, 4).map((blog) => (
                  <Link to={`/blogs/${blog.slug}`} className='text-neutral-300 text-sm font-bold hover:underline ' >{blog.title}</Link>
                ))
              }

            </div>

          </div>
          {/* ok */}
          <div className='flex flex-col items-start justify-center w-fit min-w-fit'>
            <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
              <div className='text-white'>Social Links</div>
            </h1>
            <div className='flex gap-3 items-start mb-2'>
              <Link to={'https://www.linkedin.com/in/prof-vinay-nangia-760a6360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '} target="_blank"
                className='p-2 rounded-md bg-neutral-800 border shadow-sm group hover:bg-black transition-colors duration-300'>
                <LinkedinIcon className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-200 group-hover:text-white' /></Link>

              <Link to={'https://www.facebook.com/vinay.nangia.98?mibextid=ZbWKwL'} target="_blank" className='p-2 rounded-md bg-neutral-800 border shadow-sm group hover:bg-black transition-colors duration-300'><Facebook className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-200 group-hover:text-white' /></Link>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <p className='text-neutral-300 text-sm font-bold max-w-sm'>
                <span className='text-white'>Phone: </span>
                <span className='text-neutral-400'>+91 9639184798</span>
              </p>
              <p className='text-neutral-300 text-sm font-bold max-w-sm'>
                <span className='text-white'>Email: </span>
                <span className='text-neutral-400'>vinaynangia@gmail.com</span>
              </p>


            </div>
           
          </div>
        </div>
      </footer>
      <div className='h-16 bg-neutral-800 flex items-center justify-center w-full rounded-xl'>
        <p className='text-white text-xs md:text-sm font-bold'>
          &copy; 2024 Vinay Kumar Nangia. All rights reserved.
        </p>
      </div>
    </main>
  )
}

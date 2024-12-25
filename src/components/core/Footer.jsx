import React from 'react'
import { vinay_nangia } from '../../assets'

export default function Footer() {
  return (
    <main className='flex flex-col m-4 gap-4'>
    <footer className='bg-neutral-800 h-full md:h-fit py-8 flex-col md:flex-row flex items-start md:items-center justify-between md:px-4 lg:px-24 px-4 rounded-xl'>
      {/* logo */}
     <div className='flex flex-col items-start justify-center'>
      <h1 className='text-white text-4xl flex items-center flex-row'>
      <div className='text-white flex items-center justify-center gap-4 mt-2 mr-1 bg-white rounded-md px-2 py-2'>
        <img src={vinay_nangia} alt='vinay nangia' className='w-16 h-16 rounded-md object-fill' />
        <span className='text-black'>Vinay K Nangia</span>
        </div>
      </h1>
      <p className='text-neutral-300 text-base font-semibold max-w-sm mt-2'>
      Professor Nangia is a leader, mentor, motivator, educator, trainer, coach and guide to students, scholars, teachers and business executives in academia, industry and government with his rich experience of industry, education, consulting and start-up world.
      </p>
      <a href="" className='text-neutral-300 border border-neutral-300 rounded-md px-6 py-2 text-xl font-bold max-w-sm mt-2 hover:bg-neutral-100 hover:text-black'>VIEW CV</a>
     </div>
     {/* quick links */}
     <div className=' flex gap-8 md:gap-4 xl:gap-28 md:px-4 xl:px-24 flex-row flex-wrap md:flex-nowrap items-start py-8 md:py-0'>

   
     <div className='flex flex-col items-start justify-center w-fit min-w-fit '>
      <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
      <div className='text-white break-keep'>Discover</div>
      </h1>
      <a href='/about' className='text-neutral-300 text-base font-bold max-w-sm'>About</a>
      <a href='/awards' className='text-neutral-300 text-base font-bold max-w-sm'>Awards</a>
      <a href='/gallery' className='text-neutral-300 text-base font-bold max-w-sm'>Gallery</a>
      <a href='/recommendations' className='text-neutral-300 text-base font-bold max-w-sm'>Recommendations</a>
     </div>
     {/* another */}
     <div className='flex flex-col items-start justify-center w-fit min-w-fit'>
      <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
      <div className='text-white'>Recent Blogs</div>
      </h1>
      <p className='text-neutral-300 text-base font-bold max-w-sm'>Play Vavada on smartphones</p>
      <p className='text-neutral-300 text-base font-bold max-w-sm'>How to spend your years in college</p>
      <p className='text-neutral-300 text-base font-bold max-w-sm'>Start-up versus MSME</p>
      <p className='text-neutral-300 text-base font-bold max-w-sm'>Greed and Fear</p>
      <p className='text-neutral-300 text-base font-bold max-w-sm'>Indian Ethos & Culture and National Education Policy 2020</p>
     </div>
     {/* ok */}
     <div className='flex flex-col items-start justify-center w-fit min-w-fit'>
      <h1 className='text-white text-2xl font-bold flex items-center flex-row'>
      <div className='text-white'>Social Links</div>
      </h1>
     <div className='flex flex-col items-start justify-center'>
      <p className='text-neutral-300 text-base font-bold max-w-sm'>
      <span className='text-white'>Phone: </span>
      <span className='text-neutral-400'>+91 9639184798</span>
      </p>
      <p className='text-neutral-300 text-base font-bold max-w-sm'>
      <span className='text-white'>Email: </span>
      <span className='text-neutral-400'>vinaynangia@gmail.com</span>
      </p>
    

     </div>
     </div>
       </div>
    </footer>
    <div className='h-16 bg-neutral-800 flex items-center justify-center w-full rounded-xl'>
      <p className='text-white text-xs md:text-base font-bold'>
        &copy; 2024 Vinay Kumar Nangia. All rights reserved.
      </p>
    </div>
    </main>
  )
}

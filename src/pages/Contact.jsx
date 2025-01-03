import React from 'react'
import Heading from '../components/shared/Heading'

export default function Contact() {
  return (
    <div className='w-[86.5%] mx-auto min-h-full py-12 items-start flex-col flex gap-12'>
    <div className='w-fit mx-auto  '>
        <Heading title='Contact' />
    </div>

    <div className='py-8 rounded-xl flex items-center justify-around w-full bg-neutral-300'>
      <p className='text-base bg-neutral-200 py-2 px-4 rounded-lg text-neutral-700 font-medium'>
        <span className='font-bold'>Phone:</span>  +91 9639184798
      </p>
      <p className='text-base bg-neutral-200 py-2 px-4 rounded-lg text-neutral-700 font-medium'>
        <span className='font-bold'>Email:</span> vinaynangia@gmail.com
      </p>

    </div>
  </div>
  )
} 
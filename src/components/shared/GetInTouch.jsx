import { Facebook, Instagram, LinkedinIcon, Mail, MessageCircleDashed, Twitter, X } from 'lucide-react'
import React from 'react'

export default function NeedAssistant() {
  return (
    <div className='h-full flex flex-col gap-8 items-center justify-center w-full max-w-6xl mx-auto py-6 my-12'>
      
      <div className='flex w-full gap-4 items-center justify-center'>
        <div className='h-1 w-full bg-black rounded-md'/>
    <p className=' text-2xl md:text-5xl font-bold break-keep min-w-fit'>Get in touch</p>
    <div className='h-1 w-full bg-black rounded-md'/>
    </div>
        
      <div className='flex gap-3 items-start'>

        <a href={'#'} className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Twitter  className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white'/></a>

        <a href={'#'} target="/"  
        className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><LinkedinIcon className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></a>

        <a href={'#'} className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Facebook className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></a>
        </div>
        <a href={"#"} className='w-full bg-black max-w-48 px-6 py-2.5 text-white text-center rounded-[40px] ' >Contact</a>
    </div>
  )
}

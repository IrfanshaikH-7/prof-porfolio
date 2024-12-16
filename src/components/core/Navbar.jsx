import { AlignLeft, X } from 'lucide-react'
import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='w-full h-14 bg-white shadow-sm flex items-center justify-between px-4 sticky top-0 z-50'>
          {/* Large screen */}
          <div className='flex items-center gap-4'>
            <h2 className='font-bold hidden md:block'>Vinay K Nangia</h2>
          </div>
          <div className='hidden gap-4 pr-8 md:flex items-center'>
              <a href='#' className='text-sm font-medium text-neutral-700 hover:text-neutral-900'>Home</a>
              <a href='#' className='text-sm font-medium text-neutral-700 hover:text-neutral-900'>Blogs</a>
              <a href='#' className='text-sm font-medium text-neutral-700 hover:text-neutral-900'>Recommendations</a>
              <a href='#' className='text-sm font-medium text-neutral-700 hover:text-neutral-900'>Awards</a>
              <a href='#' className='text-sm font-medium text-neutral-700 hover:text-neutral-900'>Gallery</a>
              <a href='#' className='text-sm font-medium text-neutral-700 hover:text-neutral-900'>Contact</a>
          </div>
          {/* Small screen */}
          <div className='flex items-center justify-between w-full md:hidden'>
              <h2 className='font-bold '>Vinay K Nangia</h2>
              <div className='flex items-center gap-4'>
                  <button onClick={() => setIsOpen(!isOpen)}>
                      { <AlignLeft />}
                  </button>
              </div>
          </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed  top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className='flex justify-between items-center h-14 w-full px-4'>
          <h2 className='font-bold'>Vinay K Nangia</h2>
          {isOpen && <X className=' cursor-pointer' 
          onClick={() => setIsOpen(false)}
          />}
          
        </div>
          <div className='flex flex-col p-8 gap-6 mt-4'>
              <a href='#' className='text-lg hover:text-gray-600'>Home</a>
              <a href='#' className='text-lg hover:text-gray-600'>About</a>
              <a href='#' className='text-lg hover:text-gray-600'>Projects</a>
              <a href='#' className='text-lg hover:text-gray-600'>Contact</a>
          </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

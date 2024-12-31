import { AlignLeft, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const recommendationLinks = [
    'Academic Leaders',
    'Faculty Colleagues',
    'Academic Fraternity',
    'Scholars Abroad',
    'Students',
    'Civil Servants',
    'Business World',
    'Start-ups'
  ];

  const handleRecommendationClick = () => {
    setShowRecommendations(false);
  };

  return (
    <>
      <nav className='w-full h-14 bg-white shadow-sm flex items-center justify-between px-4 sticky top-0 z-50'>
          {/* Large screen */}
          <div className='flex items-center gap-4'>
            <h2 className='font-bold hidden md:block'>Vinay K Nangia</h2>
          </div>
          <div className='hidden gap-5 pr-8 md:flex items-center'>
              <Link to='/' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Home</Link>
              <Link to='/blogs' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Blogs</Link>
              <div 
                className='relative'
                onMouseEnter={() => setShowRecommendations(true)}
                onMouseLeave={() => setShowRecommendations(false)}
              >
                <span className='text-[15px] font-medium text-neutral-700 cursor-default'>
                  Recommendations
                </span>
                {/* Recommendations Drawer */}
                {showRecommendations && (
                  <div className='absolute top-full left-1/2 -translate-x-1/2 py-2 w-48 bg-white rounded-md shadow-lg border border-neutral-100'>
                    {recommendationLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={`/recommendations/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className='block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-150'
                        onClick={handleRecommendationClick}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to='/awards' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Awards</Link>
              <Link to='/gallery' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Gallery</Link>
              <Link to='/youtube' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Youtube</Link>
              <Link to='/contact' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Contact</Link>
          </div>
          {/* Small screen */}
          <div className='flex items-center justify-between w-full md:hidden'>
              <h2 className='font-bold'>Vinay K Nangia</h2>
              <div className='flex items-center gap-4'>
                  <button onClick={() => setIsOpen(!isOpen)}>
                      { <AlignLeft />}
                  </button>
              </div>
          </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className='flex justify-between items-center h-14 w-full px-4'>
          <h2 className='font-bold'>Vinay K Nangia</h2>
          {isOpen && <X className='cursor-pointer' onClick={() => setIsOpen(false)} />}
        </div>
        <div className='flex flex-col p-8 gap-6 mt-4'>
            <Link to='/' className='text-lg hover:text-gray-600'>Home</Link>
            <Link to='/blogs' className='text-lg hover:text-gray-600'>Blogs</Link>
            <Link to='/recommendations' className='text-lg hover:text-gray-600'>Recommendations</Link>
            <Link to='/awards' className='text-lg hover:text-gray-600'>Awards</Link>
            <Link to='/gallery' className='text-lg hover:text-gray-600'>Gallery</Link>
            <Link to='/youtube' className='text-lg hover:text-gray-600'>Youtube</Link>

            <Link to='/contact' className='text-lg hover:text-gray-600'>Contact</Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

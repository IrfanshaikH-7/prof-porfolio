import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { img_1 } from '../../assets'
import { recommendationsData } from '../../data/recommendations'

export default function RecommendedOnce() {
  const { slug } = useParams()
  const location = useLocation()
  
  const category = location.pathname.split('/')[2]
  
  const recommendation = recommendationsData[category]?.find(
    item => item.slug === slug
  )

  if (!recommendation) {
    return <div>Recommendation not found</div>
  }

  return (
    <main className='w-full h-full py-24'>
      <div className='max-w-7xl mx-auto flex gap-6 items-center '>
        <div className=' min-w-[300px] max-w-[300px] aspect-[3/4] w-full overflow-hidden rounded-xl shadow-xl '>
          <img src={img_1} alt={recommendation.name} className='w-full h-full object-cover' />
        </div>
        
        <section className='flex flex-col gap-3 '>
        <div>
        <h1 className='text-4xl font-bold'>{recommendation.name}</h1>
          <div className=''>
            <p className='pl-1 text-neutral-600'>{recommendation.designation}</p>
            <p className='pl-1 text-neutral-600'>{recommendation.company}</p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
        <p className='font-bold text-black text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          <p className='text-neutral-800 font-medium text-[15px]'>
          {recommendation.description}
        </p>

        </div>
        
        </section>
      </div>
    </main>
  )
} 
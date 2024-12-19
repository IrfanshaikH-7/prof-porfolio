import React from 'react'
import {img_1} from '../../assets'
import { Section } from 'lucide-react'
export default function FacultyColleagues() {
    const AcademicLeaders = [
        {
            name: "Vinay Nangia",
            designation: "Managing Director",
            company: "Marketing Insight Consultants, NOIDA",
        },
        {
            name: "Vinay Nangia",
            designation: "Managing Director",
            company: "Marketing Insight Consultants, NOIDA",
        },
        {
            name: "Vinay Nangia",
            designation: "Managing Director",
            company: "Marketing Insight Consultants, NOIDA",
        },
        {
            name: "Vinay Nangia",
            designation: "Managing Director",
            company: "Marketing Insight Consultants, NOIDA",
        },
        {
            name: "Vinay Nangia",
            designation: "Managing Director",
            company: "Marketing Insight Consultants, NOIDA",
        },
    ]
  return (
    <main className='w-full h-full  p-4'>
      <div className=' h-full mx-auto flex flex-col items-center justify-center w-fit'>
        <h1 className='text-3xl font-bold'>Academic Leaders</h1>
        <div className='font-semibold text-neutral-500 '>Recommendations</div>
      </div>
      <section className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mt-12 gap-12 max-w-7xl mx-auto my-auto'>
        {AcademicLeaders.map((item,index)=>(
           <article key={index} className='w-full h-full flex flex-col gap-2'>
           <div className=' w-full h-full  overflow-hidden rounded-xl min-h-[300px] max-h-[300px] shadow-xl'>
               <img src={img_1} alt="yes" className='w-full h-full rounded-xl' />
           </div>
           <div className='flex flex-col gap-1'>
               <h1 className='text-xl font-bold'>{item.name}</h1>
               <div className='flex flex-col'>
                   <p className='text-sm text-neutral-500'>{item.designation}</p>
                   <p className='text-sm text-neutral-500'>{item.company}</p>
               </div>
           </div>
       </article>
        ))}
        
      </section>
      <section className='flex justify-between items-center max-w-7xl mx-auto p-8 mt-24 bg-neutral-100 rounded-xl'>
        <a href='/recommendations/academic-leaders' className='text-black'>Academic Leaders</a>
        <a href='/recommendations/students' className='text-black'>Students</a>
        <a href='/recommendations/startups' className='text-black'>Startups</a>
        <a href='/recommendations/scholars-abroad' className='text-black'>Scholars Abroad</a>
        <a href='/recommendations/civil-servants' className='text-black'>Civil Servants</a>
        <a href='/recommendations/business-world' className='text-black'>Business World</a>
        <a href='/recommendations/academic-fraternity' className='text-black'>Academic Fraternity</a>
      </section>

    </main>
  )
} 
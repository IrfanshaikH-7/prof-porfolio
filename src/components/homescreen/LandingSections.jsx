import React from 'react'
import { vinay_nangia, vinay_nangia_2 } from '../../assets'
import { Briefcase, History, Icon } from 'lucide-react'
import { motion } from 'framer-motion';
import NeedAssistant from '../shared/GetInTouch';

export default function LandingSections() {

  const consultancyProjects = [
    {
      title: 'Project 1',
      description: 'World Bank funded project on e-Governance initiatives of Government of Uttaranchal (USD 1 million). As part of team of IIT Roorkee professors which worked as Implementing Agency, was engaged in planning and project management apart from final report writing.',
    },
    {
      title: 'Project 2',
      description: 'Assignment for the International Telecommunication Union (ITU) of Switzerland as a senior expert in Sri Lanka for assisting in modernizing the post offices in Sri Lanka (particularly in the North & North East) for the provision of a number of services, as part and parcel of rehabilitation and reconstruction programme; prefeasibility study.'
,
    },
    {
      title: 'Project 3',
      description: 'UNDP sponsored project for Government of Uttaranchal ‘Pro Poor IT initiatives in Uttaranchal’ (USD 3 Million). Worked on business, commercial and legal aspects of the project.',
    },
    {
      title: 'Project 4',
      description: 'TCIL Bell South Limited (Joint venture of mini-navaratna TCIL and Bell South, a fortune 500 company); (i) International bidding for development of software for Export Credit Guarantee Corporation of Zimbabwe;(ii) Review of Human Resource Practices and review of plans and policies relating to Finance and Capital Structure',
    },
    {
      title: 'Project 5',   
      description: 'VoIP- Current Scenario in India and Road Ahead” study report for INTEL Corporation.'
,
    },
    {
      title: 'Project 6',
      description: 'Government of India and Government of Uttaranchal; Conservation and Management of Nainital Lake and other Lakes in the District of Nainital-Institutional arrangement, financial sustainability and legal aspects.',
    },
    {
      title: 'Project 7',
      description: 'Government of India; Conservation and Management Plan for Dal and Nagin Lakes - Preparation of D.P.R. My contribution was in the area of Design of administrative, financial and legal arrangements for ensuring sustainability of the lake',
    },
    {
      title: 'Project 8',
      description: 'Government of Uttaranchal project funded by Ministry of Home Affairs, Government of India for setting up Citizen Information and Services Centres in five border districts of Uttaranchal. I was involved in all aspects of this project (USD 1 Million)'
,
    },
    {
      title: 'Project 9',
      description: 'Government of Madhya Pradesh; Conservation Plan for River Shipra in Ujjain project (over USD 150000).',
    },
    {
      title: 'Project 10',
      description: 'Government of Uttaranchal; Syllabus for Leveraging the Rich Potential available in Water Resources and Hydropower of State of Uttaranchal project (over USD 200000)',
    },
    {
      title: 'Project 11',
      description: 'Government of Uttaranchal; Pro-Poor e-Governance Initiatives in Uttaranchal project (over USD 800000).',
    },
    {
      title: 'Project 12',
      description: 'Integrated Sewage and Solid Waste Management for abatement of pollution for river KuaKhai, awarded by Govt. of Orissa. I worked on Institutional Development aspects.',
    },
    {
      title: 'Project 13',
      description: 'Academic Audit of University of Petroleum & Energy Studies, Dehradun for 2010-11.',
    },
    {
      title: 'Project 14',
      description: 'Mussourie Dehra Dun Development Authority (MDDA); prepared Pre-feasibility Report for setting up an Inter-State Bus Terminal for Uttaranchal State at Dehra Dun.',
    },
  ]
  const researchProjects = [
    {
      title: 'Project 1',
      description: 'Principal Investigator in a project titled “Students Initiative for Integrated Rural Development” funded by e – Gestalt, Bangalore (2011–2016).',
    },
    {
      title: 'Project 2',
      description: 'Principal Investigator in a project titled ‘YUKTI’- A Business Plan Competition for National Small Industries Corporation (NSIC) funded by NSIC, New Delhi (2010-2011).',
    },
    {
      title: 'Project 3',
      description: 'Investigator in a project titled “Prototype Development and Deployment of VSAT-based Mobile e-Learning Terminals (MeLT)” to the tune of Rs 300 lac (over USD 600000) awarded by Government of India, Ministry of Human Resource Development (MHRD) (2009- 2015).',
    },
    {
      title: 'Project 4',
      description: 'Principal Investigator in a multi institutional and multi-disciplinary project entitled “National Competitiveness in the Knowledge Economy” with IIT Roorkee in the lead and with an outlay of Rs 495 lakh (over USD 1 million) by Government of India, Department of Information Technology in Ministry of Communication and Information Technology (2006-2011).',
    },
    {
      title: 'Project 5',
      description: 'VoIP- Current Scenario in India and Road Ahead” study report for INTEL Corporation.',
    },
    {
      title: 'Project 6',
      description: 'Government of India and Government of Uttaranchal; Conservation and Management of Nainital Lake and other Lakes in the District of Nainital-Institutional arrangement, financial sustainability and legal aspects.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -100,
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4
      }
    }
  };

  return (
    <main className='w-full h-full flex  flex-col max-w-[1400px] mx-auto lg:px-8 px-4 space-y-16'>
      <section className='w-full h-full flex flex-col'>
        <article className='w-full h-full flex flex-col '>
            <section className='flex flex-col lg:flex-row h-full w-full relative'>
            <div className='flex flex-col max-w-2xl gap-3 '>
            <p className='text-sm font-medium pl-2 text-neutral-500  lg:leading-6 leading-normal'>
            He has multi-functional expertise in Banking, Finance, General Management, Education and Institution Building. This includes the experience of raising and deploying financial resources in India and overseas, setting up of new ventures in India, and a new industrial project overseas. A wide range of banking experience covers commercial banking, merchant banking, investment banking, trade finance, project finance, and training. Experience in education includes active participation in the formulation and setting up of MBA and MCA programs during 1998-1999 in IIT Roorkee and BBA and MBA programs in 2019 at NSUT New Delhi.

       </p>
       <p className='text-sm font-medium pl-2 text-neutral-500  lg:leading-6 leading-normal'>
       He has travelled across all five continents for business, training, pleasure and cultural familiarisation. He has worked in rural, semi-urban, and metropolitan areas in government, public and private sectors during his career including having worked in three countries.

       </p>
       <p className='text-sm font-medium pl-2 text-neutral-500  lg:leading-6 leading-normal'>
       Amongst others, he has held the position of Head of the Department in IIT Roorkee thrice, Emeritus Professor at NSUT, Dwarka, New Delhi, Managing Director and CEO of an investment and finance company in Mumbai, Senior Vice President at Essar group in Mumbai, Group Director of a large business and industrial house at Lagos, Nigeria and an international banker at Singapore.


       </p>
       

            </div>
            <div className='flex flex-col h-[80%] min-h-[300px] lg:min-h-[400px] pt-8 lg:pt-0 lg:max-h-[400px] aspect-[4/3] lg:min-w-[400px]  lg:px-8 pb-8 flex-1 overflow-hidden relative'>
                <img src={vinay_nangia_2} alt='vinay_nangia2' className='w-full h-full object-cover rounded-3xl '/>
                <div className='hidden lg:flex flex-col h-8 w-52 bg-white absolute top-12 -left-4 -rotate-45'>

                </div>
            </div>
            </section>
            <p className='text-sm font-medium pl-2 text-neutral-500  lg:leading-6 leading-normal '>
       He was the Principal Investigator of a Rs. 5 crore project "National Competitiveness in Knowledge Economy", awarded by the Ministry of Communications and Information Technology, Government of India. During 2006-2011, he was the Government of India Chair Professor in Knowledge Economy.

       </p>
       
       <p className='text-sm font-medium pl-2 text-neutral-500  lg:leading-6 leading-normal '>
       Professor Nangia is a member of various bodies and boards of several academic and other institutions. He has been a senior expert with the International Telecommunication Union, Switzerland. He is an invited member of the Expert Group on Knowledge Management of Asian Productivity Organisation, Tokyo and he has been a Representative on the Knowledge Management Panel and Corporate Governance Panel of the Bureau of Indian Standards.  He was Government of India nominee on the Council of Management of All India Management Association.  

       </p>
       <p className='text-sm font-medium pl-2 text-neutral-500  lg:leading-6 leading-normal mt-3'>
       He has to his credit large number of articles published in national and international refereed journals.  Seven scholars under his guidance have completed their doctoral research and have been awarded Ph.D. He has authored the books “Masters Speak: Management Education in India” published by Bloomsbury India in 2014 and “driven by information technology Smart Banking – An Introduction” in 2016.


       </p>
       <p className='text-sm font-medium pl-2 text-neutral-500  lg:leading-6 leading-normal mt-3'>
       He has been honoured with the Man of Excellence Award (2022), Glory of India Award (2017), Life Time Achievement in Business Education Award (2015), Shiksha Ratan Puruskar (2014), and Dewang Mehta Business School Award for being “Best Professor in General Management” (2013). 

       </p>
        </article>
      </section>

      {/* consultancy projects */}
      <section className='w-full h-full flex flex-col'>
        <div className=' h-full flex flex-col relative group w-fit mb-4'>
        <div className='w-16 h-1 absolute top-0 left-0 flex bg-black rounded-md flex-col gap-4 group-hover:w-32 transition-all duration-300'/>

        <h2 className='md:text-4xl text-2xl font-bold my-2'>Consultancy Projects</h2>
        <div className='w-16 h-1 flex absolute bottom-0 right-0 bg-black rounded-md flex-col gap-4 group-hover:w-32 transition-all duration-300'/>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='w-full h-full flex flex-col mt-8 space-y-8'
        >
          {consultancyProjects.map((item, index) => (
            <motion.article 
              key={index}
              variants={itemVariants}
              className='w-full h-full flex flex-col'
            >
              <div className='flex items-center gap-4'>
                <Briefcase className='w-6 h-6 p-1 rounded-md bg-neutral-700 text-white'/>
                <div className='w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4'/>
              </div>
              <p className='text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal'>
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* end of consultancy projects */}

      {/* start of research projects */}
      <section className='w-full h-full flex flex-col '>
        <div className=' h-full flex flex-col relative group w-fit mb-4'>
          <div className='w-16 h-1 absolute top-0 left-0 flex bg-black rounded-md flex-col gap-4 group-hover:w-32 transition-all duration-300'/>
          <h2 className='md:text-4xl text-2xl font-bold my-2'>Research Projects</h2>
          <div className='w-16 h-1 flex absolute bottom-0 right-0 bg-black rounded-md flex-col gap-4 group-hover:w-32 transition-all duration-300'/>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='w-full h-full flex flex-col mt-8 space-y-8'
        >
          {researchProjects.map((item, index) => (
            <motion.article 
              key={index}
              variants={itemVariants}
              className='w-full h-full flex flex-col'
            >
              <div className='flex items-center gap-4'>
                <Briefcase className='w-6 h-6 p-1 rounded-md bg-neutral-700 text-white'/>
                <div className='w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4'/>
              </div>
              <p className='text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal'>
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* end of research projects */}
      <NeedAssistant/>

    </main>
  )
}

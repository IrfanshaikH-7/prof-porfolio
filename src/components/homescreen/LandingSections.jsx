import React from 'react'
import { master_speaks, smart_banking, vinay_nangia, vinay_nangia_2, img_1, img_2, img_3, img_4, user } from '../../assets'
import { Briefcase, CalendarDays, History, Icon } from 'lucide-react'
import { motion } from 'framer-motion';
import NeedAssistant from '../shared/GetInTouch';
import Heading from '../shared/Heading';

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
              <img src={vinay_nangia_2} alt='vinay_nangia2' className='w-full h-full object-cover rounded-3xl ' />
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
        <Heading title='Consultancy Projects' />
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
                <Briefcase className='w-6 h-6 p-1 rounded-md bg-neutral-700 text-white' />
                <div className='w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4' />
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
        <Heading title='Research Projects' />
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
                <Briefcase className='w-6 h-6 p-1 rounded-md bg-neutral-700 text-white' />
                <div className='w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4' />
              </div>
              <p className='text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal'>
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* end of research projects */}

      {/* start of Books Section */}
      <section className='w-full h-full flex flex-col '>
        <div className='w-fit mx-auto pt-8 pb-10'>
        <Heading title='Books By Dr. Vinay Kumar Nangia' />
        </div>
        <div className='flex flex-col md:flex-row  items-center gap-14 md:gap-4 max-w-7xl mx-auto'>
          <div className='flex relative'>
          <h3 className='text-2xl font-bold text-neutral-800 pl-11 md:pl-[7.5%] absolute -top-9 md:-top-2.5 -left-10 md:left-0'>Master Speaks</h3>

            <div className='flex flex-col gap-2 overflow-hidden'>
              <img src={master_speaks} alt='master_speaks' className='w-full h-full  md:scale-[0.86] object-contain  ' />
            </div>
          </div>

          <div className='flex relative w-fit bg-slate-3900 '>
          <h3 className='text-2xl font-bold text-neutral-800 pl-11 md:pl-12 absolute -top-9 -left-10'>Smart Banking</h3>
          <div className='flex flex-col gap-2 overflow-hidden'>
              <img src={smart_banking} alt='smart_banking' className='w-full h-full object-contain' />
            </div>

          </div>

        </div>

      </section>
      {/* end of Books Section */}


      {/* start of Blog Section */}
      <section className=' w-full h-full flex flex-col min-[930px]:flex-row py-16 gap-8'>
          <div className='flex flex-1 flex-col gap-8'>
            <h3 className='text-4xl font-bold text-neutral-800 '> <span className='text-neutral-500'>Blog's By </span> <br />Dr. Vinay Kumar Nangia</h3>
            <article className='h-80 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6'>
            <div className='flex gap-1 items-center self-end'>
              <div className='flex flex-col items-start gap-1'>
                <p className='text-sm font-medium text-neutral-500'>
                  Ravi@trixno
                </p>  
                <p className='text-sm font-medium flex items-center gap-1 text-neutral-500'>
                  <CalendarDays className='w-3 h-3 -mt-0.5' />
                  <span className='text-xs font-medium text-neutral-500'>
                    2024-12-18
                  </span>
                </p>
              </div>
              <img src={user} alt='blog_image' className='w-16 h-16 rounded-full object-cover' />
            </div>
            <div>
            <h2 className='text-2xl sm:text-4xl font-bold pb-4 text-neutral-800'>
              Play Vavada on smartphones
              </h2>
              <p className='text-sm sm:text-base font-medium text-neutral-500 line-clamp-5'>
              Millions of gamers know firsthand about the Vavada Online Casino. Once this site gained great popularity among users of gaming entertainment fans. In 2019, an interesting commercial with a musical composition calling to receive large prizes in this online gaming club was shown on television and in the online space. At the same time, the official website of the site https://cosmosryadom.rf/ began working several years before the advertisement. Basic information about the Vavada casino official website:
              </p>
            </div>
            </article>
            <a href='/' className='text-sm hidden min-[930px]:flex font-medium h-24 w-full bg-neutral-800 rounded-md  items-center justify-center text-neutral-200 
            hover:text-neutral-800 hover:bg-neutral-200 border border-neutral-800 hover:border-neutral-800 transition-all duration-300'>
              Explore More Blogs
            </a>
          </div>
          <div className='flex flex-1 flex-col gap-8'>
          <article className='h-80 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6'>
            <div className='flex gap-1 items-center self-end'>
              <div className='flex flex-col items-start gap-1'>
                <p className='text-sm font-medium text-neutral-500'>
                  Ravi@trixno
                </p>  
                <p className='text-sm font-medium flex items-center gap-1 text-neutral-500'>
                  <CalendarDays className='w-3 h-3 -mt-0.5' />
                  <span className='text-xs font-medium text-neutral-500'>
                    2024-12-18
                  </span>
                </p>
              </div>
              <img src={user} alt='blog_image' className='w-16 h-16 rounded-full object-cover' />
            </div>
            <div>
            <h2 className='text-2xl sm:text-4xl font-bold pb-4 text-neutral-800'>
            Greed and Fear
              </h2>
              <p className='text-sm sm:text-base font-medium text-neutral-500 line-clamp-5'>
              Investor behaviour is driven by greed and fear is a well-known saying in the stock markets. Most human actions are driven by one of these two emotions. <br />

Post-World war II, fear receded, as most countries in the world got busy with reconstruction and development. Fear got replaced by hope and optimism. Almost eight decades of peace have been unprecedented.
              </p>
            </div>
             
            </article>
            <article className='h-80 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6'>
            <div className='flex gap-1 items-center self-end'>
              <div className='flex flex-col items-start gap-1'>
                <p className='text-sm font-medium text-neutral-500'>
                  Ravi@trixno
                </p>  
                <p className='text-sm font-medium flex items-center gap-1 text-neutral-500'>
                  <CalendarDays className='w-3 h-3 -mt-0.5' />
                  <span className='text-xs font-medium text-neutral-500'>
                    2024-12-18
                  </span>
                </p>
              </div>
              <img src={user} alt='blog_image' className='w-16 h-16 rounded-full object-cover' />
            </div>
            <div>
            <h2 className='text-2xl sm:text-4xl font-bold pb-4 max-w-xl text-neutral-800'>
            Indian Ethos & Culture and National Education Policy 2020
              </h2>
              <p className='text-sm sm:text-base font-medium text-neutral-500 line-clamp-5'>
              It is heartening to note that National Education Policy has not only recognized the glorious past of ancient India in terms of the contribution of our world-class Indian Universities like Nalanda and Takshshila but picked up the right elements and incorporated the building blocks into the framing of New Education Policy both, at school and University levels. About 15% of entire policy document is devoted to this cause.
              </p>
            </div>
             
            </article>
            <a href='/' className='text-sm flex min-[930px]:hidden font-medium h-24 w-full bg-neutral-800 rounded-md  items-center justify-center text-neutral-200 
            hover:text-neutral-800 hover:bg-neutral-200 border border-neutral-800 hover:border-neutral-800 transition-all duration-300'>
              Explore More Blogs
            </a>
          </div>
      </section>
      {/* end of Blog Section */}


      {/* start of Scroll Gallery */}
      <section className='w-full h-full flex flex-col'>
        <div className='w-fit mx-auto pt-8 pb-10'>
          <Heading title='Gallery' />
        </div>
        <div className='relative overflow-hidden py-8 max-w-[100vw]'>
          <motion.div
            className='flex gap-8 overflow-hidden'
            style={{
              width: 'max-content',
              animation: 'scroll 20s linear infinite',
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* First set of images */}
            <div className='flex gap-8 overflow-hidden'>
              {[img_1, img_2, img_3, img_4].map((img, index) => (
                <motion.div 
                  key={index} 
                  className='md:w-[400px] w-[300px] aspect-[4/3] overflow-hidden rounded-md shrink-0 group'
                >
                  <motion.img 
                    src={img} 
                    alt={`gallery-image-${index + 1}`} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </motion.div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className='flex gap-8 overflow-hidden'>
              {[img_1, img_2, img_3, img_4].map((img, index) => (
                <motion.div 
                  key={index} 
                  className='md:w-[400px] w-[300px] aspect-[4/3] overflow-hidden rounded-md shrink-0 group'
                >
                  <motion.img 
                    src={img} 
                    alt={`gallery-image-${index + 5}`} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* end of Scroll Gallery */}

      {/* need assistant */}
      <NeedAssistant />
      {/* end of need assistant */}

    </main>
  )
}

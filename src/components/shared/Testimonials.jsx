import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: for better looking arrows
import Heading from './Heading';
import { main } from 'framer-motion/client';

const testimonialData = [
    {
        testimony: "For almost two decades I have known Professor Vinay Nangia as a Professor, Head of the Department at IIT Roorkee, Ph.D. Guide, and as Consultant to various projects assigned to IIT Roorkee from UNDP, World Bank, Government of India, State Governments and MNCs. Prof. Nangia has served as a banker in India and abroad, as a top-level business executive in India and overseas and in Education domain as a Professor for a total period of 46 years. In addition to being Head of Department of Management Studies three times, he has been on the boards and councils of various universities and likes of All India Management Association (AIMA) Bureau of Indian Standards (BIS) and Indian Institute of Material Management. He has authored two books, one on Management Education i.e. “Masters Speak” and another on Banking “Smart Banking- an Introduction”. A man with a pleasant disposition, always cheerful, with incomparable enthusiasm and unending energy. Dr. Vinay Nangia is a sweetheart of students who swear by him. He is always available to students of all age groups for any guidance, advice, help, support, and mentoring: be it for higher education, placements, job hunt, preparing CV or preparation for Interviews or career counselling. Students come to him for the choice of courses, programs, colleges, universities, choice of companies, career, and even for preparation for Civil Services exams conducted by UPSC.",
        testimonyBy: "Dr. Nirmaljeet Singh Kalsi IAS (retd)",
        designation: "Former ACS Home PB, MHA GoI, UOR, IIT Delhi, Harvard Kennedy S I Cambridge JBS Chandigarh, Chandigarh"
    },
    {
        testimony: "Prof. Nangia is an embodiment and personification of true professionalism, mentoring, guidance, counselling, enthusiasm, charm, logic, leadership, brilliance, knowledge, and experience and result orientation. If you do not wish to get your capabilities challenged, he is not someone you should be working with. No space for average performers to work with him. There are no sweet pills in his armour. The hall mark of his working style - set very high standards of performance and then make people achieve those. I owe my association and success with academia to him. He transformed an industry professional into a contributor to academia. And I am not the only one - the list is endless. The best time to see him in action is when he is among his students. The success of his students is the fuel to his engine of transforming individuals. Many of us are truly blessed to have him as our mentor. So much to learn every day from him.",
        testimonyBy: "Dr. Lovneesh Chanana",
        designation: "Vice President Government Affairs (Asia Pacific and Japan) SAP New Delhi"
    },
    {
        testimony: "I have known Professor Vinay K Nangia since 2003 when I joined IIT Roorkee as a Faculty. After being a successful banker and a business leader in India and overseas he had a stint of entrepreneurship. In 1998 when he joined IIT Roorkee as a Professor he was instrumental in setting up MBA (1998) and MCA (1999) programs. In 2019 he guided and mentored setting up of BBA MBA & MBA in Innovation, Entrepreneurship and Venture Development programs in NSUT Dwarka, New Delhi as Emeritus Professor. In last 22 years as a Professor he has taught, trained, counselled, coached, guided, advised and mentored thousands of students in the choice of courses, programs, choice of colleges and Universities in India and overseas for higher studies. He conducted number of workshops and sessions for CV and Resume making and Interviews on a regular basis. Students always surrounded him for guidance for higher education, preparation for Civil Services selection and career counselling. He was involved in setting up of Incubation centre in very early stage at IIT Roorkee. Number of students from main campus and Saharanpur campus always looked up to him for validation of ideas, commercial, financial and legal advice and early stage funding. Number of Startups from IIT Roorkee from within and outside campus have been mentored by him in last 15 years. Professor Nangia is a regular Speaker at Faculty Development Programs of Delhi University and many other institutions.",
        testimonyBy: "Professor Santosh Rangnekar",
        designation: "Former Head, Department of Management Studies IIT Roorkee, Uttarakhand"
    }

    
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentIndex]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 200 : -200,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        })
    };

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <main className='flex flex-col h-full w-full'>

<div className='mx-auto w-fit'>
                <Heading title='What They’re Saying' />
            </div>
            <div className="w-full max-w-7xl mx-auto md:px-8 py-8 relative">
           
           <div className="relative bg-white rounded-lg border border-gray-200 shadow-lg md:py-8 px-4 ">
               <div className="relative h-[850px] min-[422px]:h-[700px]  sm:h-[500px] lg:h-[480px]  py-3 overflow-hidden">
                   <AnimatePresence mode="popLayout">
                       <motion.div
                           key={currentIndex}
                           custom={direction}
                           variants={slideVariants}
                           initial="enter"
                           animate="center"
                           exit="exit"
                           transition={{
                               x: { type: "spring", stiffness: 300, damping: 30 },
                               opacity: { duration: 0.2 }
                           }}
                           className="absolute top-0 left-0 right-0"
                       >
                           <div className="h-full overflow-y-auto mb-6 mt-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                               <p className="text-gray-800 w-full md:max-w-3xl mx-auto font-medium text-sm md:text-base">
                                   {testimonialData[currentIndex].testimony}
                               </p>
                           </div>
                           
                           <motion.div 
                               initial={{ opacity: 0, y: 20 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ delay: 0.1, duration: 0.5 }}
                               className="text-center self-end"
                           >
                               <h3 className="text-md min-[422px]:text-xl font-semibold text-gray-900">
                                   {testimonialData[currentIndex].testimonyBy}
                               </h3>
                               <p className="text-gray-600 text-xs min-[422px]:text-sm">
                                   {testimonialData[currentIndex].designation}
                               </p>
                           </motion.div>
                       </motion.div>
                   </AnimatePresence>
               </div>

               
           </div>
           <div className="bottom-6 left-0 hidden md:flex justify-center gap-4">
                   <motion.button 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={handlePrevious}
                       className="px-4 py-2 bg-black absolute bottom-1/2 left-0 text-white rounded-full hover:bg-gray-800 flex items-center gap-2"
                   >
                       <ChevronLeft className="w-5 h-5" />
                   </motion.button>
                   <motion.button 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={handleNext}
                       className="px-4 py-2 bg-black absolute bottom-1/2 right-0 text-white rounded-full hover:bg-gray-800 flex items-center gap-2"
                   >
                       <ChevronRight className="w-5 h-5" />
                   </motion.button>
               </div>
               <div className="absolute -top-0.5 right-0 flex  md:hidden justify-center gap-4">
                   <motion.button 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={handlePrevious}
                       className="px-4 py-2 bg-black  text-white rounded-full hover:bg-gray-800 flex items-center gap-2"
                   >
                       <ChevronLeft className="w-3 h-3" />
                   </motion.button>
                   <motion.button 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={handleNext}
                       className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 flex items-center gap-2"
                   >
                       <ChevronRight className="w-3 h-3" />
                   </motion.button>
               </div>
       </div>
        </main>
       
    );
};

export default Testimonials;

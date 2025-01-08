import React from "react";
import {
  master_speaks,
  smart_banking,
  vinay_nangia,
  vinay_nangia_2,
  img_1,
  img_2,
  img_3,
  img_4,
  user,
  img_01,
  img_02,
  img_03,
  img_04,
  img_05,
  square_self,
  img_07,
  img_08,
  img_09,
  img_10,
  img_29,
  award_icon,
  img_14,
  img_16,
  img_18,
  img_19,
  img_001,
} from "../../assets";
import {
  Briefcase,
  CalendarDays,
  History,
  Icon,
  LucideMedal,
  Medal,
} from "lucide-react";
import { motion } from "framer-motion";
import NeedAssistant from "../shared/GetInTouch";
import Heading from "../shared/Heading";
import Testimonials from "../shared/Testimonials";
import FeaturedVideo from "../shared/FeaturedVideo";
import { Link } from "react-router-dom";
import { homeVideos } from "../../data/youtube";
import { containerVariants, itemVariants } from "../../lib/variants";
import {
  achievements,
  consultancyProjects,
  researchProjects,
} from "../../data/listData";
import { blogs } from "../../data/blogs";
import dayjs from "dayjs";

export default function LandingSections() {
  const formatDate = (dateString) => {
    // Try parsing with different formats
    const formats = ["DD-MM-YY", "DD-MM-YYYY"];
    let parsedDate;

    for (const format of formats) {
      parsedDate = dayjs(dateString, format);
      if (parsedDate.isValid()) {
        return parsedDate.format("DD MMM YYYY");
      }
    }

    // If no format matches, return original string
    return dateString;
  };

  return (
    <main className="w-full h-full flex  flex-col max-w-[1400px] mx-auto lg:px-8 px-4 space-y-16">
      <section className="w-full h-full flex flex-col">
        <article className="w-full h-full flex flex-col ">
          <section className="flex flex-col lg:flex-row h-full w-full relative">
            <div className="flex flex-col max-w-2xl gap-3 ">
              <p className="text-sm font-medium pl-2 text-neutral-500 lg:leading-6 leading-normal text-justify">
                Vinay Kumar Nangia has multi-functional expertise in Banking, Finance, General
                Management, Education and Institution Building. This includes
                experience of raising and deploying financial resources in India
                and overseas, setting up new ventures in India, and a new
                industrial project overseas. A wide range of banking experience
                covers commercial banking, merchant banking, investment banking,
                trade finance, project finance, rural banking, agricultural
                banking, and training. Experience in education includes active
                participation in the formulation and setting up of MBA and MCA
                programs during 1998-1999 in IIT Roorkee and BBA and MBA
                programs in 2019 at NSUT New Delhi.
              </p>
              <p className="text-sm font-medium pl-2 text-neutral-500 lg:leading-6 leading-normal text-justify">
                Vinay Kumar Nangia  has travelled across all five continents for business,
                training, pleasure, and cultural familiarisation. He has worked
                in rural, semi-urban, and metropolitan areas in government,
                public, and private sectors during his career including having
                worked in three countries.
              </p>
              <p className="text-sm font-medium pl-2 text-neutral-500 lg:leading-6 leading-normal text-justify">
                Amongst others, he has held the position of Head of the
                Department in IIT Roorkee thrice, Emeritus Professor at NSUT,
                Dwarka, New Delhi, Managing Director and CEO of an investment
                and finance company in Mumbai, Senior Vice President at Essar
                group in Mumbai, Group Director of a large business and
                industrial house at Lagos, Nigeria and an international banker
                at Singapore.
              </p>
            </div>
            <div className="flex flex-col h-[80%] min-h-[300px] lg:min-h-[400px] pt-8 lg:pt-0 lg:max-h-[400px] aspect-[4/3] lg:min-w-[400px]  lg:px-8 pb-8 flex-1 overflow-hidden relative">
              <img
                src={vinay_nangia_2}
                alt="vinay_nangia2"
                className="w-full h-full object-cover rounded-3xl "
              />
              <div className="hidden lg:flex flex-col h-8 w-52 bg-white absolute top-12 -left-4 -rotate-45"></div>
            </div>
          </section>
          <p className="text-sm font-medium pl-2 text-neutral-500 lg:leading-6 leading-normal text-justify">
            Vinay Kumar Nangia was the Principal Investigator of a Rs. 5 crore project "National
            Competitiveness in Knowledge Economy", awarded by the Ministry of
            Communications and Information Technology, Government of India.
            During 2006-2011, he was the Government of India Chair Professor in
            Knowledge Economy.
          </p>
          <p className="text-sm font-medium pl-2 text-neutral-500 lg:leading-6 leading-normal text-justify">
            Vinay Kumar Nangia  is a member of various bodies and boards of several
            academic and other institutions. He has been a senior expert with
            the International Telecommunication Union, Switzerland. He is an
            invited member of the Expert Group on Knowledge Management of Asian
            Productivity Organisation, Tokyo and he has been a Representative on
            the Knowledge Management Panel and Corporate Governance Panel of the
            Bureau of Indian Standards. He was Government of India nominee on
            the Council of Management of All India Management Association.
          </p>
          <p className="text-sm font-medium pl-2 text-neutral-500 lg:leading-6 leading-normal mt-3 text-justify">
            He has to his credit large number of articles published in national
            and international refereed journals. Seven scholars under his
            guidance have completed their doctoral research and have been
            awarded Ph.D. He has authored the books “Masters Speak: Management
            Education in India” published by Bloomsbury India in 2014 and
            “driven by information technology Smart Banking – An Introduction”
            in 2016.
          </p>
          <p className="text-sm font-medium pl-2 text-neutral-500 lg:leading-6 leading-normal mt-3 text-justify">
            He has been honoured with the Man of Excellence Award (2022), Glory
            of India Award (2017), Life Time Achievement in Business Education
            Award (2015), Shiksha Ratan Puruskar (2014), and Dewang Mehta
            Business School Award for being “Best Professor in General
            Management”(2013).
          </p>
        </article>
      </section>

      {/* start of Achievements Section */}
      <section className="w-full h-full flex flex-col ">
        <div className="w-fit mx-auto pt-8 ">
          <Heading title="Career Highlights" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-full flex flex-col mt-8 space-y-8"
        >
          {achievements.slice(0, 10).map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="w-full h-full flex flex-col"
            >
              <div className="flex items-center gap-4">
                <img
                  src={award_icon}
                  alt="medal"
                  className="w-6 h-6 p-1 rounded-md bg-neutral-700 text-white"
                />
                <div className="w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4" />
              </div>
              <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
                {item.description}
              </p>
            </motion.article>
          ))}
          <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
            <Link
              to="/awards"
              className="text-sm rounded-md bg-black mr-2 py-1 px-2  w-fit font-medium text-neutral-200"
            >
              Explore{" "}
            </Link>
            More Awards and Achievements...
          </p>
        </motion.div>
      </section>
      {/* end of Achievements Section */}

      <Testimonials />

      {/* consultancy projects */}
      <section className="w-full h-full flex flex-col">
        <div className="w-fit mx-auto pt-8 ">
          <Heading title="Consultancy Projects" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-full flex flex-col mt-8 space-y-8"
        >
          {consultancyProjects.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="w-full h-full flex flex-col"
            >
              <div className="flex items-center gap-4">
                <Briefcase className="w-6 h-6 p-1 rounded-md bg-neutral-700 text-white" />
                <div className="w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4" />
              </div>
              <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* end of consultancy projects */}

      {/* start of research projects */}
      <section className="w-full h-full flex flex-col ">
        <div className="w-fit mx-auto pt-8 ">
          <Heading title="Sponsored Research" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-full flex flex-col mt-8 space-y-8"
        >
          {researchProjects.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="w-full h-full flex flex-col"
            >
              <div className="flex items-center gap-4">
                <Briefcase className="w-6 h-6 p-1 rounded-md bg-neutral-700 text-white" />
                <div className="w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4" />
              </div>
              <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* end of research projects */}

      {/* start of Books Section */}
      <section className="w-full h-full flex flex-col ">
        <div className="w-fit mx-auto pt-8 pb-10">
          <Heading title="Books By Dr. Vinay Kumar Nangia" />
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-14 md:gap-4 max-w-7xl mx-auto">
          <div className="flex relative">
            <h3 className="text-2xl font-bold text-neutral-800 pl-11 md:pl-[7.5%] absolute -top-9 md:-top-2.5 -left-10 md:left-0">
              Masters Speaks
            </h3>

            <div className="flex flex-col gap-2 overflow-hidden">
              <img
                src={master_speaks}
                alt="master_speaks"
                className="w-full h-full  md:scale-[0.86] object-contain  "
              />
            </div>
          </div>

          <div className="flex relative w-fit bg-slate-3900 ">
            <h3 className="text-2xl font-bold text-neutral-800 pl-11 md:pl-12 absolute -top-9 -left-10">
              Smart Banking
            </h3>
            <div className="flex flex-col gap-2 overflow-hidden">
              <img
                src={smart_banking}
                alt="smart_banking"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* end of Books Section */}

      {/* start of Blog Section */}
      <section className=" w-full h-full flex flex-col min-[930px]:flex-row py-16 gap-8">
        <div className="flex flex-1 flex-col gap-8">
          <h3 className="text-4xl font-bold text-neutral-800 ">
            {" "}
            <span className="text-neutral-500">Blogs By </span> <br />
            Dr. Vinay Kumar Nangia
          </h3>
          <article className="h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6">
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[0].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-2xl font-bold pb-4 text-neutral-800">
                <Link
                  to={`/blogs/${blogs[0].slug}`}
                  className="hover:underline line-clamp-2"
                >
                  {blogs[0].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500 line-clamp-5">
                {blogs[0].content[0].content}
              </p>
            </div>
          </article>
          <Link
            to="/blogs"
            className="text-sm hidden min-[930px]:flex font-medium h-24 w-full bg-neutral-800 rounded-md  items-center justify-center text-neutral-200 
            hover:text-neutral-800 hover:bg-neutral-200 border border-neutral-800 hover:border-neutral-800 transition-all duration-300"
          >
            Explore More Blogs
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <article className="h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6">
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[1].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl font-bold pb-4 text-neutral-800">
                <Link
                  to={`/blogs/${blogs[1].slug}`}
                  className="hover:underline line-clamp-2"
                >
                  {blogs[1].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500 line-clamp-4">
                {blogs[1].content[0].content}
              </p>
            </div>
          </article>
          <article className="h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6">
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[2].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl font-bold pb-4 text-neutral-800">
                <Link
                  to={`/blogs/${blogs[2].slug}`}
                  className="hover:underline line-clamp-2"
                >
                  {blogs[2].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500 line-clamp-5">
                {blogs[2].content[0].content}
              </p>
            </div>
          </article>
        </div>
        <div className="flex flex-0.5 flex-col gap-8">
          <article className="h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6">
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[3].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl font-bold pb-4 text-neutral-800">
                <Link
                  to={`/blogs/${blogs[3].slug}`}
                  className="hover:underline line-clamp-2"
                >
                  {blogs[3].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500 line-clamp-4">
                {blogs[3].content[0].content}
              </p>
            </div>
          </article>
          <article className="h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6">
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[4].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl font-bold pb-4 max-w-xl text-neutral-800">
                <Link
                  to={`/blogs/${blogs[4].slug}`}
                  className="hover:underline line-clamp-2"
                >
                  {blogs[4].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500 line-clamp-5">
                {blogs[4].content[0].content}
              </p>
            </div>
          </article>
          <Link
            to="/blogs"
            className="text-sm flex min-[930px]:hidden font-medium h-24 w-full bg-neutral-800 rounded-md  items-center justify-center text-neutral-200 
            hover:text-neutral-800 hover:bg-neutral-200 border border-neutral-800 hover:border-neutral-800 transition-all duration-300"
          >
            Explore More Blogs
          </Link>
        </div>
      </section>
      {/* end of Blog Section */}

      {/* start of Scroll Gallery */}
      <section className="w-full h-full flex flex-col">
        <div className="w-fit mx-auto pt-8 pb-10">
          <Heading title="Gallery" />
        </div>
        <div className="relative overflow-hidden py-8 max-w-[100vw]">
          <motion.div
            className="flex gap-8 overflow-hidden"
            style={{
              width: "max-content",
              animation: "scroll 40s linear infinite",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* First set of images */}
            <div className="flex gap-8 overflow-hidden">
              {[
                img_01,
                img_02,
                img_03,
                img_29,
                img_04,
                img_05,
                img_07,
                img_08,
                img_09,
                img_10,
                img_14,
                img_16,
                img_18,
                img_19,
                img_001,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  className="md:w-[400px] w-[300px] aspect-[4/3] overflow-hidden rounded-md shrink-0 group"
                >
                  <motion.img
                    src={img}
                    alt={`gallery-image-${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 overflow-hidden">
              {[
                img_01,
                img_02,
                img_03,
                img_29,
                img_04,
                img_05,
                img_07,
                img_08,
                img_09,
                img_10,
                img_14,
                img_16,
                img_18,
                img_19,
                img_001,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  className="md:w-[400px] w-[300px] aspect-[4/3] overflow-hidden rounded-md shrink-0 group"
                >
                  <motion.img
                    src={img}
                    alt={`gallery-image-${index + 5}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* end of Scroll Gallery */}

      {/* featured video */}
      <FeaturedVideo videos={homeVideos} />
      {/* end of featured video */}

      {/* need assistant */}
      {/* <NeedAssistant /> */}
      {/* end of need assistant */}
    </main>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Awards from './pages/Awards'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Navbar from './components/core/Navbar'
import Footer from './components/core/Footer'
import HomeLayout from './pages/HomeLayout'
// Import recommendation pages
import AcademicLeaders from './pages/recommendations/AcademicLeaders'
import FacultyColleagues from './pages/recommendations/FacultyColleagues'
import AcademicFraternity from './pages/recommendations/AcademicFraternity'
import ScholarsAbroad from './pages/recommendations/ScholarsAbroad'
import Students from './pages/recommendations/Students'
import CivilServants from './pages/recommendations/CivilServants'
import BusinessWorld from './pages/recommendations/BusinessWorld'
import Startups from './pages/recommendations/Startups'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className=''>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/recommendations/academic-leaders" element={<AcademicLeaders />} />
            <Route path="/recommendations/faculty-colleagues" element={<FacultyColleagues />} />
            <Route path="/recommendations/academic-fraternity" element={<AcademicFraternity />} />
            <Route path="/recommendations/scholars-abroad" element={<ScholarsAbroad />} />
            <Route path="/recommendations/students" element={<Students />} />
            <Route path="/recommendations/civil-servants" element={<CivilServants />} />
            <Route path="/recommendations/business-world" element={<BusinessWorld />} />
            <Route path="/recommendations/start-ups" element={<Startups />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

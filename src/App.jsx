import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Awards from './pages/Awards'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Navbar from './components/core/Navbar'
import Footer from './components/core/Footer'
import HomeLayout from './pages/HomeLayout'
// Import recommendation pages

import RecommendedOnce from './pages/recommendations/RecommendedOnce'
import RecommendationCategory from './pages/recommendations/RecommendationCategory'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className=''>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/recommendations/:category" element={<RecommendationCategory />} />
            <Route path="/recommendations/:category/:slug" element={<RecommendedOnce />} />
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

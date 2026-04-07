import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Industries from './pages/Industries'
import About from './pages/About'
import Insights from './pages/Insights'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import ChatBot from './components/ChatBot' // Import the new component

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* Floating Chatbot Component */}
      <ChatBot /> 
    </BrowserRouter>
  )
}
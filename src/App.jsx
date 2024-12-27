import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import Projects from './pages/Projects'
import Arcade from './pages/Arcade'
import ScrollToTop from './components/ScrollToTop'
import BackgroundShapes from './components/BackgroundShapes'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackgroundShapes />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tecnologia" element={<Technology />} />
          <Route path="/historias" element={<Stories />} />
          <Route path="/historias/:slug" element={<StoryDetail />} />
          <Route path="/sobre-mi" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/arcade" element={<Arcade />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App

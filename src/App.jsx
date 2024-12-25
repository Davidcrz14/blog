import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import BackgroundShapes from './components/BackgroundShapes'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import Technology from './pages/Technology'

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
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App

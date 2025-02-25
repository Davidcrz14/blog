import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import BackgroundShapes from './components/BackgroundShapes'
import MusicPlayer from './components/MusicPlayer'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import Arcade from './pages/Arcade'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import Technology from './pages/Technology'

function App() {
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  useEffect(() => {
    // Mostrar el reproductor de música después de un breve retraso
    const timer = setTimeout(() => {
      setShowMusicPlayer(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      {showMusicPlayer && <MusicPlayer />}
    </Router>
  )
}

export default App

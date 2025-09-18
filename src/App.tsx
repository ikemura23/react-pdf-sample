import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Drawer from './components/Drawer'
import PdfViewer from './components/PdfViewer'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <AppHeader onDrawerToggle={handleDrawerToggle} isDrawerOpen={isDrawerOpen} />

      <div className="content">
        <PdfViewer file="/test.pdf" />
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  )
}

export default App

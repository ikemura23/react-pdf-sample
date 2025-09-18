import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import DebugDisplay from './components/DebugDisplay'
import Drawer from './components/Drawer'
import PdfViewer from './components/PdfViewer'
import type { Coordinate } from './types'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [pdfWidth, setPdfWidth] = useState<number | null>(null)
  const [pdfHeight, setPdfHeight] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const [clickX, setClickX] = useState<number | null>(null)
  const [clickY, setClickY] = useState<number | null>(null)
  const [scrollToCoordinates, setScrollToCoordinates] = useState<Coordinate | null>(null)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  const handlePdfLoad = (width: number, height: number, scale: number) => {
    setPdfWidth(width)
    setPdfHeight(height)
    setScale(scale)
  }

  const handlePdfClick = (x: number, y: number) => {
    setClickX(x)
    setClickY(y)
  }

  const handleMenuItemClick = (coordinates: Coordinate) => {
    console.log('メニューアイテムクリック:', coordinates)
    setScrollToCoordinates(coordinates)
  }

  const handleScrollComplete = () => {
    console.log('スクロール完了')
    setScrollToCoordinates(null) // 座標状態をリセット
  }

  return (
    <>
      <AppHeader onDrawerToggle={handleDrawerToggle} isDrawerOpen={isDrawerOpen} />

      <div className="content">
        <PdfViewer
          file="/test.pdf"
          onPdfLoad={handlePdfLoad}
          onPdfClick={handlePdfClick}
          scrollToCoordinates={scrollToCoordinates}
          onScrollComplete={handleScrollComplete}
        />
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        onMenuItemClick={handleMenuItemClick}
      />

      <DebugDisplay
        pdfWidth={pdfWidth}
        pdfHeight={pdfHeight}
        scale={scale}
        clickX={clickX}
        clickY={clickY}
      />
    </>
  )
}

export default App

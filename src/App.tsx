import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import PdfViewer from './components/PdfViewer'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <AppHeader onDrawerToggle={handleDrawerToggle} isDrawerOpen={isDrawerOpen} />

      <div className="content">
        <PdfViewer file="/test.pdf" />
      </div>

      {/* ドロワーの実装は今後追加予定 */}
      {isDrawerOpen && (
        <div className="drawer-overlay">
          <div className="drawer">
            <h2>メニュー</h2>
            <p>ドロワーの内容は今後実装予定です</p>
            <button onClick={handleDrawerToggle}>閉じる</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App

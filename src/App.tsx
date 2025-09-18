import './App.css'
import AppHeader from './components/AppHeader'
import PdfViewer from './components/PdfViewer'

function App() {
  return (
    <>
      <AppHeader />

      <div className="content">
        <PdfViewer file="/test.pdf" />
      </div>
    </>
  )
}

export default App

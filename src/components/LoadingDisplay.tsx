import './LoadingDisplay.css'

interface LoadingDisplayProps {
  progress: number
}

function LoadingDisplay({ progress }: LoadingDisplayProps) {
  return (
    <div className="loading-display">
      <div className="loading-icon">📄</div>
      <h3 className="loading-title">PDF読み込み中...</h3>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="progress-text">{progress}%</p>
    </div>
  )
}

export default LoadingDisplay

import './ErrorDisplay.css'

interface ErrorDisplayProps {
  error: string
  onRetry: () => void
}

function ErrorDisplay({ error, onRetry }: ErrorDisplayProps) {
  return (
    <div className="error-display">
      <div className="error-icon">❌</div>
      <h3 className="error-title">PDF読み込みエラー</h3>
      <p className="error-message">{error}</p>
      <button className="retry-button" onClick={onRetry}>
        再読み込み
      </button>
    </div>
  )
}

export default ErrorDisplay

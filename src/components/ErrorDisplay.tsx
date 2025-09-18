interface ErrorDisplayProps {
  error: string
  onRetry: () => void
}

function ErrorDisplay({ error, onRetry }: ErrorDisplayProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#fee',
        border: '2px solid #fcc',
        borderRadius: '8px',
        margin: '1rem',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>❌</div>
      <h3 style={{ color: '#c33', marginBottom: '0.5rem' }}>PDF読み込みエラー</h3>
      <p style={{ color: '#666', marginBottom: '1rem' }}>{error}</p>
      <button
        onClick={onRetry}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        再読み込み
      </button>
    </div>
  )
}

export default ErrorDisplay

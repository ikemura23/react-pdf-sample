interface LoadingDisplayProps {
  progress: number
}

function LoadingDisplay({ progress }: LoadingDisplayProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📄</div>
      <h3 style={{ marginBottom: '1rem' }}>PDF読み込み中...</h3>
      <div
        style={{
          width: '200px',
          height: '8px',
          backgroundColor: '#e0e0e0',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '0.5rem',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#007bff',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>{progress}%</p>
    </div>
  )
}

export default LoadingDisplay

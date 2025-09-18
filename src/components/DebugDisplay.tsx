import { useState } from 'react'
import './DebugDisplay.css'

interface DebugDisplayProps {
  pdfWidth: number | null
  pdfHeight: number | null
  scale: number
  clickX: number | null
  clickY: number | null
}

function DebugDisplay({ pdfWidth, pdfHeight, scale, clickX, clickY }: DebugDisplayProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed)
  }

  if (isCollapsed) {
    return (
      <div className="debug-display collapsed" onClick={handleToggle}>
        デバッグ表示
      </div>
    )
  }

  return (
    <div className="debug-display expanded" onClick={handleToggle}>
      <div className="debug-title">デバッグ表示</div>
      <div className="debug-content">
        <div className="debug-item">
          <span className="debug-label">PDFサイズ:</span>
          <span className="debug-value">
            {pdfWidth && pdfHeight ? `w:${Math.round(pdfWidth)} × h:${Math.round(pdfHeight)}` : '読み込み中...'}
          </span>
        </div>
        <div className="debug-item">
          <span className="debug-label">スケール:</span>
          <span className="debug-value">{Math.round(scale * 100)}%</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">クリック座標:</span>
          <span className="debug-value">
            {clickX !== null && clickY !== null ? `x:${Math.round(clickX)}, y:${Math.round(clickY)}` : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DebugDisplay

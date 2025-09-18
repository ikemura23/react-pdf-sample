import './Drawer.css'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

function Drawer({ isOpen, onClose }: DrawerProps) {
  if (!isOpen) return null

  // キーボードイベントハンドラーを追加
  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleDrawerKeyDown = (e: React.KeyboardEvent) => {
    // ドロワー内のキーボードイベントは伝播を停止
    e.stopPropagation()
  }

  return (
    <div
      className="drawer-overlay"
      role="dialog"
      onClick={onClose}
      onKeyDown={handleOverlayKeyDown}
      tabIndex={-1}
    >
      <div
        className="drawer"
        role="dialog"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleDrawerKeyDown}
        tabIndex={-1}
      >
        <h2>メニュー</h2>
        <p>ドロワーの内容は今後実装予定です</p>
        <button type="button" onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  )
}

export default Drawer

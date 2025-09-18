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
        <div className="menu-items">
          <h3>配達員</h3>
          <ul>
            <li>はこすけ 矢野 智大</li>
            <li>河野 裕美</li>
            <li>WBC.Plus B-1 水上 伊織</li>
          </ul>
        </div>
        <button type="button" onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  )
}

export default Drawer

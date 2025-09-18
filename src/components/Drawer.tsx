import './Drawer.css'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

function Drawer({ isOpen, onClose }: DrawerProps) {
  if (!isOpen) return null

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <h2>メニュー</h2>
        <p>ドロワーの内容は今後実装予定です</p>
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  )
}

export default Drawer

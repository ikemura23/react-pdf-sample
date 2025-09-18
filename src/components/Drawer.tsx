import './Drawer.css'
import type { Coordinate, MenuItem } from '../types'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  onMenuItemClick?: (coordinates: Coordinate) => void
}

const menuItems: MenuItem[] = [
  { name: 'はこすけ 矢野 智大', coordinates: { x: 1056, y: 693 } },
  { name: '河野 裕美', coordinates: { x: 1001, y: 1701 } },
  { name: 'WBC.Plus B-1 水上 伊織', coordinates: { x: 268, y: 6664 } }
]

function Drawer({ isOpen, onClose, onMenuItemClick }: DrawerProps) {
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

  const handleMenuItemClick = (coordinates: Coordinate) => {
    onMenuItemClick?.(coordinates)
    onClose() // メニューを閉じる
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
            {menuItems.map((item, index) => (
              <li 
                key={index}
                onClick={() => handleMenuItemClick(item.coordinates)}
                style={{ cursor: 'pointer' }}
              >
                {item.name}
              </li>
            ))}
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

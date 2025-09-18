import './DrawerToggleButton.css'

interface DrawerToggleButtonProps {
  onClick?: () => void
  isOpen?: boolean
}

function DrawerToggleButton({ onClick, isOpen = false }: DrawerToggleButtonProps) {
  return (
    <button
      className={`drawer-toggle-btn ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
    >
      <span className="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  )
}

export default DrawerToggleButton

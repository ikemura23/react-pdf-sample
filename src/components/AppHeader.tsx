import './AppHeader.css'
import DrawerToggleButton from './DrawerToggleButton'

interface AppHeaderProps {
  onDrawerToggle?: () => void
  isDrawerOpen?: boolean
}

function AppHeader({ onDrawerToggle, isDrawerOpen = false }: AppHeaderProps) {
  return (
    <div className="app-header">
      <DrawerToggleButton onClick={onDrawerToggle} isOpen={isDrawerOpen} />
      <h1>宅配業務専用地図表示システム</h1>
    </div>
  )
}

export default AppHeader

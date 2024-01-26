import {
  HomeIcon,
  GearIcon,
  LayersIcon,
  AvatarIcon,
  PieChartIcon,
  FileIcon,
  DesktopIcon
} from '@radix-ui/react-icons'
import { cn } from '@renderer/utils'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  { name: 'Products', icon: LayersIcon, path: '/Products' },
  { name: 'Customers', icon: AvatarIcon, path: '/customers' },
  { name: 'Settings', icon: GearIcon, path: '/settings' },
  { name: 'Reports', icon: PieChartIcon, path: '/reports' },
  { name: 'POS', icon: DesktopIcon, path: '/pos' },
  { name: 'Receipts', icon: FileIcon, path: '/receipts' }
]

export const Menu = (): JSX.Element => {
  return (
    <ul className="flex flex-col items-start space-y-4">
      {menuItems.map((item) => (
        <li key={item.name} className="w-full">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-1 p-2 text-[#98989898] text-base font-normal hover:bg-[#292c2d] hover:text-white hover:rounded-sm',
                isActive ? 'text-white' : 'text-[#98989898]'
              )
            }
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

import { ReactNode } from 'react'

type MenuRootProps = {
  children: ReactNode
  mobileMenuMode: boolean
}

type MenuItemProps = {
  children: ReactNode
  isActive?: boolean
}

function MenuRoot({ children, mobileMenuMode }: MenuRootProps) {
  return (
    <nav>
      <ul
        className={`${mobileMenuMode ? 'flex flex-col items-center gap-5' : 'flex items-center'}`}
      >
        {children}
      </ul>
    </nav>
  )
}

function MenuItem({ children, isActive }: MenuItemProps) {
  return (
    <li
      data-active={isActive}
      className="list-none uppercase text-lg px-5 data-[active=true]:text-brown *:hover:text-brown *:transition-colors *:duration-300 *:ease-in"
    >
      {children}
    </li>
  )
}

export const MainMenu = {
  Root: MenuRoot,
  Item: MenuItem,
}

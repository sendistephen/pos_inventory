import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const Sidebar = ({
  children,
  className,
  ...props
}: ComponentProps<'aside'>): JSX.Element => {
  return (
    <aside className={cn('w-64 mt-10 h-[100vh-10px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

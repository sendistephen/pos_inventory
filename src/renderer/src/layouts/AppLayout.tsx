import { cn } from '@renderer/utils'
import { ComponentProps, forwardRef } from 'react'

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<'main'>): JSX.Element => {
  return (
    <main className={cn('flex flex-grow h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)
Content.displayName = 'Content'

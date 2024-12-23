import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: ReactNode
  appearance?: 'primary' | 'secondary'
  size?: 'normal' | 'small'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  appearance = 'primary',
  size = 'normal',
  ...props
}: ButtonProps) {
  const appearanceClass =
    appearance === 'secondary' ? 'bg-brown hover:bg-dark-brown' : 'bg-black hover:bg-brown'
  const sizeClass = size === 'small' ? 'text-sm py-2 px-4' : 'text-lg py-3 px-6'

  return (
    <button
      className={twMerge(
        'inline-block uppercase text-center text-muted transition-colors duration-300 ease-in',
        appearanceClass,
        sizeClass,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

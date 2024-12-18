import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: ReactNode
  appearance?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, appearance = 'primary', ...props }: ButtonProps) {
  const appearanceClass =
    appearance === 'primary' ? 'bg-black hover:bg-brown' : 'bg-brown hover:bg-dark-brown'

  return (
    <button
      className={twMerge(
        appearanceClass,
        'inline-block uppercase text-lg text-center text-muted py-3 px-6 transition-colors duration-300 ease-in',
      )}
      {...props}
    >
      {children}
    </button>
  )
}

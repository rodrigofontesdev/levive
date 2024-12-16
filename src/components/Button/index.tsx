import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="inline-block uppercase text-lg text-muted bg-black hover:bg-brown py-3 px-6 transition-colors duration-300 ease-in"
      {...props}
    >
      {children}
    </button>
  )
}

import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonLinkProps = {
  children: ReactNode
  appearance?: 'primary' | 'secondary'
} & LinkProps

export function ButtonLink({ children, appearance = 'primary', ...props }: ButtonLinkProps) {
  const appearanceClass =
    appearance === 'primary' ? 'bg-black hover:bg-brown' : 'bg-brown hover:bg-dark-brown'

  return (
    <Link
      className={twMerge(
        appearanceClass,
        'inline-block uppercase text-lg text-center text-muted py-3 px-6 transition-colors duration-300 ease-in',
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

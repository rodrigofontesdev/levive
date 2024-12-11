import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type ButtonLinkProps = {
  children: ReactNode
} & LinkProps

export function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className="uppercase text-lg text-muted bg-black hover:bg-brown py-3 px-6 transition-colors duration-300 ease-in"
      {...props}
    >
      {children}
    </Link>
  )
}

import * as Accordion from '@radix-ui/react-accordion'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
  defaultItem?: string
}

type TriggerProps = {
  title: string
}

type ItemProps = {
  children: ReactNode
  title: string
  name: string
}

type ContentProps = {
  children: ReactNode
}

function Root({ children, defaultItem }: RootProps) {
  return (
    <Accordion.Root
      className="w-full flex flex-col gap-5"
      defaultValue={defaultItem}
      type="single"
      collapsible
    >
      {children}
    </Accordion.Root>
  )
}

function Trigger({ title }: TriggerProps) {
  return (
    <Accordion.Trigger className="w-full flex justify-between items-center gap-5 data-[state=open]:pb-5 group">
      <h3 className="text-xl text-left text-muted -tracking-wider">{title}</h3>

      <FontAwesomeIcon
        icon={faChevronDown}
        className="text-muted group-data-[state=open]:rotate-180 transition-transform duration-300 ease-in"
      />
    </Accordion.Trigger>
  )
}

function Item({ children, title, name }: ItemProps) {
  return (
    <Accordion.Item
      value={name}
      className="bg-very-dark-brown border border-brown p-5"
    >
      <Trigger title={title} />

      {children}
    </Accordion.Item>
  )
}

function Content({ children }: ContentProps) {
  return (
    <Accordion.Content className="text-muted border-t border-brown pt-5">
      {children}
    </Accordion.Content>
  )
}

export const Faq = {
  Root: Root,
  Item: Item,
  Content: Content,
}

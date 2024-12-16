import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Accordion from '@radix-ui/react-accordion'

export function Faq() {
  return (
    <Accordion.Root
      className="flex flex-col gap-y-5"
      type="single"
      defaultValue="question-1"
      collapsible
    >
      <Accordion.Item
        value="question-1"
        className="border border-white/50"
      >
        <Accordion.Trigger className="w-full flex justify-between items-center gap-x-5 text-white group p-5">
          <h3 className="text-2xl text-left -tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="group-data-[state=open]:rotate-180 transition-transform duration-300 ease-in"
          />
        </Accordion.Trigger>
        <Accordion.Content className="text-lg text-white p-5 border-t border-white/50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis ratione
          nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel cupiditate a
          eveniet provident modi. Dolore, pariatur.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="question-2"
        className="border border-white/50"
      >
        <Accordion.Trigger className="w-full flex justify-between items-center gap-x-5 text-white group p-5">
          <h3 className="text-2xl text-left -tracking-wider">
            Nulla dapibus leo in aliquam porta?
          </h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="group-data-[state=open]:rotate-180 transition-transform duration-300 ease-in"
          />
        </Accordion.Trigger>
        <Accordion.Content className="text-lg text-white p-5 border-t border-white/50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis ratione
          nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel cupiditate a
          eveniet provident modi. Dolore, pariatur.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="question-3"
        className="border border-white/50"
      >
        <Accordion.Trigger className="w-full flex justify-between items-center gap-x-5 text-white group p-5">
          <h3 className="text-2xl text-left -tracking-wider">
            Maecenas euismod mauris tristique, vehicula nisi a?
          </h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="group-data-[state=open]:rotate-180 transition-transform duration-300 ease-in"
          />
        </Accordion.Trigger>
        <Accordion.Content className="text-lg text-white p-5 border-t border-white/50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis ratione
          nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel cupiditate a
          eveniet provident modi. Dolore, pariatur.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import { createCookieConsent } from './actions'
import { motion } from 'motion/react'

export function CookieDialog() {
  return (
    <Dialog.Root
      modal={false}
      defaultOpen
    >
      <Dialog.Portal>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed left-8 bottom-8 z-[950]"
        >
          <Dialog.Content
            className="w-[90%] max-w-md bg-white p-5 shadow-lg focus:outline-none"
            onEscapeKeyDown={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <Dialog.Title className="uppercase text-base font-bold">
              Este website utiliza cookies
            </Dialog.Title>
            <Dialog.Description className="mt-3 mb-5 text-base leading-normal">
              Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência,
              personalizar publicidade e recomendar conteúdo.
            </Dialog.Description>
            <Dialog.Close asChild>
              <Button
                size="small"
                onClick={() => createCookieConsent()}
              >
                Continuar navegando
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </motion.div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

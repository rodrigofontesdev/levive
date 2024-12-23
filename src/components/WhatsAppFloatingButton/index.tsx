'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { clickToChat } from '@/helpers/app'

import whatsappImage from '@/assets/whatsapp-glyph.svg'

export function WhatsAppFloatingButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed right-8 bottom-8 z-50"
    >
      <div className="w-20 h-20 relative rounded-full group">
        <div className="animate-ping group-hover:animate-none absolute top-3 left-3 w-14 h-14 bg-[#25D366] rounded-full opacity-75" />
        <div className="flex justify-center items-center relative rounded-full w-20 h-20 bg-[#25D366] group-hover:brightness-90 transition-all duration-300 ease-in">
          <Link
            href={clickToChat()}
            target="_blank"
            role="button"
            aria-label="Iniciar atendimento no WhatsApp"
            className="p-4"
          >
            <Image
              src={whatsappImage}
              alt=""
              aria-hidden={true}
              className="w-10 h-10"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

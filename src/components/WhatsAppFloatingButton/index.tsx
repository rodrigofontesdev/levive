import Image from 'next/image'
import Link from 'next/link'

import whatsappImage from '@/assets/whatsapp-glyph.svg'

const phoneNumber = '5594991331618'
const message =
  'Olá! 😊 Tenho muito interesse em conhecer a clínica e gostaria de tirar algumas dúvidas antes de agendar uma consulta.'
const chatUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed right-5 bottom-5 z-50">
      <div className="w-20 h-20 relative rounded-full group">
        <div className="animate-ping group-hover:animate-none absolute top-3 left-3 w-14 h-14 bg-[#25D366] rounded-full opacity-75" />
        <div className="flex justify-center items-center relative rounded-full w-20 h-20 bg-[#25D366] group-hover:brightness-90 transition-all duration-300 ease-in">
          <Link
            href={chatUrl}
            target="_blank"
            role="button"
            aria-label="Começar atendimento no WhatsApp"
            className="p-4"
          >
            <Image
              src={whatsappImage}
              alt=""
              width={40}
              height={40}
              aria-hidden={true}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

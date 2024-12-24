import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import submarkImage from '@/assets/levive-submark-brown.svg'

export function Footer() {
  return (
    <footer className="bg-[#12100D] p-5 pt-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-14 border-b border-brown">
          <div className="w-12">
            <Link href="/">
              <Image
                src={submarkImage}
                alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
                unoptimized
              />
            </Link>
          </div>

          <div className="flex gap-5">
            <Link
              href={`${process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE}`}
              className="text-brown hover:text-dark-brown transition-colors duration-300 ease-in"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 py-14">
          <div className="w-full md:w-1/3">
            <h2 className="text-xl text-muted font-bold -tracking-wider pb-4">Políticas</h2>

            <ul className="flex flex-col gap-y-2">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-muted hover:underline"
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-cookies"
                  className="text-muted hover:underline"
                >
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="text-muted hover:underline"
                >
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-xl text-muted font-bold -tracking-wider pb-4">Contatos</h2>

            <ul className="flex flex-col gap-y-2">
              <li>
                <Link
                  href="mailto:contato@clinicalevive.com"
                  className="text-muted hover:underline"
                >
                  E-mail: contato@clinicalevive.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:94991331618"
                  className="text-muted hover:underline"
                >
                  Telefone: (94) 99133-1618
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-xl text-muted font-bold -tracking-wider pb-4">Endereço</h2>

            <p className="text-muted">
              Rua C, 549, Cidade Nova
              <br />
              Parauapebas, Pará, Brasil, 68515-000
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-5">
          <p className="text-muted">&copy; {`${new Date().getFullYear()} Clínica Levive`}</p>
          <p className="text-muted">
            Desenvolvido por:{' '}
            <Link
              href="https://ainternetgroup.com"
              target="_blank"
              className="hover:underline"
            >
              A Internet Group
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

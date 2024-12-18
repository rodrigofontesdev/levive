import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import logoImage from '@/assets/logo.svg'

export function Footer() {
  return (
    <footer className="bg-black p-5 pt-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between py-14 border-b border-white">
          <Link href="/">
            <Image
              src={logoImage}
              alt="Clínica Levive"
              width={186}
              height={40}
            />
          </Link>

          <div className="flex gap-5">
            <Link
              href={`${process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE}`}
              className="text-white"
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
            <h2 className="text-xl text-white font-bold -tracking-wider pb-4">Políticas</h2>

            <ul className="flex flex-col gap-y-2">
              <li className="text-white">
                <Link
                  href="/politica-de-privacidade"
                  className="hover:underline"
                >
                  Política de privacidade
                </Link>
              </li>
              <li className="text-white">
                <Link
                  href="/politica-de-cookies"
                  className="hover:underline"
                >
                  Política de cookies
                </Link>
              </li>
              <li className="text-white">
                <Link
                  href="/termos-de-uso"
                  className="hover:underline"
                >
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-xl text-white font-bold -tracking-wider pb-4">Contatos</h2>

            <ul className="flex flex-col gap-y-2">
              <li className="text-white">
                <Link
                  href="mailto:contato@clinicalevive.com"
                  className="hover:underline"
                >
                  E-mail: contato@clinicalevive.com
                </Link>
              </li>
              <li className="text-white">
                <Link
                  href="tel:94991331618"
                  className="hover:underline"
                >
                  Telefone: (94) 99133-1618
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-xl text-white font-bold -tracking-wider pb-4">Endereço</h2>

            <p className="text-white">
              Rua C, 538, Cidade Nova
              <br />
              Parauapebas, Pará, Brasil, 68515-000
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-5">
          <p className="text-white">
            &copy; {`${new Date().getFullYear()} Clínica Levive. Todos os direitos reservados.`}
          </p>
          <p className="text-white">
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

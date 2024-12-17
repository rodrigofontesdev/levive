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
              href="#"
              className="text-white"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
              />
            </Link>
          </div>
        </div>

        <div className="flex gap-20 py-14">
          <div className="w-1/3">
            <h2 className="text-xl text-white font-bold -tracking-wider pb-4">Políticas</h2>

            <ul className="flex flex-col gap-y-2">
              <li className="text-white">
                <Link href="#">Política de privacidade</Link>
              </li>
              <li className="text-white">
                <Link href="#">Política de cookies</Link>
              </li>
              <li className="text-white">
                <Link href="#">Termos de uso</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/3">
            <h2 className="text-xl text-white font-bold -tracking-wider pb-4">Contatos</h2>

            <ul className="flex flex-col gap-y-2">
              <li className="text-white">
                <Link href="#">E-mail: clinicalevive@gmail.com</Link>
              </li>
              <li className="text-white">
                <Link href="#">Telefone: (94) 99133-1618</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/3">
            <h2 className="text-xl text-white font-bold -tracking-wider pb-4">Endereço</h2>

            <p className="text-white">
              Rua C, 538, Cidade Nova
              <br />
              Parauapebas, Pará, Brasil, 68515-000
            </p>
          </div>
        </div>

        <div className="text-white text-center">
          &copy; {`${new Date().getFullYear()} Clínica Levive. Todos os direitos reservados.`}
        </div>
      </div>
    </footer>
  )
}

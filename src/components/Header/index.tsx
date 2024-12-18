import Image from 'next/image'
import Link from 'next/link'
import { MainMenu } from '@/components/MainMenu'
import { ButtonLink } from '../ButtonLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logoImage from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-muted flex items-center h-[70px] py-2 px-5">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center gap-5">
        <Link href="/">
          <Image
            src={logoImage}
            alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
            width={186}
            height={40}
          />
        </Link>

        <div className="hidden xl:flex items-center gap-10">
          <MainMenu.Root>
            <MainMenu.Item isActive>
              <Link href="/#home">Home</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="/#sobre">Sobre</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="/#equipe">Equipe</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="/#especialidades">Especialidades</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="/#blog">Blog</Link>
            </MainMenu.Item>
          </MainMenu.Root>

          <ButtonLink
            href="/#contato"
            appearance="secondary"
          >
            Fale conosco
          </ButtonLink>
        </div>

        <div className="xl:hidden">
          <button aria-label="Abrir menu">
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

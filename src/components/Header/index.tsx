import Image from 'next/image'
import Link from 'next/link'
import { MainMenu } from '@/components/MainMenu'
import { ButtonLink } from '../ButtonLink'

import logoImage from '@/assets/logo.svg'

export function Header() {
  return (
    <header className="py-2 px-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-5">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Clínica Levive"
            width={186}
            height={40}
          />
        </Link>

        <div className="flex items-center gap-10">
          <MainMenu.Root>
            <MainMenu.Item isActive>
              <Link href="#">Home</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="#">Sobre</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="#">Equipe</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="#">Especialidades</Link>
            </MainMenu.Item>
            <MainMenu.Item>
              <Link href="#">Blog</Link>
            </MainMenu.Item>
          </MainMenu.Root>

          <ButtonLink href="#">Fale conosco</ButtonLink>
        </div>
      </div>
    </header>
  )
}

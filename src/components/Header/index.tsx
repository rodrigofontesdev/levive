'use client'

import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { MainMenu } from '@/components/MainMenu'
import { ButtonLink } from '../ButtonLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useStickyHeader } from './useStickyHeader'
import { useOnePageNavigation } from '../MainMenu/useOnePageNavigation'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import logoDarkImage from '@/assets/logo-dark.svg'

export function Header() {
  const { isSticky } = useStickyHeader({ elementId: 'main-header' })
  const { handlePageSectionChange, pageSectionId } = useOnePageNavigation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomeLinkActive = pathname === '/' && (pageSectionId === '' || pageSectionId === 'home')

  useEffect(
    function shouldCloseMobileMenuOnPageSectionChange() {
      setIsMobileMenuOpen(false)
    },
    [pageSectionId],
  )

  return (
    <header
      id="main-header"
      className="h-[76px]"
    >
      <div
        className={twMerge(
          'w-full bg-muted flex items-center py-3 px-5',
          isSticky && 'fixed top-0 z-[100] shadow-[0_12px_18px_-9px_rgba(23,19,16,0.20)]',
        )}
      >
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center gap-5">
          <div className="w-56">
            <Link
              href="/"
              onClick={() => handlePageSectionChange('')}
            >
              <Image
                src={logoDarkImage}
                alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
                unoptimized
              />
            </Link>
          </div>

          <div
            className={twMerge(
              'absolute xl:relative top-[65px] xl:top-auto right-0 xl:right-auto left-0 xl:left-auto z-[100] xl:z-auto flex flex-col xl:flex-row items-center gap-5 xl:gap-10 transition-colors duration-300 ease-in',
              isMobileMenuOpen
                ? 'bg-muted opacity-100 py-8 shadow-[0_12px_18px_-9px_rgba(23,19,16,0.20)]'
                : 'invisible xl:visible origin-top scale-0 xl:scale-100',
            )}
          >
            <MainMenu.Root mobileMenuMode={isMobileMenuOpen}>
              <MainMenu.Item isActive={isHomeLinkActive}>
                <Link
                  href="/#home"
                  onClick={() => handlePageSectionChange('home')}
                  scroll={false}
                >
                  Home
                </Link>
              </MainMenu.Item>
              <MainMenu.Item isActive={pageSectionId === 'sobre'}>
                <Link
                  href="/#sobre"
                  onClick={() => handlePageSectionChange('sobre')}
                  scroll={false}
                >
                  Sobre
                </Link>
              </MainMenu.Item>
              <MainMenu.Item isActive={pageSectionId === 'equipe'}>
                <Link
                  href="/#equipe"
                  onClick={() => handlePageSectionChange('equipe')}
                  scroll={false}
                >
                  Equipe
                </Link>
              </MainMenu.Item>
              <MainMenu.Item isActive={pageSectionId === 'especialidades'}>
                <Link
                  href="/#especialidades"
                  onClick={() => handlePageSectionChange('especialidades')}
                  scroll={false}
                >
                  Especialidades
                </Link>
              </MainMenu.Item>
              <MainMenu.Item isActive={pageSectionId === 'blog'}>
                <Link
                  href="/#blog"
                  onClick={() => handlePageSectionChange('blog')}
                  scroll={false}
                >
                  Blog
                </Link>
              </MainMenu.Item>
            </MainMenu.Root>

            <ButtonLink
              href="/#contato"
              appearance="secondary"
              onClick={() => handlePageSectionChange('contato')}
              scroll={false}
            >
              Fale conosco
            </ButtonLink>
          </div>

          <button
            aria-label="Abrir menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block xl:hidden"
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                size="2xl"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

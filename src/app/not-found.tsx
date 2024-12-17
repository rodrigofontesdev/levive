import { ButtonLink } from '@/components/ButtonLink'

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="max-w-screen-xl mx-auto py-32 px-5">
          <h1 className="uppercase text-[10rem] text-center font-bold mb-5">404</h1>
          <h2 className="uppercase text-4xl text-center mb-10">Página não encontrada</h2>

          <p className="text-center mb-10">
            A página que você está procurando não existe ou pode ter sido removida temporariamente.
          </p>

          <div className="text-center">
            <ButtonLink href="/">Página Inicial</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}

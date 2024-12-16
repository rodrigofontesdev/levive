import { ButtonLink } from '@/components/ButtonLink'

export function CallToAction() {
  return (
    <section className="bg-black/20 py-20 px-5">
      <div className="max-w-screen-sm mx-auto">
        <h2 className="uppercase text-5xl text-center leading-tight -tracking-wider mb-10">
          Venha viver a <br />
          experiência Levive
        </h2>
        <p className="text-xl text-center font-light mb-10">
          Se você deseja alcançar uma transformação natural e personalizada, agende sua consulta e
          inicie sua jornada rumo a uma vida mais saudável.
        </p>

        <div className="text-center">
          <ButtonLink href="#">Agendar consulta</ButtonLink>
        </div>
      </div>
    </section>
  )
}

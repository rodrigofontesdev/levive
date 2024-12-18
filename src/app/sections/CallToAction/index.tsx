import { ButtonLink } from '@/components/ButtonLink'

const phoneNumber = '5594991331618'
const message =
  'Olá! 😊 Tenho muito interesse em conhecer a clínica e gostaria de agendar uma avaliação para começar a minha jornada de transformação.'
const chatUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

export function CallToAction() {
  return (
    <section className="bg-[#AFA599] py-20 px-5">
      <div className="max-w-screen-sm mx-auto">
        <h2 className="uppercase text-4xl sm:text-5xl text-center leading-tight -tracking-wider mb-10">
          Venha viver a <br />
          experiência Levive
        </h2>
        <p className="text-xl text-center mb-10">
          Se você deseja alcançar uma transformação natural e personalizada, agende sua consulta e
          inicie sua jornada rumo a uma vida mais saudável.
        </p>

        <div className="text-center">
          <ButtonLink href={chatUrl}>Agendar consulta</ButtonLink>
        </div>
      </div>
    </section>
  )
}

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Tailwind,
  Text,
} from '@react-email/components'

type ContactUsEmailProps = {
  name: string
  phone: string
  message: string
}

export default function ContactUsEmail({ name, phone, message }: ContactUsEmailProps) {
  return (
    <Html lang="pt-BR">
      <Head />

      <Tailwind>
        <Body className="font-sans">
          <Container>
            <Heading
              as="h2"
              className="text-lg"
            >
              Olá,
            </Heading>

            <Text>
              Meu nome é {name} e estou enviando essa mensagem através do formulário de contato do
              site.
            </Text>

            <Text className="font-bold">Mensagem:</Text>
            <Text>{message}</Text>
            <Text>Telefone para contato: {phone}</Text>

            <Hr className="mt-10" />

            <Text>
              Este e-mail foi enviado de um formulário de contato em Clínica Levive (
              <Link href="https://clinicalevive.com">https://clinicalevive.com</Link>
              ).
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

import { InputGroup } from '@/components/InputGroup'
import { Button } from '@/components/Button'

export function ContactForm() {
  return (
    <form className="flex flex-col justify-start gap-5">
      <InputGroup.Root>
        <InputGroup.Label
          htmlFor="your_name"
          text="Seu nome"
        />
        <InputGroup.Input
          type="text"
          id="your_name"
          name="your_name"
          placeholder="Seu nome"
          required
        />
      </InputGroup.Root>

      <div className="flex gap-5">
        <InputGroup.Root>
          <InputGroup.Label
            htmlFor="your_mail"
            text="Seu melhor e-mail"
          />
          <InputGroup.Input
            type="email"
            id="your_mail"
            name="your_mail"
            placeholder="Seu melhor e-mail"
            required
          />
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Label
            htmlFor="your_phone"
            text="Seu telefone"
          />
          <InputGroup.Input
            type="tel"
            id="your_phone"
            name="your_phone"
            placeholder="Seu telefone"
            required
          />
        </InputGroup.Root>
      </div>

      <InputGroup.Root>
        <InputGroup.Label
          htmlFor="your_message"
          text="Mensagem"
        />
        <InputGroup.TextArea
          id="your_message"
          name="your_message"
          placeholder="Descreva para nós o assunto que você deseja tratar."
          rows={4}
        />
      </InputGroup.Root>

      <Button type="submit">Enviar mensagem</Button>
    </form>
  )
}

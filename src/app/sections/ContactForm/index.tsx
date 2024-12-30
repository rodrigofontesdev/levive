import { Button } from '@/components/Button'
import { InputGroup } from '@/components/InputGroup'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'
import { useContactForm } from './useContactForm'

export function ContactForm() {
  const {
    handleContactForm,
    isMailSentSuccessfully,
    register,
    formState: { errors, isSubmitting, isSubmitted },
  } = useContactForm()

  return (
    <>
      {isSubmitted && (
        <div
          className={twMerge(
            'border py-3 px-5 mb-5 opacity-100 transition-opacity duration-300 ease-in',
            isMailSentSuccessfully ? 'border-green-600 bg-green-950' : 'border-red-600 bg-red-950',
          )}
        >
          <p
            className={twMerge(isMailSentSuccessfully ? 'text-green-300' : 'text-red-300')}
            role="alert"
          >
            {isMailSentSuccessfully
              ? 'A sua mensagem foi enviada com sucesso.'
              : 'Ocorreu um erro ao tentar enviar a sua mensagem.'}
          </p>
        </div>
      )}

      <form
        className="flex flex-col justify-start gap-5"
        onSubmit={handleContactForm}
        noValidate
      >
        <InputGroup.Root>
          <InputGroup.Label
            htmlFor="name"
            text="Seu nome"
          />
          <InputGroup.Input
            type="text"
            id="name"
            placeholder="Seu nome"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name')}
          />
          {errors.name && <InputGroup.Error message={errors.name?.message} />}
        </InputGroup.Root>

        <div className="flex flex-col sm:flex-row gap-5">
          <InputGroup.Root>
            <InputGroup.Label
              htmlFor="email"
              text="Seu melhor e-mail"
            />
            <InputGroup.Input
              type="email"
              id="email"
              placeholder="Seu melhor e-mail"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email')}
            />
            {errors.email && <InputGroup.Error message={errors.email?.message} />}
          </InputGroup.Root>

          <InputGroup.Root>
            <InputGroup.Label
              htmlFor="phone"
              text="Seu telefone"
            />
            <InputGroup.Input
              type="tel"
              id="phone"
              placeholder="Seu telefone"
              aria-invalid={errors.phone ? 'true' : 'false'}
              {...register('phone')}
            />
            {errors.phone && <InputGroup.Error message={errors.phone?.message} />}
          </InputGroup.Root>
        </div>

        <InputGroup.Root>
          <InputGroup.Label
            htmlFor="message"
            text="Mensagem"
          />
          <InputGroup.TextArea
            id="message"
            placeholder="Descreva o assunto que você deseja tratar..."
            rows={4}
            aria-invalid={errors.message ? 'true' : 'false'}
            {...register('message')}
          />
          {errors.message && <InputGroup.Error message={errors.message?.message} />}
        </InputGroup.Root>

        <Button
          type="submit"
          appearance="secondary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <FontAwesomeIcon
              icon={faSpinner}
              size="lg"
              title={isSubmitting ? 'Enviando mensagem...' : ''}
              spin
            />
          ) : (
            'Enviar mensagem'
          )}
        </Button>
      </form>
    </>
  )
}

import ContactUsEmail from '@/emails/contact-us'
import { zodResolver } from '@hookform/resolvers/zod'
import { render } from '@react-email/components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { mailer } from './mailer'

const contactUsSchema = z.object({
  name: z.string().trim().min(1, { message: 'O campo nome é obrigatório.' }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: 'O campo e-mail é obrigatório.' })
    .email({ message: 'O e-mail é inválido.' }),
  phone: z
    .string()
    .min(1, { message: 'O campo telefone é obrigatório.' })
    .regex(/^[0-9]{10,11}$/i, {
      message: 'O telefone é inválido, use apenas números.',
    }),
  message: z.string().trim().min(1, { message: 'O campo mensagem é obrigatório.' }),
})

type ContactUs = z.infer<typeof contactUsSchema>

export function useContactForm() {
  const [isMailSentSuccessfully, setIsMailSentSuccessfully] = useState(false)
  const { handleSubmit, reset, ...methods } = useForm<ContactUs>({
    mode: 'onSubmit',
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function sendMessage(data: ContactUs) {
    try {
      const template = (
        <ContactUsEmail
          name={data.name}
          phone={data.phone}
          message={data.message}
        />
      )

      const htmlTemplate = await render(template, { pretty: true })
      const plainTextTemplate = await render(template, { plainText: true })

      await mailer({
        from: { name: data.name, address: data.email },
        to: `${process.env.NEXT_PUBLIC_EMAIL}`,
        subject: `Nova Mensagem Recebida - ${process.env.NEXT_PUBLIC_APP_NAME}`,
        html: htmlTemplate,
        plainText: plainTextTemplate,
      })

      setIsMailSentSuccessfully(true)
      reset()
    } catch {
      setIsMailSentSuccessfully(false)
    }
  }

  const handleContactForm = handleSubmit(sendMessage)

  return { handleContactForm, isMailSentSuccessfully, ...methods }
}

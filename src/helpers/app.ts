export function clickToChat(
  phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER,
  defaultMessage = `Olá! 😊 Tenho muito interesse em conhecer a clínica e gostaria de agendar uma avaliação para começar a minha jornada de transformação.`,
) {
  const baseurl = 'https://api.whatsapp.com/send'
  const phone = phoneNumber
  const text = defaultMessage

  return encodeURI(`${baseurl}?phone=${phone}&text=${text}`)
}

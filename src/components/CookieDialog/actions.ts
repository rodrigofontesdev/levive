'use server'

import dayjs from 'dayjs'
import { cookies } from 'next/headers'

export async function createCookieConsent() {
  const cookieStore = await cookies()
  const expiresDate = dayjs().add(1, 'year').toDate()

  cookieStore.set({
    name: 'levive_cookie_consent',
    value: 'true',
    secure: true,
    httpOnly: true,
    path: '/',
    expires: expiresDate,
  })
}

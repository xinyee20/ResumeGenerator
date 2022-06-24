import React, { FC, memo } from 'react'
import { SmallComopent } from '../SmallComopent'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

export const HomeView: FC = memo(() => {
  const { t } = useTranslation()

  const switchLang = (lang: string): void => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <button onClick={() => switchLang('ja')}>Japanese</button>
      <button onClick={() => switchLang('en')}>English</button>
      <h1>{t('header.title')}</h1>
      <SmallComopent />
      <SmallComopent />
      <SmallComopent />
      <SmallComopent />
    </>
  )
})

HomeView.displayName = 'HomeView'

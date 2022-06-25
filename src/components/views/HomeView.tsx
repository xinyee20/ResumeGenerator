import React, { FC, memo } from 'react'
import { SmallComponent } from '../SmallComponent'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Link } from 'react-router-dom'
import { CustomButton } from '../CustomButton'

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
      <SmallComponent />
      <SmallComponent />
      <SmallComponent />
      <SmallComponent />
      <Link to="/form" style={{ textDecoration: 'none' }}>
        <CustomButton text={'Fill Form'} type="secondary"></CustomButton>
      </Link>
      <Link to="/form" style={{ textDecoration: 'none' }}>
        <CustomButton text={'Fill Form'} type="primary"></CustomButton>
      </Link>
    </>
  )
})

HomeView.displayName = 'HomeView'

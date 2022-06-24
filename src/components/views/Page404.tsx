import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

export const Page404: FC = memo(() => {
  const { t } = useTranslation()
  return <h2>{t('notfound')}</h2>
})

Page404.displayName = 'Page404'

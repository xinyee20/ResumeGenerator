import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

export const SmallComopent: FC = memo(() => {
  const { t } = useTranslation()
  return <h1>{t('header.sample')}</h1>
})

SmallComopent.displayName = 'SmallComopent'

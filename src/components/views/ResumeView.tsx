import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

export const ResumeView: FC = memo(() => {
  const { t } = useTranslation()
  return <div>{t('Generated Resume')}</div>
})

ResumeView.displayName = 'ResumeView'

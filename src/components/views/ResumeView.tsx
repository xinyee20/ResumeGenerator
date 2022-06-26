import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TemplateOne } from '../TemplateOne'

export const ResumeView: FC = memo(() => {
  const { t } = useTranslation()
  return <div></div>
})

ResumeView.displayName = 'ResumeView'

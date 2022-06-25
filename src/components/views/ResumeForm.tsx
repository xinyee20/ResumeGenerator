import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const ResumeForm: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('Resume Form')}</div>
      <Link to="/resume">
        <button>Create Resume</button>
      </Link>
    </>
  )
})

ResumeForm.displayName = 'ResumeForm'

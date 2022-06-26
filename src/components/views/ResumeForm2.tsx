import React, { FC, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form'
import { TextField, Button, Container, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { WorkHistory } from '@/types/WorkHistroy'
import { Education } from '@/types/Education'
import { ReactElement } from 'react-markdown/lib/react-markdown'

interface IFormInput {
  skills: string[]
  workhistory: WorkHistory[]
  education: Education[]
}

export const ResumeForm2: FC = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Container maxWidth="sm" style={{ paddingBottom: 30 }}>
        <h1>{t('form.title')}</h1>
        <p>{t('form.desc')}</p>
      </Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="sm" style={{ marginBottom: 30 }}>
          <Button variant="contained" type="submit">
            {t('form.button.submit')}
          </Button>
        </Container>
      </form>
    </>
  )
}

ResumeForm2.displayName = 'ResumeForm2'

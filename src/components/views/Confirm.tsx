import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { TextField, Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type IFormInput = {
  firstName: string
  lastName: string
  address: string
  phoneNumber: string
  email: string
  skills: string
  summary: string
  workhistory: string
  education: string
}

export const Confirm: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Container maxWidth="sm" style={{ paddingBottom: 30 }}>
        <h1>確認画面</h1>
      </Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="sm" style={{ paddingBottom: 30 }}></Container>
      </form>
    </>
  )
}

Confirm.displayName = 'Confirm'

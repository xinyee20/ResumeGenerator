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
  summary: string
}

export const ResumeForm: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    Object.keys(data).map((key) => {
      const value: string = data[key as keyof IFormInput] as string
      sessionStorage.setItem(key, value)
    })
    navigate('/form2', { replace: true })
  }

  return (
    <>
      <Container maxWidth="sm" style={{ paddingBottom: 30 }}>
        <h1>{t('form.title')}</h1>
        <p>{t('form.desc')}</p>
      </Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
          <label htmlFor="firstName" style={{ display: 'block' }}>
            {t('form.inputs.firstName')}
          </label>
          <TextField
            error={!errors.firstName ? false : true}
            id="firstName"
            label={t('form.placeholder.firstName')}
            variant="outlined"
            fullWidth
            {...register('firstName', { required: '名前は必須です' })}
            value={sessionStorage.getItem('firstName')}
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => (
              <small style={{ color: 'red' }}>{message}</small>
            )}
          />
        </Container>
        <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
          <label htmlFor="lastName" style={{ display: 'block' }}>
            {t('form.inputs.lastName')}
          </label>
          <TextField
            error={!errors.lastName ? false : true}
            id="lastName"
            label={t('form.placeholder.lastName')}
            variant="outlined"
            fullWidth
            {...register('lastName', { required: '苗字は必須です' })}
            value={sessionStorage.getItem('lastName')}
          />
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ message }) => (
              <small style={{ color: 'red' }}>{message}</small>
            )}
          />
        </Container>
        <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
          <label htmlFor="address" style={{ display: 'block' }}>
            {t('form.inputs.address')}
          </label>
          <TextField
            error={!errors.address ? false : true}
            id="address"
            label={t('form.placeholder.address')}
            variant="outlined"
            fullWidth
            {...register('address', { required: '住所は必須です' })}
            value={sessionStorage.getItem('address')}
          />
          <ErrorMessage
            errors={errors}
            name="address"
            render={({ message }) => (
              <small style={{ color: 'red' }}>{message}</small>
            )}
          />
        </Container>
        <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
          <label htmlFor="phoneNumber" style={{ display: 'block' }}>
            {t('form.inputs.phoneNumber')}
          </label>
          <TextField
            error={!errors.phoneNumber ? false : true}
            id="phoneNumber"
            type="number"
            label={t('form.placeholder.phoneNumber')}
            variant="outlined"
            fullWidth
            {...register('phoneNumber', { required: '電話番号は必須です' })}
            value={sessionStorage.getItem('phoneNumber')}
          />
          <ErrorMessage
            errors={errors}
            name="phoneNumber"
            render={({ message }) => (
              <small style={{ color: 'red' }}>{message}</small>
            )}
          />
        </Container>
        <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
          <label htmlFor="email" style={{ display: 'block' }}>
            {t('form.inputs.email')}
          </label>
          <TextField
            error={!errors.email ? false : true}
            id="email"
            type="email"
            label={t('form.placeholder.email')}
            variant="outlined"
            fullWidth
            {...register('email', { required: 'メールアドレスは必須です' })}
            value={sessionStorage.getItem('email')}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <small style={{ color: 'red' }}>{message}</small>
            )}
          />
        </Container>
        <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
          <label htmlFor="summary" style={{ display: 'block' }}>
            {t('form.inputs.summary')}
          </label>
          <TextField
            error={!errors.summary ? false : true}
            id="summary"
            multiline
            rows={4}
            label={t('form.placeholder.summary')}
            variant="outlined"
            fullWidth
            {...register('summary', { required: 'あなたの強みは必須です' })}
            value={sessionStorage.getItem('summary')}
          />
          <ErrorMessage
            errors={errors}
            name="summary"
            render={({ message }) => (
              <small style={{ color: 'red' }}>{message}</small>
            )}
          />
        </Container>
        <Container maxWidth="sm" style={{ marginBottom: 30 }}>
          <Button variant="contained" type="submit">
            {t('form.button.submit')}
          </Button>
        </Container>
      </form>
    </>
  )
}

ResumeForm.displayName = 'ResumeForm'

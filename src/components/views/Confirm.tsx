import React, { FC, useState } from 'react'
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

  const [isLoading, setIsLoading] = useState(false)

  const firstName = sessionStorage.getItem('firstName')
  const lastName = sessionStorage.getItem('lastName')
  const address = sessionStorage.getItem('address')
  const phoneNumber = sessionStorage.getItem('phoneNumber')
  const email = sessionStorage.getItem('email')
  const summary = sessionStorage.getItem('summary')
  const skills = sessionStorage.getItem('skills')
  const workHistories = sessionStorage
    .getItem('workHistories')
    ?.replace(/\r?\\n/g, '\n')
  const education = sessionStorage
    .getItem('education')
    ?.replace(/\r?\\n/g, '\n')

  const translate = () => {
    setIsLoading(true)
    // Call translate API
  }

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <Container maxWidth="sm" style={{ paddingBottom: 30 }}>
            <h1>確認画面</h1>
          </Container>
          <form>
            <Container maxWidth="sm" style={{ paddingBottom: 30 }}>
              {t('form.inputs.firstName')}
              <h4>{firstName}</h4>
              <hr />
              {t('form.inputs.lastName')}
              <h4>{lastName}</h4>
              <hr />
              {t('form.inputs.address')}
              <h4>{address}</h4>
              <hr />
              {t('form.inputs.phoneNumber')}
              <h4>{phoneNumber}</h4>
              <hr />
              {t('form.inputs.email')}
              <h4>{email}</h4>
              <hr />
              {t('form.inputs.summary')}
              <h4>{summary}</h4>
              <hr />
              {t('form.inputs.skills')}
              <h4>{skills}</h4>
              <hr />
              {t('form.inputs.workhistory')}
              <h4>{workHistories}</h4>
              <hr />
              {t('form.inputs.education')}
              <h4>{education}</h4>
              <hr />
              <Button
                variant="contained"
                type="submit"
                onClick={translate}
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                {t('form.button.submit')}
              </Button>
            </Container>
          </form>
        </>
      )}
    </>
  )
}

Confirm.displayName = 'Confirm'

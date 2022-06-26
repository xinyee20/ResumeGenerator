import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { TextField, Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TemplateOne } from '../TemplateOne'

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
  const [isTranslated, setIsTranslated] = useState(false)

  const firstName = sessionStorage.getItem('firstName') as string
  const lastName = sessionStorage.getItem('lastName') as string
  const address = sessionStorage.getItem('address') as string
  const phoneNumber = sessionStorage.getItem('phoneNumber') as string
  const email = sessionStorage.getItem('email') as string
  const summary = sessionStorage.getItem('summary') as string
  const skills = sessionStorage.getItem('skills') as string
  const workHistories = sessionStorage
    .getItem('workHistories')
    ?.replace(/\r?\\n/g, '\n') as string
  const education = sessionStorage
    .getItem('education')
    ?.replace(/\r?\\n/g, '\n') as string

  const translate = () => {
    setIsLoading(true)
    // Call translate API
    setIsTranslated(true)
  }

  return (
    <>
      {isLoading ? (
        <>
          <div className="loader">Loading...</div>
          <p style={{ textAlign: 'center' }}>履歴書生成中...</p>
        </>
      ) : isTranslated ? (
        <>
          <TemplateOne
            firstName={firstName}
            lastName={lastName}
            address={address}
            phoneNumber={phoneNumber}
            email={email}
            summary={summary}
            skills={skills}
            workHistories={workHistories}
            education={education}
          ></TemplateOne>
        </>
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

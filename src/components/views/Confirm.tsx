import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { TextField, Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TemplateOne } from '../TemplateOne'
import { ResumeView } from './ResumeView'
import axios from 'axios'

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

  const translate = async () => {
    setIsLoading(true)

    const translateNeeded = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      summary: summary,
      skills: skills,
      workHistories: workHistories
    }

    for (const [key, value] of Object.entries(translateNeeded)) {
      await axios.get(
      'https://api-free.deepl.com/v2/translate',
        {
            params: {
                text: value,
                source_lang: 'JA',
                target_lang: 'EN-US',
                auth_key: '70edb5ea-43c4-038d-1f07-781d34ec7c24:fx'
            }
        }).then(function(data) {
          console.log(data)
          sessionStorage.setItem(key, data.data.translations[0].text)
        })
    }
    setIsLoading(false)
    navigate('/resume', { replace: true })
  }

  return (
    <>
      {isLoading ? (
        <>
          <div className="loader">Loading...</div>
          <p style={{ textAlign: 'center' }}>??????????????????...</p>
        </>
      ) : (
        <>
          <Container maxWidth="sm" style={{ paddingBottom: 30 }}>
            <h1>????????????</h1>
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

import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { CustomButton } from '../CustomButton'
import { TemplateOne } from '../TemplateOne'

export const ResumeView: FC = memo(() => {
  const { t } = useTranslation()
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: '20px',
        }}
      >
        <div>レジュメの作成に成功しました</div>
        <div>{t('Press Command/Ctrl + "P" to download resume')}</div>
      </div>
      <TemplateOne
        firstName={firstName ?? 'firstName'}
        lastName={lastName}
        address={address ?? 'Address'}
        phoneNumber={phoneNumber}
        email={email ?? 'Email'}
        summary={summary ?? 'Summary'}
        skills={skills}
        workHistories={workHistories}
        education={education}
      ></TemplateOne>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '20px',
        }}
      >
        <CustomButton
          text={'ダウンロード'}
          designType={'primary'}
        ></CustomButton>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <CustomButton
            text={'ホームページ'}
            designType={'primary'}
          ></CustomButton>
        </Link>
      </div>
    </div>
  )
})

ResumeView.displayName = 'ResumeView'

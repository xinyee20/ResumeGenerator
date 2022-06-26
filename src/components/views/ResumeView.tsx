import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../CustomButton'
import { TemplateOne } from '../TemplateOne'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export const ResumeView: FC = memo(() => {
  const themeColor = sessionStorage.getItem('color')
  const firstName = sessionStorage.getItem('firstName')
  const lastName = sessionStorage.getItem('lastName')
  const address = sessionStorage.getItem('address')
  const phoneNumber = sessionStorage.getItem('phoneNumber')
  const email = sessionStorage.getItem('email')
  const summary = sessionStorage.getItem('summary')
  const skills = sessionStorage.getItem('skills') as string
  const workHistories = sessionStorage
    .getItem('workHistories')
    ?.replace(/\r?\\n/g, '\n') as string
  const education = sessionStorage
    .getItem('education')
    ?.replace(/\r?\\n/g, '\n') as string

  const createPDF = async () => {
    const pdf = new jsPDF('portrait', 'pt', 'a4')
    const data = await html2canvas(
      document.querySelector('#pdf') as HTMLElement,
    )
    const img = data.toDataURL('image/png')
    const imgProperties = pdf.getImageProperties(img)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('resume.pdf')
  }

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
      </div>
      <div id="pdf">
        <TemplateOne
          themeColor={themeColor ?? '#000'}
          firstName={firstName ?? 'FirstName'}
          lastName={lastName ?? 'LastName'}
          address={address ?? 'Address'}
          phoneNumber={phoneNumber ?? 'Phone number'}
          email={email ?? 'Email'}
          summary={summary ?? 'Summary'}
          skills={skills ?? 'Skills'}
          workHistories={workHistories ?? 'Work Histories'}
          education={education ?? 'Education'}
        ></TemplateOne>
      </div>
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
          onClick={createPDF}
        ></CustomButton>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          onClick={() => sessionStorage.clear()}
        >
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

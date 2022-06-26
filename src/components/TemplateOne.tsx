import React, { FC, memo } from 'react'

export interface TemplateOneProps {
  themeColor: string
  firstName: string
  lastName: string
  address: string
  phoneNumber: string
  email: string
  summary: string
  skills: string
  workHistories: string
  education: string
}
export const TemplateOne: FC<TemplateOneProps> = memo(
  ({
    themeColor,
    firstName,
    lastName,
    address,
    phoneNumber,
    email,
    summary,
    skills,
    workHistories,
    education,
  }) => {
    return (
      <div
        style={{
          flexDirection: 'column',
        }}
      >
        {/*Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            color: '#fff',
            backgroundColor: `${themeColor}` ?? '#fff',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: '30px 0' }}>
            {firstName} {lastName}
          </div>
          <div style={{ paddingBottom: '10px' }}>
            {address} - {phoneNumber} - {email}
          </div>
        </div>
        {/*Summary*/}
        <div
          style={{
            padding: '10px 30px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div style={{ fontWeight: '600', width: '40%' }}>
            Professional Summary
          </div>
          <div style={{ width: '60%' }}>{summary}</div>
        </div>
        {/*Border */}
        <div style={{ border: `1px ${themeColor} solid`, width: '100%' }}></div>
        {/*Skills*/}
        <div
          style={{
            padding: '10px 30px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div style={{ fontWeight: '600', width: '40%' }}>Skills</div>
          <div style={{ width: '60%' }}>{skills}</div>
        </div>
        {/*Border */}
        <div style={{ border: `1px ${themeColor} solid`, width: '100%' }}></div>
        {/*History */}
        <div
          style={{
            padding: '10px 30px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div style={{ fontWeight: '600', width: '40%' }}>Work Histories</div>
          <div style={{ width: '60%' }}>{workHistories}</div>
        </div>
        {/*Border */}
        <div style={{ border: `1px ${themeColor} solid`, width: '100%' }}></div>
        {/*Education*/}
        <div
          style={{
            padding: '10px 30px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div style={{ fontWeight: '600', width: '40%' }}>Education</div>
          <div style={{ width: '60%' }}>{education}</div>
        </div>
      </div>
    )
  },
)

TemplateOne.displayName = 'TemplateOne'

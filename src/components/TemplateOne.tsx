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
          display: 'flex',
          alignItems: 'center',
          height: '50px',
          backgroundColor: `${themeColor}`,
          color: '#fff',
          flexDirection: 'column',
        }}
      >
        {/*Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '50px',
            backgroundColor: '#000',
            color: '#333',
            flexDirection: 'column',
          }}
        >
          <div>
            {firstName} {lastName}
          </div>
          <div>
            {address} {phoneNumber} {email}
          </div>
        </div>
        {/*Summary*/}
        <div>
          <div>Professional Summary</div>
          <div>{summary}</div>
        </div>
        {/*Border */}
        <div></div>
        {/*Skills*/}
        <div>
          <div>Skills</div>
          <div>
            <div>{skills}</div>
          </div>
        </div>
        {/*Border */}
        <div></div>
        {/*History */}
        <div>
          <div>Work History</div>
          <div>
            <div>
              <div>{workHistories}</div>
            </div>
          </div>
        </div>
        {/*Border */}
        <div></div>
        {/*Education*/}
        <div>Education</div>
        <div>
          <div>{education}</div>
        </div>
        <div></div>
      </div>
    )
  },
)

TemplateOne.displayName = 'TemplateOne'

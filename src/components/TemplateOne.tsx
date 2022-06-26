import { Education } from '@/types/Education'
import { WorkHistory } from '@/types/WorkHistroy'
import { Email } from '@mui/icons-material'
import React, { FC, memo } from 'react'

export interface TemplateOneProps {
  themeColor: string
  name: string
  address: string
  contact: string
  email: string
  skills: string[]
  history: WorkHistory[]
  education: Education[]
}
export const TemplateOne: FC<TemplateOneProps> = memo(
  ({
    themeColor,
    name,
    address,
    contact,
    email,
    skills,
    history,
    education,
  }) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '50px',
          backgroundColor: '#000',
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
            color: '#fff',
            flexDirection: 'column',
          }}
        >
          <div>{name}</div>
          <div>
            {address} {contact} {email}
          </div>
        </div>
        {/*Summary*/}
        <div>
          <div>Professional Summary</div>
          <div>{'summary'}</div>
        </div>
        {/*Border */}
        <div></div>
        {/*Skills*/}
        <div>
          <div>Skills</div>
          <div>
            {skills.map((skill) => {
              return <div key={`${skill}`}>{skill}</div>
            })}
          </div>
        </div>
        {/*Border */}
        <div></div>
        {/*History */}
        <div>
          <div>Work History</div>
          <div>
            {history.map((history: WorkHistory) => {
              return (
                <div key={`${history}`}>
                  <div>
                    {history.role} {history.term}
                  </div>
                  <div>
                    {history.companyName} {history.location}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/*Border */}
        <div></div>
        {/*Education*/}
        <div>Education</div>
        <div>
          {education.map((education: Education) => {
            return (
              <div key={`${education}`}>
                <div>{education.major}</div>
                <div>
                  {education.schoolName} - {education.location}
                </div>
              </div>
            )
          })}
        </div>
        <div></div>
      </div>
    )
  },
)

TemplateOne.displayName = 'TemplateOne'

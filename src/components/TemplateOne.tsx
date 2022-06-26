import React, { FC, memo } from 'react'

export interface TemplateOneProps {
  themeColor: string
  firstName: string
  lastName: string
  address: string
  contact: string
  email: string
  summary: string
  skill: string
  companyName: string //history
  term: string
  workHis: string
  role: string
  schoolName: string //education
  major: string
  schLocation: string
}
export const TemplateOne: FC<TemplateOneProps> = memo(
  ({
    themeColor,
    name,
    address,
    contact,
    email,
    summary,
    skill,
    companyName, //history
    term,
    workLocation,
    role,
    schoolName, //education
    major,
    schLocation,
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
          <div>{summary}</div>
        </div>
        {/*Border */}
        <div></div>
        {/*Skills*/}
        <div>
          <div>Skills</div>
          <div>
            <div>{skill}</div>
          </div>
        </div>
        {/*Border */}
        <div></div>
        {/*History */}
        <div>
          <div>Work History</div>
          <div>
            <div>
              <div>
                {role} {term}
              </div>
              <div>
                {companyName} {workLocation}
              </div>
            </div>
          </div>
        </div>
        {/*Border */}
        <div></div>
        {/*Education*/}
        <div>Education</div>
        <div>
          <div>
            <div>{major}</div>
            <div>
              {schoolName} - {schLocation}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    )
  },
)

TemplateOne.displayName = 'TemplateOne'

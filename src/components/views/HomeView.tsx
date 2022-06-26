import React, { FC, memo, useState } from 'react'
import { UnlockedModal } from '../UnlockedModal'
import { LockedModal } from '../LockedModal'
import { Card } from '../Card'
import resumeOne from '../../assets/Resume1.jpg'
import lockedResume from '../../assets/template.png'

export const HomeView: FC = memo(() => {
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [unlockedModalOpen, setUnlockedModalOpen] = useState(false)
  const [lockedModalOpen, setLockedModalOpen] = useState(false)

  return (
    <>
      <UnlockedModal
        modalOpen={unlockedModalOpen}
        templateURL={selectedTemplate}
        setModalOpen={setUnlockedModalOpen}
      ></UnlockedModal>
      <LockedModal
        modalOpen={lockedModalOpen}
        templateURL={selectedTemplate}
        setModalOpen={setLockedModalOpen}
      ></LockedModal>
      {/*Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px',
          paddingTop: '100px',
        }}
      >
        <h1>トランス・レジュメ</h1>
        <h5>
          英文履歴書が必要だけど、どう書けばいいかわからない？ぜひお試しください。
        </h5>
      </div>

      <div
        style={{
          display: 'flex',
          padding: '30px',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        <Card
          template={resumeOne}
          onClick={() => {
            setUnlockedModalOpen(true)
            setSelectedTemplate(resumeOne)
          }}
        ></Card>
        <Card
          template={lockedResume}
          onClick={() => {
            setLockedModalOpen(true)
            setSelectedTemplate(lockedResume)
          }}
        ></Card>
      </div>
    </>
  )
})

HomeView.displayName = 'HomeView'

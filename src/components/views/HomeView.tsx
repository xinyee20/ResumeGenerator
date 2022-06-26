import React, { FC, memo, useState } from 'react'
import { UnlockedModal } from '../UnlockedModal'
import { LockedModal } from '../LockedModal'
import { Card } from '../Card'

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
          padding: '30px',
          paddingTop: '80px',
        }}
      >
        <h1>トランス・レジュメ</h1>
        <h4>
          英文履歴書が必要だけど、どう書けばいいかわからない？ぜひお試しください。
        </h4>
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
          template="src/assets/Resume1.png"
          onClick={() => {
            setUnlockedModalOpen(true)
            setSelectedTemplate('src/assets/Resume1.png')
          }}
        ></Card>
        <Card
          template="src/assets/template.png"
          onClick={() => {
            setLockedModalOpen(true)
            setSelectedTemplate('src/assets/template.png')
          }}
        ></Card>
      </div>
    </>
  )
})

HomeView.displayName = 'HomeView'

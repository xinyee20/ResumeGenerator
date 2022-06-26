import React, { FC, memo, useState } from 'react'
import { SmallComponent } from '../SmallComponent'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Link } from 'react-router-dom'
import { CustomButton } from '../CustomButton'
import { UnlockedModal } from '../UnlockedModal'
import { LockedModal } from '../LockedModal'
import { Card } from '../Card'

export const HomeView: FC = memo(() => {
  const { t } = useTranslation()
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [unlockedModalOpen, setUnlockedModalOpen] = useState(false)
  const [lockedModalOpen, setLockedModalOpen] = useState(false)

  const switchLang = (lang: string): void => {
    i18n.changeLanguage(lang)
  }

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
      <div style={{ margin: '0 5em' }}>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => switchLang('ja')}
          style={{ margin: '20px' }}
        >
          Japanese
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => switchLang('en')}
        >
          English
        </button>
      </div>
      {/*Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
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
        }}
      >
        <Card
          template="../../../assets/Resume1.webp"
          onClick={() => {
            setUnlockedModalOpen(true)
            setSelectedTemplate('../../../assets/Resume1.webp')
          }}
        ></Card>
        <Card
          template="../../../assets/template.png"
          onClick={() => {
            setLockedModalOpen(true)
            setSelectedTemplate('../../../assets/template.png')
          }}
        ></Card>
      </div>

      {/* <div className="card" style={{ margin: '2em 5em' }}>
        <div className="card-body">
          <h2 className="card-title">{t('header.title')}</h2>
          <div className="btn-group" role="group">
            <Link to="/form" style={{ textDecoration: 'none', margin: '20px' }}>
              <CustomButton
                text={t('form.button.submit')}
                designType="secondary"
              ></CustomButton>
            </Link>
          </div>
        </div>

        <div className="card" style={{ margin: '5em' }}>
          <div className="card-body">
            <h2 className="card-title">{t('テーマを設定する')}</h2>
          </div>
        </div>
      </div> */}
    </>
  )
})

HomeView.displayName = 'HomeView'

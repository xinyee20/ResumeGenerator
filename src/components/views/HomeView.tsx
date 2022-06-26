import React, { FC, memo, useState } from 'react'
import { SmallComponent } from '../SmallComponent'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Link } from 'react-router-dom'
import { CustomButton } from '../CustomButton'
import { UnlockedModal } from '../UnlockedModal'
import { LockedModal } from '../LockedModal'

export const HomeView: FC = memo(() => {
  const { t } = useTranslation()
  const [unlockedModalOpen, setUnlockedModalOpen] = useState(false)
  const [lockedModalOpen, setLockedModalOpen] = useState(false)

  const switchLang = (lang: string): void => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
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

      <div className="card" style={{ margin: '2em 5em' }}>
        <div className="card-body">
          <h2 className="card-title">{t('header.title')}</h2>
          {/* <SmallComponent />
          <SmallComponent />
          <SmallComponent />
          <SmallComponent /> */}
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
            <div style={{ display: 'inline', margin: '20px' }}>
              <CustomButton
                text={'Open UnlockedModal'}
                designType={'primary'}
                onClick={(e) => {
                  // e.stopPropagation()
                  setUnlockedModalOpen(true)
                }}
              ></CustomButton>
            </div>
            <CustomButton
              text={'Open Locked Modal'}
              designType={'primary'}
              onClick={(e) => {
                // e.stopPropagation()
                setLockedModalOpen(true)
              }}
            ></CustomButton>
            <UnlockedModal
              modalOpen={unlockedModalOpen}
              templateURL="../../assets/Resume1.webp"
              setModalOpen={setUnlockedModalOpen}
              onNext={() => setUnlockedModalOpen(false)}
            ></UnlockedModal>
            <LockedModal
              modalOpen={lockedModalOpen}
              templateURL="../../assets/template.png"
              setModalOpen={setLockedModalOpen}
            ></LockedModal>
          </div>
        </div>
      </div>
    </>
  )
})

HomeView.displayName = 'HomeView'

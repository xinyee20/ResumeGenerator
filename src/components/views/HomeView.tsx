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
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{t('header.title')}</h2>
          {/* <SmallComponent />
          <SmallComponent />
          <SmallComponent />
          <SmallComponent /> */}
          <Link to="/form" style={{ textDecoration: 'none', margin: '20px' }}>
            <CustomButton
              text={'Fill Form'}
              designType="secondary"
            ></CustomButton>
          </Link>
          <Link to="/form" style={{ textDecoration: 'none', margin: '20px' }}>
            <CustomButton
              text={'Fill Form'}
              designType="primary"
            ></CustomButton>
          </Link>
          <CustomButton
            text={'Open UnlockedModal'}
            designType={'primary'}
            onClick={(e) => {
              // e.stopPropagation()
              setUnlockedModalOpen(true)
            }}
            style={{ margin: '20px' }}
          ></CustomButton>
          <CustomButton
            text={'Open Locked Modal'}
            designType={'primary'}
            onClick={(e) => {
              // e.stopPropagation()
              setLockedModalOpen(true)
            }}
            style={{ margin: '20px' }}
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
    </>
  )
})

HomeView.displayName = 'HomeView'

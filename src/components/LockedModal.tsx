import { Modal } from '@mui/material'
import React, { FC, memo } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import LockOpenIcon from '@mui/icons-material/LockOpen'

export interface LockedModalProps {
  templateURL: string
  modalOpen: boolean
  setModalOpen: (boo: boolean) => void
}

export const LockedModal: FC<LockedModalProps> = memo(
  ({ templateURL, modalOpen, setModalOpen }) => {
    return (
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false)
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            backgroundColor: '#ffffff',
            height: 'max-content',
            width: '30rem',
            borderRadius: '10px',
            padding: '20px',
            zIndex: '1000',
            alignSelf: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  flex: '5',
                  paddingLeft: '30px',
                  fontWeight: '500',
                  color: '#959490',
                }}
              >
                テンプレート
              </div>
              <div
                onClick={() => {
                  setModalOpen(false)
                }}
                style={{
                  flex: '1',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <CloseIcon />
              </div>
            </div>
            <div>
              <img
                src={templateURL ?? '../../assets/Resume1.webp'}
                alt="Template"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  overflow: 'hidden',
                  padding: ' 10px 30px 10px 30px',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div>500 JYPでアンロック</div>
              <LockOpenIcon />
            </div>
          </div>
        </div>
      </Modal>
    )
  },
)

LockedModal.displayName = 'LockedModal'

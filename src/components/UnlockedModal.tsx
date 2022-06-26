import React, { FC, memo, useState } from 'react'
import { Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { CustomButton } from './CustomButton'

export interface UnlockedModalProps {
  templateURL: string
  modalOpen: boolean
  setModalOpen: (boo: boolean) => void
  onNext: () => void
}

export const UnlockedModal: FC<UnlockedModalProps> = memo(
  ({ templateURL, modalOpen, setModalOpen, onNext }) => {
    const [selectedColor, setSelectedColor] = useState('#484848')

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
            borderRadius: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '25px',
            zIndex: '1000',
            alignSelf: 'center',
          }}
        >
          {/*Unlock*/}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/*Template */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 0%',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: '500',
                  color: '#959490',
                }}
              >
                テンプレート
              </div>
              <div style={{ paddingTop: '10px' }}>
                <img
                  src={templateURL ?? '../../assets/Resume1.webp'}
                  alt="Template"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    overflow: 'hidden',
                  }}
                />
              </div>
            </div>
            {/*Selections*/}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 0%',
              }}
            >
              <div>
                <div
                  onClick={() => {
                    setModalOpen(false)
                  }}
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <CloseIcon />
                </div>
              </div>
              <div
                style={{ display: 'flex', padding: '10px', paddingTop: '80px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: '500',
                  }}
                >
                  テーマを決める:{' '}
                </div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: `${selectedColor}`,
                    marginLeft: '5px',
                    borderRadius: '5px',
                  }}
                ></div>
              </div>
              <div
                style={{
                  flexWrap: 'wrap',
                  height: '10rem',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '15px',
                }}
              >
                <button
                  style={{
                    width: '30%',
                    backgroundColor: '#F0DBBC',
                    borderRadius: '5px',
                    border: '0px',
                  }}
                  onClick={() => setSelectedColor('#F0DBBC')}
                ></button>
                <button
                  style={{
                    width: '30%',
                    backgroundColor: '#D6B7A3',
                    borderRadius: '5px',
                    border: '0px',
                  }}
                  onClick={() => setSelectedColor('#D6B7A3')}
                ></button>
                <button
                  style={{
                    width: '30%',
                    backgroundColor: '#C2C6AF',
                    borderRadius: '5px',
                    border: '0px',
                  }}
                  onClick={() => setSelectedColor('#C2C6AF')}
                ></button>
                <button
                  style={{
                    width: '30%',
                    backgroundColor: '#54747F',
                    borderRadius: '5px',
                    border: '0px',
                  }}
                  onClick={() => setSelectedColor('#54747F')}
                ></button>
                <button
                  style={{
                    width: '30%',
                    backgroundColor: '#959490',
                    borderRadius: '5px',
                    border: '0px',
                  }}
                  onClick={() => setSelectedColor('#959490')}
                ></button>
                <button
                  style={{
                    width: '30%',
                    backgroundColor: '#484848',
                    borderRadius: '5px',
                    border: '0px',
                  }}
                  onClick={() => setSelectedColor('#484848')}
                ></button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CustomButton
                  text="次"
                  designType="primary"
                  onClick={onNext}
                ></CustomButton>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  },
)

UnlockedModal.displayName = 'UnlockedModal'

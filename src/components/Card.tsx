import React, { FC, memo } from 'react'

export interface CardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  template: string
  onClick: () => void
}

export const Card: FC<CardProps> = memo(({ template, onClick }) => {
  return (
    <div
      style={{
        width: '150px',
        border: '3px solid #959490',
        borderRadius: '20px',
      }}
      onClick={onClick}
    >
      <img
        src={template}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          overflow: 'hidden',

          borderRadius: '20px',
        }}
        alt="Template"
      ></img>
    </div>
  )
})

Card.displayName = 'Card'

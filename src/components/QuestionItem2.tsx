import React, { FC, memo, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { QuestionForm } from './views/ResumeForm2'
import { TextField, Button, Container, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'
import DeleteIcon from '@mui/icons-material/Delete'

interface Props {
  register: UseFormRegister<QuestionForm>
  questionIndex: number
  removeQuestion: (index: number) => void
}

export const QuestionItem2 = ({
  register,
  questionIndex,
  removeQuestion,
}: Props) => {
  const { t } = useTranslation()
  return (
    <div className={'question-item-container'}>
      <div>
        <label>
          <p>あなたの職務経歴 {questionIndex + 1}</p>
          <TextField
            id="questions'"
            label={t('form.placeholder.workhistory')}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            {...register(`questions.${questionIndex}.questionText` as const)}
          />
        </label>
        <Button
          type={'button'}
          onClick={() => removeQuestion(questionIndex)}
          style={{ marginLeft: '16px', marginBottom: 10 }}
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          削除
        </Button>
        <hr />
      </div>
    </div>
  )
}

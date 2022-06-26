import React, { FC, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form'
import { TextField, Button, Container, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { WorkHistory } from '@/types/WorkHistroy'
import { Education } from '@/types/Education'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import { QuestionItem } from '../QuestionItem'
import { useNavigate } from 'react-router-dom'
import { QuestionItem2 } from '../QuestionItem2'
interface Question {
  questionText: string
}

export interface QuestionForm {
  questions: Question[]
}

export const ResumeForm3 = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, control } = useForm<QuestionForm>({
    defaultValues: {
      questions: [{ questionText: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  })

  const addQuestion = () => {
    append({ questionText: '' })
  }

  const removeQuestion = (index: number) => {
    remove(index)
  }

  const doSubmit = (data: QuestionForm) => {
    const answers: string[] = []
    data.questions.map((d) => {
      answers.push(d.questionText.replace(/\r?\n/g, '\\n'))
    })
    sessionStorage.setItem('workHistories', answers.join(','))
    navigate('/form4', { replace: true })
  }

  return (
    <div className={'container'}>
      <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
        <form onSubmit={handleSubmit(doSubmit)} className={'form-container'}>
          {fields.map((field, index) => (
            <QuestionItem2
              key={field.id}
              register={register}
              questionIndex={index}
              removeQuestion={removeQuestion}
            />
          ))}
          <div style={{ marginBottom: 10 }}>
            <Button
              onClick={addQuestion}
              type={'button'}
              variant="contained"
              startIcon={<AddIcon />}
            >
              追加
            </Button>
          </div>
          <div className={'form-action-wrapper'}>
            <Button type="submit" variant="contained">
              次へ
            </Button>
          </div>
        </form>
      </Container>
    </div>
  )
}

ResumeForm3.displayName = 'ResumeForm3'

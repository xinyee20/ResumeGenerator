import React, { FC, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form'
import { TextField, Button, Container, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { WorkHistory } from '@/types/WorkHistroy'
import { Education } from '@/types/Education'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import { QuestionItem } from '../QuestionItem'

interface Question {
  questionText: string
}

export interface QuestionForm {
  skills: Question[]
}

export const ResumeForm2 = () => {
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
    console.log('data', data)
    const answers: string[] = []
    data.questions.map((d) => {
      answers.push(d.questionText)
    })
    sessionStorage.setItem('skills', answers.join(','))
  }

  return (
    <div className={'container'}>
      <Container maxWidth="sm" style={{ paddingBottom: 20 }}>
        <form onSubmit={handleSubmit(doSubmit)} className={'form-container'}>
          {fields.map((field, index) => (
            <QuestionItem
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
              質問を追加
            </Button>
          </div>
          <div className={'form-action-wrapper'}>
            <Button type="submit" variant="contained">
              保存
            </Button>
          </div>
        </form>
      </Container>
    </div>
  )
}

ResumeForm2.displayName = 'ResumeForm2'

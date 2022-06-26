import { Confirm } from '@/components/views/Confirm'
import { ResumeForm2 } from '@/components/views/ResumeForm2'
import { ResumeForm3 } from '@/components/views/ResumeForm3'
import { ResumeForm4 } from '@/components/views/ResumeForm4'
import React, { FC, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { HomeView } from '../components/views/HomeView'
import { Page404 } from '../components/views/Page404'
import { PageLayout } from '../components/views/PageLayout'
import { ResumeForm } from '../components/views/ResumeForm'
import { ResumeView } from '../components/views/ResumeView'

export const Router: FC = memo(() => {
  const homeRoutes = useRoutes([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: <HomeView />,
        },
        {
          path: '/form',
          element: <ResumeForm />,
        },
        {
          path: '/form2',
          element: <ResumeForm2 />,
        },
        {
          path: '/form3',
          element: <ResumeForm3 />,
        },
        {
          path: '/form4',
          element: <ResumeForm4 />,
        },
        {
          path: '/confirm',
          element: <Confirm />,
        },
        {
          path: '/resume',
          element: <ResumeView />,
        },
      ],
    },
    { path: '*', element: <Page404 /> },
  ])

  return homeRoutes
})

Router.displayName = 'Router'

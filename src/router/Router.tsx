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

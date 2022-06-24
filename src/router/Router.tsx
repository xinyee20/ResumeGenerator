import React, { FC, memo } from 'react'
import { RouteProps, useRoutes, Navigate, Route } from 'react-router-dom'
import { HomeView } from '@/components/views/HomeView'
import { Page404 } from '@/components/views/Page404'
import { PageLayout } from '@/components/views/PageLayout'

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
      ],
    },
    { path: '*', element: <Page404 /> },
  ])

  return homeRoutes
})

Router.displayName = 'Router'

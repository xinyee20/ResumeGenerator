import React, { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

export const PageLayout: FC = memo(() => {
  return (
    <>
      <h2></h2>
      <Outlet></Outlet>
    </>
  )
})

PageLayout.displayName = 'PageLayout'

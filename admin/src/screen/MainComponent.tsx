import React from 'react'
import { Header, SideBar } from '../layout'
import { Box } from '@mui/material'

import { Outlet } from 'react-router-dom'

function MainComponent() {
  return (
   <>
   <Header />
      <Box display="flex">
        <SideBar />
        <Box width="100%" height="100vh" overflow="auto">
          {/* <Routing /> */}
          <Outlet/>
        </Box>
      </Box>
   </>
  )
}

export default MainComponent
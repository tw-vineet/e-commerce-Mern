import React from 'react'
import { Box, Typography } from '@mui/material'
import { Buttons } from '../component'
import { Footer, Navbar } from '../layout'

const buttonStyle = {
    background: '#DB4444',
    borderRadius: 0,
    Padding: 4
}

export function Pagenotfound() {
    return (
        <>
            <Navbar />

            <Box
                height={'100vh'}
                width={'100%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
            >
                <Typography variant='h1'>404 Not Found</Typography>
                <Typography variant='h6' marginBottom={4}>
                    Your visited page not found . You may go home page.{' '}
                </Typography>
                <Buttons
                    text={'Back to Home page'}
                    variant1='contained'
                    styleProps={{ ...buttonStyle }}
                />
            </Box>

            <Footer />
        </>
    )
}

import React, {FC} from 'react'
import {Card, Box} from '@mui/material'

const Education:FC = () => {
    return(
        <Box>
            <Card variant='outlined'
                  sx={{
                      padding: 0.8,
                      backgroundColor: '#daeef8',
                      border: 'none',
                      borderRadius: 3,
                      marginTop: 3,
                      width: 1000,
                      height: 600}}>
                Education
            </Card>
        </Box>
    )
}

export default Education
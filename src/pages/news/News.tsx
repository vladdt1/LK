import React, {FC} from 'react'
import {Card, Box, Grid} from '@mui/material'

const News:FC = () => {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString().slice(0,-3);

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
                      height:600}}>

                <Grid marginX={5}>
                      <Card variant='outlined'
                          sx={{
                          padding: 0.8,
                          backgroundColor: '#b9e0f3',
                          border: 'none',
                          borderRadius: 3,
                          marginTop: 3,
                          width: 800,
                          height:50}}>
                          <span style={{fontWeight:'bold'}}>{'07.04.2022'+' '+'19:13'}</span>
                          <Grid marginX={5}>Версия ЛК 1.0</Grid>
                      </Card>
                </Grid>
            </Card>
        </Box>
    )
}

export default News
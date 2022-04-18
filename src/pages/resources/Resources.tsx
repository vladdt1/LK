import React, {FC} from 'react'
import {Card, Box, Grid, Button, ListItem} from '@mui/material'
import styles from "../../layout/header/Header.module.css";
import Sidebar from "../../layout/sidebar/Sidebar";


const Resources:FC = () => {
    return(
        <Box>
            <Card variant='outlined'
                  sx={{
                      display: 'flex',
                      padding: 0.8,
                      backgroundColor: '#daeef8',
                      border: 'none',
                      borderRadius: 3,
                      marginTop: 3,
                      width: 1000,
                      height: 600,}}>
                <Grid container spacing={1} marginX={1} marginTop={0}>
                        <Grid item md={9.5}>
                            <span style={{fontSize: 23}}>Ресурсы</span>
                        </Grid>
                    <Grid item md={2.4}>
                            <Button id='upload-btn' variant="contained">Добавить ресурс</Button>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default Resources
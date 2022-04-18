import React, { FC } from 'react'
import {Avatar, Grid, Button, Card, Box, ListItem} from '@mui/material'
import BOX from '@mui/material/Box'
import {user} from './user'
import InfoProfil from './InfoProfil'
import Sidebar from "../../layout/sidebar/Sidebar";

const Profile:FC = () => {

    return(
        <Box >

            {user.map(user =>
                <Card variant='outlined'
                      sx={{

                          padding: 0.8,
                          backgroundColor: '#daeef8',
                          border: 'none',
                          borderRadius: 3,
                          marginTop: 3,
                          width: 1000,
                          height: 600,

                          //marginBottom: 10,
                      }}>
                    <Grid container spacing={0} marginX={1} marginTop={1}>
                        <Grid item md={2.8}>
                            <BOX sx={{
                                position: 'relative',
                                marginRight: 3,
                            }}>

                                <Avatar
                                    src={user.avatar}
                                    alt=''
                                    sx = {{
                                        width: 200,
                                        height: 200,
                                        borderRadius: '50%'
                                    }}
                                />
                                <Grid marginTop={1} sx={{marginLeft: 'auto',
                                    marginRight: 'auto',width:'10em'}}>
                                    <Button id='upload-btn' variant="contained">Изменить фото</Button>
                                </Grid>
                            </BOX>
                        </Grid>
                        <Grid item md={8}>
                            <InfoProfil/>
                        </Grid>
                    </Grid>

                </Card>
            )}
        </Box>
    )
}

export default Profile
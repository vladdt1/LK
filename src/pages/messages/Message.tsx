import React, {FC, useEffect, useState, MouseEvent} from 'react';
/*import { Link } from 'react-router-dom'
import { onSnapshot, collection, addDoc } from 'firebase/firestore'
import { useAuth } from '../../providers/useAuth'
import { initialPosts } from './initialPosts'*/


import { makeStyles } from '@material-ui/core/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Fab from '@mui/material/Fab'
import {Send as SendIcon} from '@mui/icons-material'
import Card from '@mui/material/Card'
import {Alert} from '@mui/material'



const Message: FC = () => {
    /*const { user, db } = useAuth()*/
    //const [error, setError] = useState('')
    //const [message, setMessage] = useState('')
    //const [messages, setMessages] = useState<IMessage[]>([])

    /*   useEffect(() => {
           const unsub = onSnapshot(collection(db, 'messages'), doc => {
               doc.forEach((d:any) => {
                   setMessages(prev => [...prev, d.data()])
               })
           })
       })
   */
    // @ts-ignore
    return (
        <Grid item md={0} marginX={0}>
            <Card variant='outlined'
                  sx={{
                      padding: 0.8,
                      backgroundColor: '#daeef8',
                      border: 'none',
                      borderRadius: 3,
                      marginTop: 3,
                      width: 1000, height: 600
                  }}>

                <div>
                    <Grid container>
                    </Grid>
                    <Grid container component={Paper}>
                        <Grid item xs={3}>


                            <Grid item xs={12} style={{padding: '10px'}}>
                                <TextField id="outlined-basic-email" label="Поиск" variant="outlined" fullWidth/>
                            </Grid>
                            <Divider/>
                            <List>
                                <ListItem button key="RemySharp">
                                    <ListItemIcon>
                                        <Avatar alt="Remy Sharp"
                                                src=""/>
                                    </ListItemIcon>
                                    <ListItemText>Владислав Титов</ListItemText>
                                </ListItem>
                                <ListItem button key="Alice">
                                    <ListItemIcon>
                                        <Avatar alt="Alice" src=""/>
                                    </ListItemIcon>
                                    <ListItemText>Ролан Закиров</ListItemText>
                                </ListItem>
                                <ListItem button key="CindyBaker">
                                    <ListItemIcon>
                                        <Avatar alt="Cindy Baker"
                                                src=""/>
                                    </ListItemIcon>
                                    <ListItemText>Виталий Ведищев</ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={9}>
                            <List style={{height: '62vh', overflowY: 'auto'}}>
                                <ListItem key="1">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <ListItemText></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem key="2">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <ListItemText></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem key="3">
                                    <Grid container>

                                    </Grid>
                                </ListItem>
                            </List>
                            <Divider/>
                            <Grid container style={{padding: '20px'}}>
                                <Grid item xs={11}>
                                    <TextField id="outlined-basic-email" label="Введите сообщение..." fullWidth/>
                                </Grid>
                                <Grid xs={1}>
                                    <Fab color="primary" aria-label="add"><SendIcon/></Fab>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Card>
        </Grid>
    )


    /* const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {

             try {
                 await addDoc(collection(db, 'messages'), {
                     user, message
                 })
             } catch (e: any) {
                 setError(e)
             }
             setMessage('')

     }

     return( <>
         {error && (
             <Alert severity='error' style={{ marginBottom: 20 }}>
                 {error}
             </Alert>

         )}

     <div>Messages</div>
     </>
     )
 */
}

export default Message;
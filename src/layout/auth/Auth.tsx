import React, {FC, SyntheticEvent, useEffect, useState} from 'react'
import {Avatar, Button, ButtonGroup, Card, Grid, ListItem, TextField} from '@mui/material'
import {IUserData} from './types'
import image from './lsty.jpg'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {useAuth} from '../../providers/useAuth'
import {useHistory} from 'react-router-dom'


const Auth:FC = () => {

    const {ga, user} = useAuth()

    const [isRegForm, setIsRegForm] = useState(false)
    const [userData,setUserData] = useState<IUserData>({
        login: '',
        password: ''
    } as IUserData)


    const handleLogin = async (e:SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()




        if(isRegForm){
            try {
                await createUserWithEmailAndPassword(ga, userData.login, userData.password)
            } catch (error:any){
                error.message && console.log(error.message)
            }

        }else{
            try {
                await signInWithEmailAndPassword(ga, userData.login, userData.password)
            } catch (error:any){
                error.message && console.log(error.message)
            }
        }

        console.log(userData.login, userData.password)

        setUserData({
            login: '',
            password:''
        })
    }




    const history = useHistory()

    useEffect(() => {
        if (user) history.push('/')
    }, [user])

    return(
        <>
            <form onSubmit={handleLogin}>
                <Grid container spacing={1} marginX={-3} marginTop={1}>
                        <Grid item md={8}>
                                <Avatar
                                    src={image}
                                    alt=''
                                    sx = {{
                                        width: 1000,
                                        height: 625,
                                        borderRadius: '10%'
                                    }}
                                />
                        </Grid>
                    <Grid item md={4} marginY={-7} >
                        <ListItem>
                            <Grid  marginX={13}  >
                                <Card
                                    variant='outlined'
                                    sx={{
                                        padding: 3,
                                        backgroundColor: '#e1f1fa',
                                        border: 'none',
                                        borderRadius: 4, marginTop: 15,
                                        width: 270,
                                        height: 400
                                    }}>

                                <Card
                                    variant='outlined'
                                    sx={{
                                        backgroundColor: '#e1f1fa',
                                        border: 'none', marginTop: 1,
                                    }}>
                                    <Grid style={{fontSize: 19, textAlign: 'center'}}>ЭИОС "ЛГТУ"</Grid>
                                    <Grid marginTop={1} style={{fontSize: 17, textAlign: 'center'}}>Авторизация пользователя</Grid>
                                </Card>

                                <Card
                                    variant='outlined'
                                    sx={{
                                        padding: 3,
                                        backgroundColor: '#b8dff3',
                                        border: 'none',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        borderRadius: 4, marginTop: 12,
                                        width: 200,
                                        height: 30
                                    }}>
                                    <Grid marginY={-1.5} sx={{}}>
                                        <TextField type='login' label="Логин"
                                                   variant="standard"
                                                   value={userData.login}
                                                   onChange={e => setUserData({...userData, login: e.target.value})}
                                        />
                                    </Grid>
                                </Card>

                                <Card
                                    variant='outlined'
                                    sx={{
                                        padding: 3,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        backgroundColor: '#b8dff3',
                                        border: 'none',
                                        borderRadius: 4, marginTop: 2,
                                        width: 200,
                                        height: 30
                                    }}>
                                    <Grid marginY={-1.5}>
                                        <TextField type='password' label="Пароль"
                                                   variant="standard"
                                                   value={userData.password}
                                                   onChange={e => setUserData({...userData, password: e.target.value})}
                                        />
                                    </Grid>
                                </Card>
                                <ButtonGroup sx={{ marginTop: 1}}
                                             variant="text" aria-label="text button group">
                                    <Button type='submit' onClick={() => setIsRegForm(false)}>Вход</Button>
                                    <Button type='submit' onClick={() => setIsRegForm(true)}>Регистрация</Button>
                                </ButtonGroup>
                                </Card>
                            </Grid>
                        </ListItem>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Auth


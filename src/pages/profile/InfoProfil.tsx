import React, {FC} from 'react'
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid, TextField} from '@mui/material'
import {user} from './user'


const InfoProfil:FC = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);

    };
    const handleClose1 = () => {
        setOpen1(false);
    };


    return(
        <form>
            {user.map(user =>
            <Box>
                        <span style={{fontSize: 25, }}>{user.userName}</span>

                    <Grid marginY={7}>
                        <span style={{fontSize: 17}} >Пол: {user.floor}</span>
                        <div>
                            <span style={{fontSize: 17}}>Гражданство: {user.citizenship}</span>
                        </div>
                        <div>
                            <span style={{fontSize: 17}}>Дата рождения: {user.birth}</span>
                        </div>
                        <div>
                            <span style={{fontSize: 17}}>E-mail: {user.email}

                                <Box>
                                    <Button size="small" variant="outlined" onClick={handleClickOpen}>
                                        Изменить e-mail
                                    </Button>
                                    <Dialog open={open} onClose={handleClose}>
                                        <DialogContent>
                                            <DialogContentText>Введите e-mail</DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="Email Address"
                                                    type="email"
                                                    value={user.email}
                                                    fullWidth
                                                    variant="standard"
                                                />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Отмена</Button>
                                            <Button onClick={handleClose}>Подтвердить</Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>
                            </span>
                        </div>
                        <div>
                            <span style={{fontSize: 17}}>Телефон: {user.phone}</span>
                            <Box>
                                <Button size="small" variant="outlined" onClick={handleClickOpen1}>
                                    Изменить телефон
                                </Button>
                                <Dialog open={open1} onClose={handleClose1}>
                                    <DialogContent>
                                        <DialogContentText>Введите номер телефона</DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name1"
                                            label="Number phone"
                                            type="phone"
                                            value={user.phone}
                                            fullWidth
                                            variant="standard"
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose1}>Отмена</Button>
                                        <Button onClick={handleClose1}>Подтвердить</Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </div>
                    </Grid>

                    <Box style={{position: 'absolute'}}>
                        <span style={{fontSize: 21}} >Обучение</span>
                        <div>
                            Факультет: {user.faculty}
                        </div>
                        <div>
                            Направление (специальность): {user.speciality}
                        </div>
                        <div>
                            Профиль (специализация): {user.specialization}
                        </div>
                        <div>
                            Группа: {user.group}
                        </div>
                            <div>
                                Форма обучения: {user.form}
                            </div>
                            <Box sx={{}}>
                                Основа обучения: {user.foundation}
                            </Box>
                            <div >
                                Статус обучения: {user.status}
                            </div>
                            <div>
                                Уровень квалификации: {user.level}
                            </div>
                    </Box>
            </Box>
            )}
            </form>
    )
}

export default InfoProfil
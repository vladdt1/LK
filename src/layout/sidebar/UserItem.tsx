import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import BOX from '@mui/material/Box'
import {user} from '../../pages/profile/user'
import {Avatar, Button, Menu, Card, MenuItem,} from '@mui/material'
import { useAuth } from '../../providers/useAuth'
import { signOut } from 'firebase/auth'

const UserItem:FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const {ga} = useAuth()

    return(
        <BOX>{user.map(user =>
            <Card variant='outlined'
                  sx={{
                      padding: 1,
                      backgroundColor: '#b8dff3',
                      border: 'none',
                      overflow: 'auto',
                      borderRadius: 3, marginTop: 2,

                  }}>

                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>

                    <BOX sx={{
                        position: 'relative',
                        marginRight: 3,
                        overflow: 'hidden',
                        width: 50,
                        height: 50
                    }}>

                        <Avatar
                            src={user.avatar}
                            alt=''
                            sx = {{
                                width: 50,
                                height: 50,
                                borderRadius: '50%'
                            }}
                        />

                        <BOX sx={{
                            backgroundColor: '#4FB14F',
                            border: '2px solid #F1F7FA',
                            width: 11,
                            height: 11,
                            position: 'absolute',
                            bottom: 1,
                            right: 2,
                            borderRadius: '50%',
                        }}/>

                    </BOX>

                    <span style={{textDecoration: 'none',
                        color: '#111',fontSize: 15}}>
                        {user.userName}
                    </span>
                </Button>

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>

                    <Link to='/profile' style={{ textDecoration: 'none',color: '#111' }} >
                            <MenuItem onClick={handleClose}>
                                Профиль
                            </MenuItem>
                    </Link>

                    <MenuItem onClick={handleClose}>
                        Изменить пароль
                    </MenuItem>

                    <MenuItem onClick={() => signOut(ga)}>
                        Выйти
                    </MenuItem>
                </Menu>
            </Card>
        )}
        </BOX>
    )
}

export default UserItem
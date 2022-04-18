import React, {FC} from 'react'
import {
    Card,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton
} from '@mui/material'
import { menu } from './dataMenu'
import { useHistory } from 'react-router-dom'

const Menu:FC = () => {
    const history = useHistory()
    return(
        <Card
            variant='outlined'
            sx={{
                padding: 0.8,
                backgroundColor: '#daeef8',
                border: 'none',
                borderRadius: 3,
                marginTop: 3,
                overflow: 'auto',
                width: 220, height: 500
            }}>
            <List>
                {menu.map(item => (
                <ListItem key={item.link} disablePadding>
                    <ListItemButton onClick={()=> history.push(item.link)}>
                        <ListItemIcon sx={{
                            minWidth: 40,
                        }}>
                            <item.icon />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Card>
    )
}

export default Menu
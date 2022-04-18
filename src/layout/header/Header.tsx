import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import image from './lgty-logo.png'
import styles from './Header.module.css'
import DateUser from '../../Date/DateUser'
import Time from '../../Date/Time'
import {Box} from "@mui/material";

const Header:FC = () => {



    return(
        <header className={styles.header}>
            <Link to='/'>
                <div className={styles['image-wrapper']}>
                    <img src={image} alt="" />
                </div>
            </Link>

            <div className={styles.wrapper}>ЭИОС "ЛГТУ" – Личный кабинет</div>
            <Box sx={{border: 'none'}}>
                <Time/>
            </Box>
            <div><DateUser/></div>
        </header>
    )
}

export default Header
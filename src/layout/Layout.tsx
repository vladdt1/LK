import React, {FC} from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import {Grid, ListItem} from '@mui/material'
import Footer from './footer/Footer'
import {useAuth} from '../providers/useAuth'
import DateUser from "../Date/DateUser";

const Layout:FC = ({children}) => {

    const {user} = useAuth()
    return(
      <>
          <Header/>
          <Grid container spacing={0} marginX={1} marginTop={-1}>
              {user && (
              <Grid item md={2.8}>
                  <ListItem><Sidebar/></ListItem>
              </Grid>)}
                  <Grid item md={user ? 9 : 12}>
                      <ListItem>{children}</ListItem>
                  </Grid>
          </Grid>
          <Footer/>
      </>
  )
}

export default Layout
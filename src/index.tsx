import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/Routes'
import styles from './index.css'
import * as firebase from 'firebase/app'
import  'firebase/firestore'
import 'firebase/auth'
import {AuthProvider} from './providers/AuthProvider'



// Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyBofYwEEoj7Mkg3_1Rstn681D_5qAPRwAs",
    authDomain: "lgtu-aecdc.firebaseapp.com",
    projectId: "lgtu-aecdc",
    storageBucket: "lgtu-aecdc.appspot.com",
    messagingSenderId: "630041823872",
    appId: "1:630041823872:web:014cdcf3df1be5028db465"
})




ReactDOM.render(
    <React.StrictMode>
        <div className={styles.wrapper}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </div>
    </React.StrictMode>,

    document.getElementById('root')

);


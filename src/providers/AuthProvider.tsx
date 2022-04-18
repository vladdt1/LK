import {createContext, FC, useEffect, useState, useMemo} from 'react'
import {IUser, TypeSetState} from '../layout/auth/types'
import { onAuthStateChanged, getAuth, Auth} from 'firebase/auth'
import React from 'react'
import {useHistory} from 'react-router-dom'

interface IContext{
    user: IUser | null
    setUser: TypeSetState<IUser | null>
    ga: Auth
}


export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null)

    const ga = getAuth()

    const history = useHistory()

    useEffect(() => {

        const unlisten = onAuthStateChanged(ga,authUser => {
            if(authUser)
            setUser(
                {
                    _id: authUser.uid,

                    name: authUser?.displayName || '',
                }
            )
            else
                setUser(null)

        })
        return() => {
            unlisten()
        }
    }, [])


    const values = useMemo(() => ({
        user,
        setUser,
        ga
    }), [user, ga])


    return(
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
    )
}
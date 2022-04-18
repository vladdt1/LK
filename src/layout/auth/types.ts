import {Dispatch, SetStateAction} from 'react'

export interface IUserData{
    login: string
    password: string
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser {
    _id: string
    name:string
    isInNetwork?: boolean
}

import React, {FC} from 'react'
import UserItem from './UserItem'
import Menu from './Menu'


const Sidebar:FC = () => {
    return(
        <div>
            <UserItem />
            <Menu />
        </div>
    )
}

export default Sidebar
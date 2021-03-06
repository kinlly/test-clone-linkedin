import React from 'react'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOptions.css'

function Headeroptions({ Icon, avatar, title, onClick, idTag }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick}
            id={idTag}
            className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>)}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default Headeroptions

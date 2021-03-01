import React from 'react'
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1496964253150-08379c084a68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                <Avatar src={user?.photoUrl}>{user.name}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <div className="sidebar__statNumber">32</div>
                </div>
                <div className="sidebar__stat">
                    <p>Contacts</p>
                    <div className="sidebar__statNumber">1910</div>
                </div>
                <div className="sidebar__statPremium">
                    <a href="#">Access exclusive tools & insights</a>
                    <a className="premiumText" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                        <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                        </svg>    
                    Try Premium Free for 1 Month
                    </a>
                </div>
                <div className="sidebar__statItems">
                <a className="itemsText" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                    </svg>  
                    My items
                    </a>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('fullstack')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}


export default Sidebar


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
                <Avatar clssName="sidebar__avatar" />
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


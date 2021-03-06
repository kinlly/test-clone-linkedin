import React from 'react'
import './Header.css'
import Headeroptions from './Headeroptions';
import SearchIcon from '@material-ui/icons/Search';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';


function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="header__right">
                    <Headeroptions idTag="home" Icon={Home} title="Home" />
                    <Headeroptions idTag="network" Icon={SupervisorAccount} title="My Network" />
                    <Headeroptions idTag="jobs" Icon={BusinessCenter} title="Jobs" />
                    <Headeroptions idTag="chat" Icon={Chat} title="Messaging" />
                    <Headeroptions idTag="notifications" Icon={Notifications} title="Notifications" />
                    <Headeroptions
                        idTag="logout"
                        onClick={logoutOfApp}
                        avatar={true} title="me" />
                </div>
            </div>
        </div>
    )
}

export default Header
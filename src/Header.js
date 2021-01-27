import React from 'react'
import './Header.css' 
import Headeroptions from './Headeroptions';
import SearchIcon from '@material-ui/icons/Search';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@material-ui/icons';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <Headeroptions Icon={Home} title="Home"/>
                <Headeroptions Icon={SupervisorAccount} title="My Network"/>  
                <Headeroptions Icon={BusinessCenter} title="Jobs"/> 
                <Headeroptions Icon={Chat} title="Messaging"/> 
                <Headeroptions Icon={Notifications} title="Notifications"/>
                
                <Headeroptions avatar={Notifications} title="me"/>
            </div>            
            
        </div>
    )
}

export default Header
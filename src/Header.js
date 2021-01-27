import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <h1>This is header test</h1>

            <div className="header__left">
                <img src="" alt=""/>
                <div className="header__search">
                    <input type="text"/>
                    {/* icon of search */}
                </div>
            </div>
            <div className="header__right">
                
            </div>            
            
        </div>
    )
}

export default Header
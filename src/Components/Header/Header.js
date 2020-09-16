import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div className='navbar navbar-dark navbar-expand-lg' style={{'backgroundColor': '#1d357c'}}>
            <div className='navbar-brand  col-lg-9'>
                <h1>ContactBook</h1>
            </div>
            <ul className='navbar-nav'>
                <li className='navbar-item'>
                <NavLink to="/" className="nav-link" >Все контакты</NavLink>
                </li>
                <li className='navbar-item'>
                <NavLink to="/other" className="nav-link" >Другая информация</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
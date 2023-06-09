import React from 'react'
import './navBar.scss'
import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'

export default function NavBar() {
  return (
    <nav className="main-nav">
        <Link className="main-nav--logo" to="/">
            <img className="main-nav--logo--image" src={ argentBankLogo } alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            <Link to="/login" className="main-nav--item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </div>
    </nav>
  )
}

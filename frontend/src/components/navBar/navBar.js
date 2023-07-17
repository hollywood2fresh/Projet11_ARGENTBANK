import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { signout } from '../../redux/reducers/user'

import './navBar.scss'
import argentBankLogo from '../../assets/argentBankLogo.png'

export default function NavBar() {

    const { isLoggedIn } = useSelector((state) => state.user)

    const userName = useSelector(state => state.user.user.userName)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(signout())
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav--logo" to="/">
                <img 
                    className="main-nav--logo--image" 
                    src={argentBankLogo} 
                    alt="Argent Bank Logo" 
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                { isLoggedIn ?
                <Link className="main-nav--item" to="/profile" >
                    <i className="fa fa-user-circle"></i>
                    { userName }
                </Link> : ""
                }
                <a className="main-nav--item" href={isLoggedIn ? '/' : '/sign-in'} onClick={logout}>
                    <i className={isLoggedIn ?  "fa fa-check" : "fa fa-user-circle"}></i>
                    { isLoggedIn ?  'Sign Out' : 'Sign In'}
                </a>
            </div>
        </nav>
    )
}

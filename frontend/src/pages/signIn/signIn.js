import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogIn } from '../../redux/reducers/user'
import { useNavigate } from "react-router-dom";
import './signIn.scss'

export default function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoggedIn } = useSelector((state) => state.user);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

    const status = useSelector((state) => state.user.status)
    const error = useSelector((state) => state.user.error)

    if (isLoggedIn){
        navigate('/profile')
    }

    return (
        <>
            <NavBar/>  
            <div className="form_container">
                <main className="main bg-dark"> 
                <section className="sign--in-content">
                    <i className="fa fa-user-circle sign--in-icon"></i>
                    <h1>Sign In</h1>
                    <form id="logIn">
                        <div className="input--wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input--wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {status === 'error' &&
                            <div className="errorMessage" id="errorText">{ error }</div>
                        }
                        <div className="input--remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button 
                            href="./user.html" 
                            className="sign--in-button" 
                            onClick={(e) => {
                                e.preventDefault()
                                dispatch(userLogIn({ email:email, password:password }))
                            }}>
                            Sign In
                        </button>
                    </ form>
                </section>
                </main>
            </div>
            <Footer/>
        </>
    )
}

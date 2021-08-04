import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import './Login.css';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth.user){
                history.push("/")
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }

    const register = e =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth.user){
                history.push("/")
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo" 
                    height="100px"
                    src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" name="email" onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" name="password" onChange={e=>setPassword(e.target.value)}/>

                    <button className="login__loginBtn" type="submit" onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing in you agree to Amazon Clone's <a>Conditions of Use</a> and <a>Privacy Notice.</a>
                </p>

                <button className="login__registerBtn" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
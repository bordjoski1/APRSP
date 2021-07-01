import React, { useState } from 'react';
import ReactRoutes from '../config/ReactRoutes';
import LoginService from '../services/LoginService';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    function login(e) {
        e.preventDefault()
        LoginService.login(email, password)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            setErrorMessage(error)
           console.log(error)
        });
    }

    return (
        <div>
            <div className="simple-slider">
                <div className="swiper-container">
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
            <div className="login-clean" style={{backgroundImage: "url(assets/img/slider1.jpg)", backgroundRepeat:" no-repeat", backgroundPosition:" center", backgroundSize: " cover", padding:" 149px 0", opacity:" 0.75", filter:" blur(0px)"}}>
                <form method="post" style={{opacity: "0.88", filter: "blur(0px)"}}>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration"><i className="icon ion-ios-navigate" style={{color: "rgb(42,41,41)"}}></i></div>
                    <div className="form-group"><input onChange={e => setEmail(e.target.value)} className="form-control" type="email" name="email" placeholder="Email" style={{backgroundColor: "rgb(197,198,200)"}}/></div>
                    <div className="form-group"><input onChange={e => setPassword(e.target.value)} className="form-control" type="password" name="password" placeholder="Password" style={{backgroundColor: "rgb(197,198,200)"}}/></div>
                    <p style={{color:"red"}}>{errorMessage!==""? errorMessage: ""}</p>
                    <div className="form-group"><button onClick={login} className="btn btn-primary btn-block" type="submit" >Log In</button></div><a className="forgot" href={ReactRoutes.REGISTER}>Don't have an account? Sign Up</a></form>
            </div>
        </div>
    )
}

export default Login;
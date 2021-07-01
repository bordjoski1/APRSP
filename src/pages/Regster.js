import React, { useState } from 'react';
import ReactRoutes from '../config/ReactRoutes'
import {db} from '../firebase';
import RegisterService from '../services/RegisterService';

function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    function registration(e) {
        e.preventDefault()
        RegisterService.register(email, password)
        .then((response) => 
            db.collection("users").doc(response.uid).set({
                username: username,
                email: email, 
                password: password
            })
        )
        .catch(error => {
            setErrorMessage(error)
            console.log(error)
        })
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
                    <h2 className="sr-only">Register Form</h2>
                    <div className="illustration"><i className="icon ion-ios-navigate" style={{color: "rgb(42,41,41)"}}></i></div>
                    <div className="form-group"><input onChange={e=> setUsername(e.target.value)} className="form-control" type= "text" name="username" placeholder="Username"/></div>
                    <div className="form-group"><input onChange={e=> setEmail(e.target.value)} className="form-control" type="email" name="email" placeholder="Email" style={{backgroundColor: "rgb(197,198,200)"}}/></div>
                    <div className="form-group"><input onChange={e=> setPassword(e.target.value)} className="form-control" type="password" name="password" placeholder="Password" style={{backgroundColor: "rgb(197,198,200)"}}/></div>
                    <p style={{color:"red"}}>{errorMessage!==""? errorMessage: ""}</p>
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit" onClick={registration} >Register</button></div><a className="forgot" href={ReactRoutes.LOGIN}>Have an account? Sign In</a></form>
            </div>
        </div>
    )
}

export default Register;
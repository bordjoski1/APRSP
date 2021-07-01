import React from 'react';
import ReactRoutes from '../config/ReactRoutes';
import {auth} from '../firebase';
import UserUtility from '../utility/UserUtility';

function Nav () {

    function isLoggedin()
    {
        if(UserUtility.isLoggedIn())
        {
            return (
                <span className="navbar-text actions"> <a onClick={() => logOut()} className="login" href="/">Log Out</a></span>
            )
        }
        else {
            return (
                <span className="navbar-text actions"> <a className="login" href={ReactRoutes.LOGIN}>Log In</a>
                <a className="btn btn-light action-button" role="button" href={ReactRoutes.REGISTER} style={{backgroundColor: "rgb(79,84,84)"}}>Sign Up</a></span>
            )
        }
    }

    function logOut() {
        auth.signOut().then(() => {
            localStorage.clear()
            window.location.href = ReactRoutes.HOME
        })
    }

    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
        <div className="container"><a className="navbar-brand" href={ReactRoutes.HOME}>Market</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
                id="navcol-1">
                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item" role="presentation"><a className="nav-link" href={ReactRoutes.FRUITSVEGGIES}>Voce i povrce</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href={ReactRoutes.MEATS}>Mesni proizvodi</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href={ReactRoutes.DRINKS}>Pice</a></li>
                    {/* <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                    </li> */}
                </ul>
                {isLoggedin()}
                {/* <span className="navbar-text actions"> <a className="login" href={ReactRoutes.LOGIN}>Log In</a>
                <a className="btn btn-light action-button" role="button" href={ReactRoutes.REGISTER} style={{backgroundColor: "rgb(79,84,84)"}}>Sign Up</a></span> */}
                </div>
        </div>
    </nav>
    )
}

export default Nav;

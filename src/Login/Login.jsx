import React, { Component } from 'react'
import './Login.css'

import InputLogin from '../components/Inputs/Login/InputLogin'
import ButtonLogin from '../components/Buttons/Login/ButtonLogin'


export default class Login extends Component {
    render() {
        return (
            <div id="login" className="d-flex justify-content-center align-items-center">
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">
                                    <h3 className="text-center text-info">Login</h3>
                                    <InputLogin />
                                    <ButtonLogin />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
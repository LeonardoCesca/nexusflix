import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    
        this.handleUserName = this.handleUserName.bind(this)
    
    }

    handleUserName(event) {
        this.setState({
            username: event.target.value
        })
    } 
    


    render() {
        return (
            <div className="login">
                <h1 className="login-title">Login</h1>
                <form className="form">

                <label className="form-label">Login</label>
                <input className="form-input" type="text" value={this.state.username} onChange={this.handleUserName}/>

                <label className="form-label">Senha</label>
                <input className="form-input" type="password" />
        
                <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}
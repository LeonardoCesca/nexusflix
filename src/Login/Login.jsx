import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            verify: false,
        };
    
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
    }

    handleUserName(event) {
        this.setState({
            username: event.target.value
        })
 
    } 

    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event) {
        if(this.state.password === 'admin' && this.state.username === 'admin') {
            this.props.history.push("/Home");
        }else{
            console.log('no')
        }
        event.preventDefault()
    }


    render() {
        return (
            <div className="login">
                <h1 className="login-title">Login</h1>
                <form className="form" onSubmit={this.handleSubmit}>

                    <label className="form-label">Login</label>
                    <input className="form-input" type="text" value={this.state.username} onChange={this.handleUserName} />

                    <label className="form-label">Senha</label>
                    <input className="form-input" type="password" value={this.state.password} onChange={this.handlePassword} />

                    <button type="submit">Entrar</button>
                </form>
            </div>
        )
    }
}
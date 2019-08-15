import React, { Component } from 'react'
import './Login.css'

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
            <div className="container">
                <div className="login">
                    <h1 className="login-title">Nexusflix</h1>
                    <form className="form" onSubmit={this.handleSubmit}>

                        <label className="form-label">Login</label>
                        <input className="form-input" type="text" placeholder="Digite seu usuário" value={this.state.username} onChange={this.handleUserName} />

                        <label className="form-label">Senha</label>
                        <input className="form-input" type="password" placeholder="Digite sua senha" value={this.state.password} onChange={this.handlePassword} />

                        <button className="form-btn" type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        )
    }
}
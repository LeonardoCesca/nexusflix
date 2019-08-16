import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")

        let logged = true

        if(token == null) {
            logged = false
        }

        this.state = {
            username: '',
            password: '',
            error: '',
            logged
        };
    
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dismissError = this.dismissError.bind(this);
    
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
        if( this.state.username === 'admin' && this.state.password === 'admin') {
            localStorage.setItem("token", "eahuehueahueaueaheahue")
            this.setState({ 
                logged: true
            });
        }else if(this.state.username !== 'admin' || this.state.password !== 'admin') {
            this.setState({ error: 'usuário ou senha incorretos' });
        }
        event.preventDefault()
    }

    dismissError() {
        this.setState({ error: '' });
    }


    render() {
        if(this.state.logged) {
            return <Redirect to="/home" />
        }
        return (
            <div className="container">
                <div className="login">
                    <h1 className="login-title">Nexusflix</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label className="form-label">Login</label>
                        <input className="form-input" type="text" placeholder="Digite seu usuário" value={this.state.username} onChange={this.handleUserName} required/>

                        <label className="form-label">Senha</label>
                        <input className="form-input" type="password" placeholder="Digite sua senha" value={this.state.password} onChange={this.handlePassword} required />

                            {
                                this.state.error &&
                                <h3 className="form-title-error" data-test="error" onClick={this.dismissError}>
                                {this.state.error}
                                <button className="form-btn-error" onClick={this.dismissError}>✖</button>
                                </h3>
                            }
                        <button className="form-btn" type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        )
    }
}
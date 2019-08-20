import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import admin from '../assets/img/admin.png'
 
import "../assets/css/Profile.css"

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Admin',
            password: '*****',
            email: 'admin@admin.com',
        }
    }
    render() {
        return (
            <div className="profile">
                <h1 className="profile__title">Profile</h1>
                <Link to="/Home" className="profile__back">Voltar</Link>
                <div className="profile__container">
                <div className='profile__container--princ'>
                    <div className='profile__pdd'>
                    <img src={admin} alt="" className='profile__img'/>
                    <div className="profile__box">
                        <p className='profile__subtitle'>Nome: {this.state.username}</p>
                        <p className='profile__subtitle'>Senha: {this.state.password}</p>
                        <p className='profile__subtitle'>Email: {this.state.email}</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

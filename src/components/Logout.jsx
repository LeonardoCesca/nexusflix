import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import emoji from '../assets/img/emoji.png'
import '../assets/css/Logout.css'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div className='logout'>
                <img src={ emoji } alt="" className='logout__img' />
                <h1 className='logout__title'>Você saiu.</h1>
                <span className='logout__text'> Espero ver você em breve.</span>
                <div className='logout__link'>
                <Link to="/">Login</Link>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import '../assets/css/Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">Profile</li>
                        <li className="nav__item">Main Movie</li>
                        <li className="nav__item">Play Movies</li>
                        <li className="nav__item">Metrics</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

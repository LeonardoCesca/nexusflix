import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li className="nav__item">Main Movie</li>
                        <li className="nav__item">
                            <Link to="/play">Play Movies</Link>
                        </li>
                        <li className="nav__item">Metrics</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

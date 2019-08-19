import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Nav from '../components/Nav'
import './Home.css'

export default class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let logged = true

        if(token == null) {
            logged = false
        }

        this.state = {
            logged
        }
    }

    render() {
        if(this.state.logged === false) {
            return <Redirect to="/" />
        }
        return (
            <div className='home'>
            <Nav />
                <h1 className='home__title'>Filmes</h1>
                <Link to="/logout" className='home__link'>Logout</Link>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

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
            <div>
                <h1>Admin</h1>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}

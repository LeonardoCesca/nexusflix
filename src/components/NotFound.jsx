import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "../assets/css/NotFound.css"

export default class NotFound extends Component {
    render() {
        return (
            <div className='notFound'>
                <h1>Página não encontrada :(</h1>
                <Link to="/Home" className="notFound__back">Voltar</Link>
            </div>
        )
    }
}

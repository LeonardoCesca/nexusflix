import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "../assets/css/Play.css"

export default class Play extends Component {
    render() {
        return (
            <div className='play'>
            <h1 className='play__title'>Play</h1>
            <Link to="/Home" className="play__back">Voltar</Link>
            <div className='play__iframe'>  
                <iframe title='movie' width="700" height="500" src="https://www.youtube.com/embed/RSfxQBOY0qA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Nav from '../components/Nav'
import '../assets/css/Home.css'
import axios from 'axios';

export default class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let logged = true

        if(token == null) {
            logged = false
        }

        this.state = {
            logged,
            movies: [],
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/4/list/1?api_key=ac5dac766e6963d55bc2b64eeccb98bb')
            .then(response => response.data.results)
            .then((data) => {
                this.setState({ movies: data })
                console.log(this.state.movies)
            })
    }


    render() {
        if(this.state.logged === false) {
            return <Redirect to="/" />
        }
        const image = `http://image.tmdb.org/t/p/w185/`
        return (
            <div className='home'>
            <Nav />
                <h1 className='home__title'>Filmes</h1>
                <div className='home__container'>
                    <div className='home__container--princ'>
                {this.state.movies.map((movie) => (
                    <div className='home__pdd'>
                    <img src={image + movie.poster_path} alt=""/> 
                    <p className='home__subtitle'>{movie.original_title}</p>
                    </div>
                    ))}
                    </div>
                </div>
                <Link to="/logout" className='home__link'>Logout</Link>
            </div>
        )
    }
}

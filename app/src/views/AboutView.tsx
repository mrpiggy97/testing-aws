import React from 'react'
import logo from '../logo.svg'

import { useHistory } from 'react-router-dom'

import "../App.css"

export default function AboutView() : JSX.Element{

    const history = useHistory()

    const goToHome = (e : React.MouseEvent) => {
        e.preventDefault()
        history.push("/")
    }
    return(
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                this is the about page
            </p>
            <span onClick={goToHome}>click here to go home</span>
        </div>
    )
}
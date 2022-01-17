import React,{useState} from 'react'
import logo from '../logo.svg'

import { useHistory } from 'react-router-dom'

import "../App.css"

export default function AboutView() : JSX.Element{

    const history = useHistory()

    const goToHome = (e : React.MouseEvent) => {
        e.preventDefault()
        history.push("/")
    }
    const [greeting,setGreeting] = useState("yahallo")
    const changeGreeting = (e : React.MouseEvent) : void => {
        e.preventDefault()
        if (greeting === "yahallo"){
            setGreeting("ohayo")
        }else{
            setGreeting("yahallo")
        }
    }
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    this is the about page
                </p>
                <span onClick={goToHome}>click here to go home</span>
                <span>{greeting}</span>
                <span onClick={changeGreeting}>change greeting</span>                
            </header>
        </div>
    )
}
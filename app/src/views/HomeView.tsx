import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { useHistory } from 'react-router-dom'

export default function HomeView() : JSX.Element {

    const history = useHistory()

    const goToHome = (e : React.MouseEvent) => {
        e.preventDefault()
        history.push("/about")
    } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>this is an app deployed with azure app service</span>
        <span onClick={goToHome}>about</span>
      </header>
    </div>
  );
}
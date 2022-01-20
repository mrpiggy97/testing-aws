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

    const printNumbers = (e : React.MouseEvent) => {
      e.preventDefault()
      let numbers : number[] = [1,2,333,44,1]
      numbers.forEach((n : number) => {
        alert(n)
      })
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>this is an app deployed with aws ecs copilot CLI</span>
        <span>app is hosted on aws route53</span>
        <span onClick={goToHome}>about</span>
        <span onClick={printNumbers}>get numbers</span>
      </header>
    </div>
  );
}
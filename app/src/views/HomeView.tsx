import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { useHistory } from 'react-router-dom'

import getNumbers from '../services/getNumbers'
import { stringify } from 'querystring';

export default function HomeView() : JSX.Element {

    const history = useHistory()

    const goToHome = (e : React.MouseEvent) => {
        e.preventDefault()
        history.push("/about")
    }

    const retrieveNumbers = async (e : React.MouseEvent) => {
      e.preventDefault()
      try {
        let response = await getNumbers()
        console.log(response.data)
        let data : string = stringify(response.data)
        alert(data)
      } catch (error) {
        alert("there was an error")
        console.log(error)
      }
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>this is an app deployed with azure app service</span>
        <span onClick={goToHome}>about</span>
        <span onClick={retrieveNumbers}>get numbers</span>
      </header>
    </div>
  );
}
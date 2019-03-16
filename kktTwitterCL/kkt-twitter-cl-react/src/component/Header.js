import '../App.css';
import React from 'react'

export const Header = (props) => {
    return ( 
        <header className="App-header"> 
            {props.title}
        </header>)
}
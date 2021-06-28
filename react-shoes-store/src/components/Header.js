import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Trabalho 3</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">                        
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/client">Clientes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/seller">Vendedor</a>
                            </li>    
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/client">Calçado</a>
                            </li>                     
                        </ul>                
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
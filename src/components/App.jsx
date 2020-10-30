import React from "react"
import { Router, Link, navigate } from "@reach/router";
import Home from "./Home"
import NavBar from "./NavBar"
import Orders from "./Orders";
import Profile from "./Profile";
import Contactus from "./Contactus";
import Shops from "./Shops";
import Shop from "./Shop";


export default function App(props) {
    console.log(props.location)
    return (
        <div>
            <NavBar/>
            <Router>
                <Home default path='/'/>
                <Orders path='orders'/>
                <Profile path='profile'/>
                <Contactus path='/contactus'/>
                <Shops path='/shops/:id' />
                <Shop path='/shops/:id/shop/:sid'/>
            </Router>
        </div>
    )
}

import React, {Component} from "react";
import Login from "../Components/Login/Login";
import Nav from "../Components/NavBar/Nav";
import LeftSideBar from "../Components/LeftSideBar/LeftSideBar";
import {Route, Router, Switch} from "react-router";
import Home from "../Components/Home/Home";
import SongPlay from "../Components/SongPlay/SongPlay";

class Spotify extends Component{
    render() {
        return(
            <div>
                <Nav/>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' component={Home}/>
                </Switch>
                <SongPlay /> 
            </div>


            
        );
    }
}
export default Spotify;

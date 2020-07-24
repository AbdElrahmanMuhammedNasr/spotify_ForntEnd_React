import React, {Component} from "react";
import Login from "../Components/Login/Login";
import Nav from "../Components/NavBar/Nav";
import {Route, Router, Switch} from "react-router";
import Home from "../Components/Home/Home";
import SongPlay from "../Components/SongPlay/SongPlay";
import LeftSideBar from "../Components/LeftSideBar/LeftSideBar";

class Spotify extends Component{
    render() {
        return(
            <div>
                <Nav/>
                <div className='row'>

                    <section className='col-sm-2'>
                        <LeftSideBar />
                    </section>

                    <section className='col-sm-10'>
                        <Switch>
                         <Route path='/login' component={Login}/>
                         <Route path='/home' component={Home}/>
                        </Switch>
                    </section>

                </div>
                
                <SongPlay /> 
            </div>


            
        );
    }
}
export default Spotify;

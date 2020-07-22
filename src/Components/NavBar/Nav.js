import React ,{Component} from "react";
import {NavLink} from "react-router-dom";
import pro from './abdo.jpg'
class Nav extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#" style={{color:'white'}}>Spotify</a>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink
                                className="nav-link"
                                style={{color:'white'}}
                                to={{
                                    pathname:'/Home'
                                }}> Home

                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                style={{color:'white'}}
                                to={{
                                    pathname:'/login'
                                }}>Login</NavLink>

                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                            <NavLink
                                className="nav-link"
                                style={{color:'white'}}
                                to={{
                                    pathname:'/profile'
                                }}>

                                <span>
                                    <h3>AbdElrahman Nasr</h3>
                                </span>

                            </NavLink>

                        </li>
                        <li className="nav-item">
                                <span>
                                     <img src={pro} style={{
                                         height:'50px',
                                         borderRadius:'50%',
                                         width:'50px',}}/>
                                </span>
                        </li>


                    </ul>



                </div>
            </nav>
        )
    }

}
export default Nav;

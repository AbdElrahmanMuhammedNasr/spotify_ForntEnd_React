import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './LeftSide.css'
class LeftSideBar  extends Component{
    render() {
        return(
            <div  className='row '  style={{
                padding:'25px ',
                backgroundColor:'transparent',
                height:'95vh',
                overflowY:'scroll',
                display:'block'

            }}>
                <input  className='form-control'  placeholder='Search'/>
                <div style={{margin:'50px 0px'}}>
                    <h3 style={{color:'white'}}>Main</h3>

                    <NavLink to={{pathname:'/home'}} className=" btn btn "    >
                        <span style={{color:'white'}}>Home</span>
                    </NavLink>

                    <NavLink to={{pathname:'/home/browse'}} className=" btn btn"    >
                        <span style={{color:'white'}}>Browse</span>
                    </NavLink>



                    <NavLink to={{pathname:'/radio'}} className="   btn btn "    >
                        <span style={{color:'white'}}>Radio</span>
                    </NavLink>
                </div>



                <div style={{margin:'50px 0px'}}>
                    <h3 style={{color:'white'}}>Your Library</h3>
                    <NavLink to={{pathname:'/forYou'}} className="   btn btn"    >
                        <span style={{color:'white'}}>For You</span>
                    </NavLink>

                    <NavLink to={{pathname:'/recently'}} className="   btn btn "    >
                        <span style={{color:'white'}}>Recently Played</span>
                    </NavLink>

                    <NavLink to={{pathname:'/LikedSong'}} className="   btn btn "    >
                        <span style={{color:'white'}}>Liked Songs</span>
                    </NavLink>

                    <NavLink to={{pathname:'/Albums'}} className="   btn btn "    >
                        <span style={{color:'white'}}>Albums</span>
                    </NavLink>


                    <NavLink to={{pathname:'/Artist'}} className="   btn btn "    >
                        <span style={{color:'white'}}>Artist</span>
                    </NavLink>

                </div>




                <div style={{margin:'50px 0px'}}>
                    <h3 style={{color:'white'}}>PlayLists</h3>

                    <NavLink to={{pathname:'/element'}} className="   btn btn "    >
                        <span style={{color:'white'}}>English</span>
                    </NavLink>

                    <NavLink to={{pathname:'/Artist'}} className="   btn btn "    >
                        <span style={{color:'white'}}>Arabic</span>
                    </NavLink>
                    <NavLink to={{pathname:'/element'}} className="   btn btn "    >
                        <span style={{color:'white'}}>English</span>
                    </NavLink>
                </div>

                {/*<NavLink to={{pathname:'/Artist'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>Arabic</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}

                {/*<NavLink to={{pathname:'/Artist'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>Arabic</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}

                {/*<NavLink to={{pathname:'/Artist'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>Arabic</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}

                {/*<NavLink to={{pathname:'/Artist'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>Arabic</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}
                {/**/}
                {/*<NavLink to={{pathname:'/Artist'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>Arabic</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}

                {/*<NavLink to={{pathname:'/Artist'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>Arabic</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}

                {/*<NavLink to={{pathname:'/Artist'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>Arabic</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={{pathname:'/element'}} className="   btn btn "    >*/}
                {/*    <span style={{color:'white'}}>English</span>*/}
                {/*</NavLink>*/}







            </div>
        )
    }

}
export default LeftSideBar;

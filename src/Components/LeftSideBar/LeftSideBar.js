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
                <div style={{margin:'50px 0px'}}>
                    <h3 style={{color:'white'}} >Main</h3>
                    <section style={{padding:'0px 20px'}}>

                        <NavLink to={{pathname:'/home'}}    >
                            <span style={{color:'white'}} className="d-block">Home</span>
                        </NavLink>

                        <NavLink to={{pathname:'/home/browse'}}    >
                            <span style={{color:'white'}} className="d-block">Browse</span>
                        </NavLink>

                    </section>



                </div>



                <div style={{margin:'50px 0px'}}>
                    <h3 style={{color:'white'}} >Your Library</h3>

                    <section style={{padding:'0px 20px'}}>

             

                    <NavLink to={{pathname:'/recently'}}  >
                        <span style={{color:'white'}} className="d-block">Recently Played</span>
                    </NavLink>

                    <NavLink to={{pathname:'/LikedSong'}}  >
                        <span style={{color:'white'}} className="d-block">Liked Songs</span>
                    </NavLink>


                    <NavLink to={{pathname:'/Artist'}}  >
                        <span style={{color:'white'}} className="d-block">Artist</span>
                    </NavLink>
                </section>
                   

                </div>




                {/* <div style={{margin:'50px 0px'}}>
                    <h3 style={{color:'white'}} className="d-block">PlayLists</h3>
                    <section style={{padding:'0px 20px'}}>

                        <NavLink to={{pathname:'/element'}}  >
                            <span style={{color:'white'}} className="d-block">English</span>
                        </NavLink>

                        <NavLink to={{pathname:'/Artist'}}  >
                            <span style={{color:'white'}} className="d-block">Arabic</span>
                        </NavLink>
                        <NavLink to={{pathname:'/element'}}  >
                            <span style={{color:'white'}} className="d-block">English</span>
                    </NavLink>
                    </section>

                </div> */}

                

            </div>
        )
    }

}
export default LeftSideBar;

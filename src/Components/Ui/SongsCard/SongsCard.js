import React,{Component} from "react";
import {NavLink} from "react-router-dom";
class SongsCard extends Component{
    render() {
        return(
            <NavLink
                to={{
                    pathname:'/Home/band'
                }}
            >
                <div className="card col" 
                        style={{
                        width: "18rem", 
                        margin:'10px', 
                        backgroundColor:'transparent',
                        cursor:'pointer'
                        }}
                        >
                            <img src={this.props.card.image} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color:'white'}}>{this.props.card.name}</h5>
                                <p className="card-text" style={{color:'white'}}>{this.props.card.dic}</p>
                                <p className="card-text" style={{color:'white'}}>{this.props.card.follower} Followers</p>
                            </div>
                 </div>
                </NavLink>

                
        )
    }

}
export default SongsCard;

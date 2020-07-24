import React,{Component} from "react";
class SongsCard extends Component{
    render() {
        return(
                <div className="card col " style={{width: "18rem", margin:'10px',  backgroundColor:'transparent', cursor:'pointer'}}>
                    <img src={this.props.card.image} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'white'}}>{this.props.card.name}</h5>
                        <p className="card-text" style={{color:'white'}}>{this.props.card.dic}</p>
                        <p className="card-text" style={{color:'white'}}>{this.props.card.follower} Followers</p>
                    </div>
                </div>
        )
    }

}
export default SongsCard;

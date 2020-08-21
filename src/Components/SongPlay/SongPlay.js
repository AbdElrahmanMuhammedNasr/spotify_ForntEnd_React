import React, {Component} from "react";
import logo from './9.jpg';

class SongPlay extends Component{
    state ={
        sound: 80,
        song:50
    }

    ChangeSound(event, type){
        if(type === "song"){
            this.setState({
                song: event.target.value
            });
        }
        else{
            this.setState({
                sound: event.target.value
            });
        }
       
    }
    render(){
        return(
            <div style={{
                width:'100%',
                height:'100px',
                overflow:'hidden'
            }} className='row'>

                {/*<section className="col-sm-3 row" style={{padding:'20px 20px'}}>*/}
                {/*        <section className="col-sm-2" >*/}
                {/*            <img style={{width:'150%', height:'90%', borderRadius:'50%'}} src={logo}/>*/}
                {/*        </section>*/}
                {/*        <section className="col-sm-10" style={{color:'white'}}>*/}
                {/*            <h3>Thander</h3>*/}
                {/*            <p>Image Dragon</p>*/}
                {/*        </section>*/}
                {/*</section>*/}
                <section className="col-sm-7" style={{}} >

                    <section className="row"style={{width:'100%',margin:'auto0 ', padding:'10px'}}>
                        <span  className="fa fa-play-circle" style={{fontSize:'50px', color:"white", margin:'0px auto'}}></span>
                    </section>

                    <section>

                    <div className="slidecontainer" style={{width:'100%'}}>
                        <input style={{width:'100%'}} type="range" min="1" max="100" value={this.state.song} className="slider" onChange={(event)=>this.ChangeSound(event,"song")} />
                    </div>
                  
                    </section>
                </section>
                {/*<section className="col-sm-2 row" style={{margin:"auto", color:'white'}}>*/}
                {/*        <span className="fa fa-volume-up col-sm-2"></span>*/}

                {/*        <div className="slidecontainer">*/}
                {/*                <input type="range" min="1" max="100" value={this.state.sound} className="slider" onChange={(event)=>this.ChangeSound(event,"sound")} />*/}
                {/*        </div>*/}
                {/*</section>*/}

                
            </div>
        )
    }

}
export default SongPlay;

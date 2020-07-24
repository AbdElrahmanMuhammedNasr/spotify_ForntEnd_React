import React, {Component} from "react";
import logo from './9.jpg'
class SongPlay extends Component{
    render(){
        return(
            <div style={{
                width:'100%',
                height:'100px',
                backgroundColor:"#494949"
            }} className='row'>

                <section className="col-sm-3 row" style={{padding:'20px 20px'}}>
                        <section className="col-sm-2" >
                            <img style={{width:'150%', height:'90%', borderRadius:'50%'}} src={logo}/>
                        </section>
                        <section className="col-sm-10" style={{color:'white'}}>
                            <h3>Thander</h3>
                            <p>Image Dragon</p>
                        </section>
                </section>
                <section className="col-sm-7">
                    <section></section>
                    <section></section>
                </section>
                <section className="col-sm-2">
                    <p>Hi</p>
                </section>

                
            </div>
        )
    }

}
export default SongPlay;
import React, {Component} from "react";
import band from './band.jpg'
import Songs from "./Songs/Songs";
class BandList extends Component{
    state={
         Songs :[
            {
                number:1,
                name:'Drag',
                artist:'Tamer',
                album:'Thander',
                date:'12/10/2017',
                time:'6:20'
            },
            {
                number:2,
                name:'Drag',
                artist:'Tamer',
                album:'Darg',
                date:'12/10/2017',
                time:'4:20'
            },
            {
                number:3,
                name:'Drag',
                artist:'Ali',
                album:'Thander',
                date:'12/10/2017',
                time:'3:20'
            },{
                 number:4,
                 name:'Drag',
                 artist:'Tamer',
                 album:'Darg',
                 date:'12/10/2017',
                 time:'4:20'
             },
             {
                 number:5,
                 name:'Drag',
                 artist:'Ali',
                 album:'Thander',
                 date:'12/10/2017',
                 time:'3:20'
             },
        ]
    }
    render() {

        return(
            <div>
                <div >
                    <img src={band} style={{width:'98%', height:'50vh'}} />
                    <section style={{position:'absolute', top:'15vh', left:'36%', right:'40%'}} >
                        <h3 className='text-center' style={{color:'gold'}}>Tamer Ali</h3>
                        <h5 className='text-center' style={{color:'white'}}>By Spotify - check out Tamer videos and new songs </h5>
                        <div className='row'>
                            <button style={{margin:'20px',width:'150px', borderRadius:'20px'}} className='btn btn-success col' > Play </button>
                            <button style={{margin:'20px',width:'150px', borderRadius:'20px'}} className='btn btn-success col' > Follow</button>
                        </div>
                    </section>
                </div>
                <div style={{width:'90%', margin:'2vh auto'}}>
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Play</th>
                            <th scope="col">Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Album</th>
                            <th scope="col">Date</th>
                            <th scope="col">time</th>
                        </tr>
                        </thead>

                          {this.state.Songs.map(ele=> {
                              return(
                                  <Songs key={ele.number} song={ele}/>
                              )
                          })}

                    </table>
                </div>
            </div>
        )
    }

}
export default BandList;

import React,{Component} from "react";
import profile from "./1.jpg";
import SongsCard from "../../Ui/SongsCard/SongsCard";

class TheHome extends Component{
    state ={
        SondsList :[
            {
                image:profile,
                name:'Arabic Music',
                dic:'like a sea',
                follower:'2000'
            },{
                image:profile,

                name:'Englih Music',
                dic:'like a war',
                follower:'20'
            },{
                image:profile,

                name:'Arabic Music',
                dic:'like a sea',
                follower:'2000'
            },{
                image:profile,

                name:'Arabic Music',
                dic:'like a sea',
                follower:'2000'
            },
        ],
    }
    render() {
        return(
            <div style={{padding:'0px 30px'}}>
                <h1 style={{color:'white', fontSize:'60px'}}>Home</h1>

                <br/><br/>
                <h3 style={{color:'white', fontSize:'20px'}}>Recently Played</h3>

                <br/>
                <div className='row'>
                    {
                        this.state.SondsList.map(ele=>{
                            return(
                                <SongsCard card={ele} />
                            );
                        })
                    }
                </div>

                <br/><br/><br/>
                <h3 style={{color:'white', fontSize:'20px'}}>Made For You</h3>
                <br/>

                <div className='row'>
                    {
                        this.state.SondsList.map(ele=>{
                            return(
                                <SongsCard card={ele} />
                            );
                        })
                    }
                </div>

                <br/><br/><br/>
                <h3 style={{color:'white', fontSize:'20px'}}>Recommened Radio</h3>
                <br/>

                <div className='row'>
                    {
                        this.state.SondsList.map(ele=>{
                            return(
                                <SongsCard card={ele} />
                            );
                        })
                    }
                </div>
                <br/><br/><br/>
                <h3 style={{color:'white', fontSize:'20px'}}>New Release For you</h3>
                <br/>

                <div className='row'>
                    {
                        this.state.SondsList.map(ele=>{
                            return(
                                <SongsCard card={ele} />
                            );
                        })
                    }
                </div>




            </div>
        )
    }

}
export default TheHome;

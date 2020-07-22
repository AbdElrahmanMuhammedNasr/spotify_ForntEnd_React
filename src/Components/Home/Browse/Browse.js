import React,{Component} from "react";
import SongsCard from "./SongsCard/SongsCard";
import profile from "./1.jpg";
import Types from "./SongsType/SongsType";

class Browse extends Component{
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
        Types :[
            {type:'Music', image:profile},
            {type:'Rab', image:profile},
            {type:'Arabic', image:profile},
            {type:'workout', image:profile},
            {type:'Music', image:profile},
            {type:'Rab', image:profile},
            {type:'Music', image:profile},
            {type:'Rab', image:profile},
            {type:'Arabic', image:profile},
            {type:'workout', image:profile},
            {type:'Music', image:profile},
            {type:'Rab', image:profile},

        ]
    }
    render() {
        return(
            <div style={{padding:'0px 30px'}}>
                <h1 style={{color:'white', fontSize:'60px'}}>Browse</h1>

                <br/><br/>
                <h3 style={{color:'white', fontSize:'20px'}}>Your Morning Mix</h3>

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
                <h3 style={{color:'white', fontSize:'20px'}}>Genres & Mood</h3>
                <br/>
                <div >
                    {
                        this.state.Types.map(ele=>{
                            return(
                                <Types Types={ele} />
                            );
                        })
                    }
                </div>



            </div>
        )
    }

}
export default Browse;

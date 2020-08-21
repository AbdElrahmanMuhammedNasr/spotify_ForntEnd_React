import React,{Component} from "react";
import SongsCard from "../../Ui/SongsCard/SongsCard";
import profile from "./1.jpg";
import Types from "../../Ui/SongsType/SongsType";

class Browse extends Component{
    state ={
        SondsList :[
            {
            image:profile,
            name:'Arabic Music1',
            dic:'like a sea',
            follower:'2000'
            },{
                image:profile,
                name:'Englih Music2',
                dic:'like a war',
                follower:'20'
            },{
                image:profile,

                name:'Arabic Music3',
                dic:'like a sea',
                follower:'2000'
            },{
                image:profile,

                name:'Arabic Music4',
                dic:'like a sea',
                follower:'2000'
            },{
                image:profile,

                name:'Arabic Music5',
                dic:'like a sea',
                follower:'2000'
            },{
                image:profile,

                name:'Arabic Music6',
                dic:'like a sea',
                follower:'2000'
            },
        ],
        Types :[
            {type:'Music', image:profile},
            {type:'Rab', image:profile},
            {type:'Arabic', image:profile},
            {type:'workout', image:profile},
            {type:'Music1', image:profile},
            {type:'Rab1', image:profile},
            {type:'Music2', image:profile},
            {type:'Rab3', image:profile},
            {type:'Arabic4', image:profile},
            {type:'workout5', image:profile},
            {type:'Music6', image:profile},
            {type:'Rab7', image:profile},

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
                                <SongsCard card={ele}  key={ele.name}/>
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
                                <Types Types={ele}  key={ele.type}/>
                            );
                        })
                    }
                </div>



            </div>
        )
    }

}
export default Browse;

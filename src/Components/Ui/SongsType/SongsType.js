import React from "react";
const Types =(props)=>{
    return(
        <div className="card"
             style={{
                 width: "31rem",
                 margin:'10px ',
                 backgroundColor:'transparent',
                 cursor:'pointer',
                 backgroundImage: `url(${props.Types.image})`,
                 backgroundSize:'100%',
                 height:"200px",
                 textAlign:'center',
                 display:"inline-block"

             }}
        >
            <h3 style={{color:'white', margin:'auto'}}>{props.Types.type}</h3>
        </div>
    )
}
export default Types;

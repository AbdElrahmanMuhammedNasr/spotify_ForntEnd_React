import React from "react";

const Songs =(props)=>{
    return(
            <tbody>
                <tr>
                    <th scope="row"><li  className='fa fa-volume-up' style={{}}></li></th>
                    <td>{props.song.number}</td>
                    <td>{props.song.name}</td>
                    <td>{props.song.artist}</td>
                    <td>{props.song.album}</td>
                    <td>{props.song.date}</td>
                    <td>{props.song.time}</td>
                </tr>
            </tbody>



    );
}
export default Songs;

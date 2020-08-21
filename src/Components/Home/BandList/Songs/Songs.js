import React, {Component} from "react";

export class Songs extends Component{
    audio = new Audio(this.props.song.songLink);
    state= {
        play : false,
    }

    toggleSound=(number)=>{
          this.setState({active: number,play : !this.state.play},()=>{
            this.state.play ? this.audio.play() : this.audio.pause();
        })
    }

    render() {
        return(
            <tbody>
                <tr>
                    <th scope="row" >
                        <button className='btn btn-primary'  onClick={()=>this.toggleSound(this.props.song.number)}>
                            {this.state.play ? 'Stop' : 'Play'}
                        </button>
                    </th>
                    <td>{this.props.song.number}</td>
                    <td>{this.props.song.name}</td>
                    <td>{this.props.song.artist}</td>
                    <td>{this.props.song.album}</td>
                    <td>{this.props.song.date}</td>
                    <td>{this.props.song.time}</td>
                </tr>
            </tbody>

    )};
}
export default Songs;

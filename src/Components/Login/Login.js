import React, {Component} from "react";
import logo from './logo.png'
import './Login.css'
class Login extends Component{

    state ={
        FormData :{
            name:{
                name:'Name',
                inType:'text'
            },
            email:{
                name:'Email',
                inType:'email'
            },
            password:{
                name:'password',
                inType:'password'
            }
        }
    }
    render() {
        const formDataArray =[];
        for(let key in this.state.FormData){
            formDataArray.push({
                id: key,
                config: this.state.FormData[key]
            });
        }

        return(

            <div className='Container'>
                <form>
                    <img src={logo} style={{ width:"200px", margin:'20px 40%'}}/>

                    {
                        formDataArray.map(element=> (
                            <div className="form-group" key={element.id}>
                                <input
                                       type={element.config.inType}
                                       className="form-control inputField"
                                       placeholder={element.config.name} />
                            </div>))
                    }


                    <button type="submit"  className='LoginButton btn'>Login</button>
                </form>
            </div>
        );
    }
}
export default Login;

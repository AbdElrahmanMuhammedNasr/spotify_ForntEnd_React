import React,{Component} from "react";
import BandList from "./BandList/BandList";
import Browse from "./Browse/Browse";
import {Route, Switch} from "react-router";
import TheHome from "./TheHome/TheHome";
class Home extends Component{
        render() {
            return(
                <div className='row' style={{
                    // height:'95vh',
                    // overflowY:'scroll'
                }}>
                   
                    <section>
                        <Switch>
                            <Route path='/home' exact component={TheHome}/>
                            <Route path='/home/browse' component={Browse}/>
                            <Route path='/home/band' component={BandList}/>
                        </Switch>

                    </section>

                </div>
            );
        }
}
export default Home;

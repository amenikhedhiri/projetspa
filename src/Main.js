import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
}from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import sign from "./Sign";
import Map from "./Mapp"


class Main extends Component {

    constructor(){
        super();
        this.state={ Sign:"sign",};
    }
    toogleTitle =() => {

if (this.state.Sign === '') {

    this.setState({ Sign:'formulaire'});
}else {
    this.setState({ Sign:''});
}
    }
  
 render(){
    return (
          
        
               

        <HashRouter>
            <div> 
                <input type="checkbox" id="Signin" onClick={this.toogleTitle} defaultChecked />
                <label htmlFor="Signin"> show Sign</label>
               
                </div>
                
            
        <div>
            <h1> Simple SPA</h1>
            <ul className="header">
                <li><NavLink to="/"> Home</NavLink></li>
                <li><NavLink to="/stuff"> Stuff</NavLink></li>
                <li><NavLink to="/contact"> Contact</NavLink></li>
                <li>< NavLink to="/map">Map</ NavLink></li>
                <h2> {this.state.Sign}</h2>

               
                
            </ul>
            <div>
                    <ul>
                        
                    </ul>
                    </div>
            <div className ="content">
                <Route exact path ="/" component={Home}/>
                <Route path ="/stuff" component={Stuff}/>
                <Route path ="/contact" component={Contact}/>
                <Route path ="/sign" component={sign}/>
                <Route path ="/map" component={Map}/>
                

               

                

            </div>
        </div>
         
</HashRouter>
    );
    }
}   


export default Main;
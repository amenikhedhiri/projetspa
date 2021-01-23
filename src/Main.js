import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
}from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import sign from "./Sign"



class Main extends Component {

    constructor(){
        super();
        this.state={ title:"reawt state",};
    }
    toogleTitle =() => {

if (this.state.title === '') {

    this.setState({ title:'react state'});
}else {
    this.setState({ title:''});
}
    }
  
 render(){
    return (
          
        
               

        <HashRouter>
            <div> 
                <input type="checkbox" id="showTitle" onClick={this.toogleTitle} defaultChecked />
                <label htmlFor="showTitle"> show title</label>
               
                </div>
                <h2> {this.state.title}</h2>

                <div>
                    <ul>
                        <li>< NavLink to="/sign">SignUp</ NavLink></li>
                    </ul>
                    </div>
            
        <div>
            <h1> Simple SPA</h1>
            <ul className="header">
                <li><NavLink to="/"> Home</NavLink></li>
                <li><NavLink to="/stuff"> Stuff</NavLink></li>
                <li><NavLink to="/contact"> Contact</NavLink></li>
            </ul>
            <div>
                    <ul>
                        <li>< NavLink to="/map">Map</ NavLink></li>
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
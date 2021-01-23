import React,{Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";

class Mapp extends Component{

render(){

return (
<div>
 <Map google={this.props.google} zoom={10}>
   
   <Marker onClick={this.onMarkerClick}
           name={'Current location'} />
  
   <InfoWindow onClose={this.onInfoWindowClose}>
       
   </InfoWindow>
  </Map>
</div>



);

}
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAKCkYvci7vp9_fZ2e60a6S5dzjirNewwM")
  })(Mapp)
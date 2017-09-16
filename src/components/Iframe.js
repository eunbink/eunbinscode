import React, { Component } from 'react';
import YouTube from 'react-youtube';



class Iframe extends Component {
  render(){
    return ( 
                        //엄마한테 받은 정보를 사용할때 propname!!!을 사용하기.
      <div><YouTube videoId={this.props.updateVideoId}/></div>
    );
 
  }
  }

      
  
  export default Iframe;
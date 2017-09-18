import React, { Component } from 'react';
import YouTube from 'react-youtube';


//엄마가 이 딸한테는 전화기를 받는 기능만 넣어서 보내줫다. 전화 걸 필요가없다.
class Iframe extends Component {
  render(){
    return ( 
                        //엄마한테 받은 정보를 사용할때 propname!!!을 사용하기.
      <div><YouTube videoId={this.props.updateVideoId}/></div>
    );
 
  }
  }

      
  
  export default Iframe;
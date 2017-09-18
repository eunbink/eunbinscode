import React, { Component } from 'react';
import './App.css';
import Box from './components/Box.js';
import Iframe from './components/Iframe.js';


//pass data from parent to child - props.
//pass data from child to parent - callback and state of the parent..

class App extends Component {
  constructor(){
    super();
    this.state = {
      //맨처음 로딩할때 default value.
      //value를 바꿀라면 setstate을 사용한다.
      //딸에게 받은 정보를 저장하는곳
      
      videoIdFromBox:'leE10vdvkho'
    };

    this.getSelectedId = this.getSelectedId.bind(this);
  }


  


//다른 컴포넌트가 알아야할 데이타 정보를 파라미터에 넣기.
//엄마의 전화기. 전화기를 복사해서 딸들에게 준다.
            //전화기로 딸이 준 데이타를 파라미터로 정보를 받는다.
            //딸이 받은 정보를 업데이트를 하는곳. state에 업데이트하려면 setstate 사용하기.
            //propertyname과 데이터이름.
getSelectedId (videoId) {
  this.setState({videoIdFromBox:videoId})

}


  render() {
   
    return (
    
      <div className='app'> 
        <div className='header'>MOVIE TRAILERS</div>
        <div className='inputContainer'>
                                  {/* 엄마가 딸한테 그냥정보만 줄때에는 state에 저장되어있는 property이름을 저장해서 그 value를 준다. */}
<div className='inputBox'><Iframe updateVideoId = {this.state.videoIdFromBox}/></div>
                                  {/* 엄마가 전화기를 건네준다. */}.
                                  {/* updateVideoId는 엄마가 만든 전화기 이름(props name) */}
                                  {/* ()랑 같이 전달하면 invoke가 되기때문에 function만 보내고 child 에서 invoke를한다. */}
                                  {/* data 있는 곳에서 invoke하기. */}
<div className='inputVideo' ><Box updateVideoId = {this.getSelectedId}/></div>
        </div>
        </div>
    )
    } 
  }    
       

export default App;


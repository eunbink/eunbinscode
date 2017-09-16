import React, { Component } from 'react';
import './App.css';
import Box from './components/Box.js';
import Iframe from './components/Iframe.js';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      //맨처음 로딩할때 default value.
      //value를 바꿀라면 setstate을 사용한다.
      //딸에게 받은 정보를 저장하는곳
      
      videoIdFromBox:'Z2QTd54yU5o'
    };

    this.buttonValue = this.buttonValue.bind(this);
  }


  
componentDidMount(){
  //make request to endpoint
  // from endpoing make api articles request
  // send back articles
  axios.get(`https://newsapi.org/v1/articles?source=${'bbc-news'}&apiKey=ecc3d5a1e7a44a258f30a7e054a4ba49`)
      .then((response)=>{ 
        console.log(response)
        this.setState({
          articles:response.data.articles 
        })
      })    
}
//다른 컴포넌트가 알아야할 데이타 정보를 파라미터에 넣기.
//엄마의 전화기. 전화기를 복사해서 딸들에게 준다.
            //전화기로 딸이 준 데이타를 파라미터로 정보를 받는다.
            //딸이 받은 정보를 업데이트를 하는곳. state에 업데이트하려면 setstate 사용하기.
            //propertyname과 데이터이름.
buttonValue (videoId) {
  this.setState({videoIdFromBox:videoId})

}







  render() {
   
    return (
      <div className='app'>
        <div className='header'>MY PLAYLIST</div>
        <div className='inputContainer'>
                                  {/* 엄마가 딸한테 그냥정보만 줄때에는 state에 저장되어있는 property이름을 저장해서 그 value를 준다. */}
<div className='inputBox'><Iframe updateVideoId = {this.state.videoIdFromBox}/></div>
                                  {/* 엄마가 전화기를 건네준다. */}.
                                  {/* updateVideoId는 엄마가 만든 전화기 이름(props name) */}
                                  {/* 프랍이 함수이기때문에 ()를 같이 보낸다 */}
<div className='inputVideo'><Box updateVideoId = {this.buttonValue}/></div>
        </div>
        </div>
    )
    } 
  }    
       

export default App;


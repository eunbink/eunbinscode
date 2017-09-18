import React, { Component } from 'react';
import axios from 'axios';

//엄마가 딸한테 전화기로 다시 전화를 받아야되서 전회받고 걸수있는 기능을 집어넣어줫다.
class Box extends Component {   
    constructor(){
        super();
        
        this.state = {
            selectedValue:'',
            videoIds: { }
        }
        
        this.clickButton = this.clickButton.bind(this);
        this.videoSelected = this.videoSelected.bind(this);
        
    }

    componentDidMount(){
        axios.get('/api/videos').then(response => {
            return this.setState({videoIds:response.data});
            
        })
    }

    //딸들이 엄마에게로부터 전화기를 받는다. (함수만들기)
    //전화기를 받아서 그거를 사용해서 엄마에게 전달해준다. (콜벡 사용하기)
    //엄마한테 받은전화기(전화기이름)로 propsname로 사용해서 전달하고자 하는 데이타를 프라미터에 넣는다.
    //this.props.updateVideoId 는 전화기 (this.state.selectedValue)는 전달해줄 데이타.
    clickButton(){
        this.props.updateVideoId(this.state.selectedValue)
    }

    //이벤트 value 클릭할때마다 바꾸기.
    videoSelected(videoId){
        this.setState({selectedValue:videoId});
    }

    

    render() {
        return (
            <div className="inputContainer">
                <select className="dropDownContainer" onChange={ (e) => { this.videoSelected(e.target.value) } }>
                <option value={this.state.videoIds.video1}> VIDEO1 </option>
                <option value={this.state.videoIds.video2}> VIDEO2</option>
                <option value={this.state.videoIds.video3}> VIDEO3 </option>
                <option value={this.state.videoIds.video4}> VIDEO4 </option>
                <option value={this.state.videoIds.video5}> VIDEO5</option>
                <option value={this.state.videoIds.video6}> VIDEO6 </option>
                <option value={this.state.videoIds.video7}> VIDEO7 </option>
                <option value={this.state.videoIds.video8}> VIDEO8 </option>
                <option value={this.state.videoIds.video9}> VIDEO9 </option>
                <option value={this.state.videoIds.video10}> VIDEO10</option>
            </select>
                <button className='click' onClick ={ () => this.clickButton() }>CLICK</button>                
            </div>
        );
    }
    
}



export default Box;
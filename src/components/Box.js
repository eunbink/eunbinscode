import React, { Component } from 'react';

class Box extends Component {   
    constructor(){
        super();
        
        this.state = {
            selectedValue:'leE10vdvkho',
            video1:'leE10vdvkho',
            video2:'Z2QTd54yU5o',
            video3:'W4-BFmkPPt4',
            video4:'tFPlBXXuwis',
            video5:'iYPmR1nV0FU',
            video6:'W1fklW6lESw',
            video7:'ZmUaH-n_wbA',
            video8:'Ezf5vJgTTz0',
            video9:'tMY2EayKUBE',
            video10:'gIBzTZv6l3I'      
        }
        
        this.videoSelected = this.videoSelected.bind(this);
        
    }
    //딸들이 엄마에게로부터 전화기를 받는다. (함수만들기)
    //전화기를 받아서 그거를 사용해서 엄마에게 전달해준다. (콜벡 사용하기)
    //엄마한테 받은전화기(전화기이름)로 props로 사용해서 전달하고자 하는 데이타를 프라미터에 넣는다.
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
                <option value={this.state.video1}> VIDEO1 </option>
                <option value={this.state.video2}> VIDEO2</option>
                <option value={this.state.video3}> VIDEO3 </option>
                <option value={this.state.video4}> VIDEO4 </option>
                <option value={this.state.video5}> VIDEO5</option>
                <option value={this.state.video6}> VIDEO6 </option>
                <option value={this.state.video7}> VIDEO7 </option>
                <option value={this.state.video8}> VIDEO8 </option>
                <option value={this.state.video9}> VIDEO9 </option>
                <option value={this.state.video10}> VIDEO10</option>
            </select>
                <button className='click' onClick ={ () => this.clickButton() }>CLICK</button>                
            </div>
        );
    }
    
}



export default Box;